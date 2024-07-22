let currentBlockHeight = null;

async function getBlockHeight() {
    try {
        const response = await fetch('https://blockstream.info/api/blocks/tip/height');
        return parseInt(await response.text());
    } catch (error) {
        console.error('Error fetching block height:', error);
        return null;
    }
}

async function getNetworkFees() {
    try {
        const response = await fetch('https://blockstream.info/api/fee-estimates');
        const feeEstimates = await response.json();
        return {
            high: Math.round(feeEstimates['1']),
            medium: Math.round(feeEstimates['6']),
            low: Math.round(feeEstimates['144'])
        };
    } catch (error) {
        console.error('Error fetching network fees:', error);
        return null;
    }
}

async function getLatestBlockDetails() {
    try {
        const response = await fetch('https://mempool.space/api/v1/blocks');
        const blocks = await response.json();
        const latestBlock = blocks[0];
        return {
            height: latestBlock.height,
            hash: latestBlock.id,
            timestamp: new Date(latestBlock.timestamp * 1000).toLocaleString(),
            size: (latestBlock.size / 1024 / 1024).toFixed(2) + ' MB',
            weight: (latestBlock.weight / 1000).toFixed(2) + ' KWU',
            fees: (latestBlock.extras.totalFees / 100000000).toFixed(8) + ' BTC'
        };
    } catch (error) {
        console.error('Error fetching block details:', error);
        return null;
    }
}

function updateCountdown(blockHeight) {
    if (blockHeight === null) {
        document.getElementById("countdown").innerHTML = "Error fetching data. Please try again later.";
        return;
    }

    const halvingInterval = 210000;
    const nextHalvingBlock = Math.ceil(blockHeight / halvingInterval) * halvingInterval;
    const blocksUntilHalving = nextHalvingBlock - blockHeight;
    const secondsPerBlock = 600;
    const secondsUntilHalving = blocksUntilHalving * secondsPerBlock;
    const halvingDate = new Date(Date.now() + secondsUntilHalving * 1000);
    
    const now = new Date();
    const timeLeft = halvingDate.getTime() - now.getTime();

    const years = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 365.25));
    const days = Math.floor((timeLeft % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const currentBlockElement = document.getElementById("current-block");
    currentBlockElement.textContent = `Block: ${blockHeight}`;
    currentBlockElement.onclick = () => {
        window.open(`https://mempool.space/block/${blockHeight}`, '_blank');
    };

    document.getElementById("halving-date").textContent = `Expected on: ${halvingDate.toDateString()}`;

    document.getElementById("countdown").innerHTML = `
        <span class="highlight">${years}</span> years, <span class="highlight">${days}</span> days, and <span class="highlight">${hours}</span> hours<br>
        (<span class="highlight">${blocksUntilHalving}</span> blocks remaining)
    `;

    const progressPercentage = (blockHeight % halvingInterval / halvingInterval) * 100;
    document.getElementById("progress-bar").style.width = `${progressPercentage}%`;
    document.getElementById("progress-percentage").textContent = `${progressPercentage.toFixed(2)}%`;

    if (blocksUntilHalving <= 0) {
        document.getElementById("countdown").innerHTML = "The Bitcoin Halving has occurred!";
        document.getElementById("progress-bar").style.width = "100%";
        document.getElementById("progress-percentage").textContent = "100%";
    }
}

function updateNetworkFees(fees) {
    document.getElementById("high-fee").textContent = fees?.high || "Error";
    document.getElementById("medium-fee").textContent = fees?.medium || "Error";
    document.getElementById("low-fee").textContent = fees?.low || "Error";
}

function updateBlockDetails(details) {
    if (details) {
        ["height", "hash", "timestamp", "size", "weight", "fees"].forEach(key => {
            document.getElementById(`block-${key}`).textContent = details[key];
        });
    } else {
        ["height", "hash", "timestamp", "size", "weight", "fees"].forEach(key => {
            document.getElementById(`block-${key}`).textContent = "Error";
        });
    }
}

async function broadcastTransaction() {
    const txHex = document.getElementById('tx-hex').value.trim();
    const resultElement = document.getElementById('broadcast-result');

    if (!txHex) {
        resultElement.textContent = 'Please enter a signed transaction hex.';
        return;
    }

    try {
        const response = await fetch('https://blockstream.info/api/tx', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
            },
            body: txHex
        });

        if (response.ok) {
            const txid = await response.text();
            resultElement.textContent = `Transaction broadcasted successfully. TXID: ${txid}`;
            resultElement.style.color = 'green';
        } else {
            const errorText = await response.text();
            resultElement.textContent = `Error broadcasting transaction: ${errorText}`;
            resultElement.style.color = 'red';
        }
    } catch (error) {
        resultElement.textContent = `Error: ${error.message}`;
        resultElement.style.color = 'red';
    }
}

async function getRecentTransactions() {
    try {
        console.log("Fetching recent transactions...");
        const response = await fetch('https://mempool.space/api/mempool/recent');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("Fetched transactions:", data);
        return data;
    } catch (error) {
        console.error('Error fetching recent transactions:', error);
        return null;
    }
}

function generateSampleTransactions(count) {
    return Array.from({ length: count }, (_, i) => ({
        txid: `sample-tx-${i}`,
        fee: Math.floor(Math.random() * 50000),
        vsize: Math.floor(Math.random() * 1000 + 200),
        value: Math.floor(Math.random() * 10000000),
        isSample: true
    }));
}

function createTransactionListItem(tx) {
    const li = document.createElement('li');
    li.className = 'transaction-item';
    
    const feeRate = (tx.fee / tx.vsize).toFixed(2);
    const btcValue = tx.value / 100000000; // Convert satoshis to BTC
    const value = btcValue.toFixed(8).replace('.', ',');
    
    li.innerHTML = `
        <span class="txid" onclick="window.open('https://mempool.space/tx/${tx.txid}', '_blank')">${tx.txid.substring(0, 8)}...</span>
        <span>Fee: ${tx.fee} sats</span>
        <span>Size: ${tx.vsize} vBytes</span>
        <span>Fee Rate: ${feeRate} sat/vB</span>
        <span>Value: ${value} BTC</span>
    `;
    
    return li;
}

async function updateMempoolTransactions() {
    console.log("Updating mempool transactions...");
    const transactionList = document.getElementById('transaction-list');
    if (!transactionList) {
        console.error("Transaction list container not found!");
        return;
    }
    
    let newTransactions = await getRecentTransactions();
    
    if (!newTransactions || newTransactions.length === 0) {
        console.log("Using sample transactions due to API error or empty response");
        newTransactions = generateSampleTransactions(20);
    } else {
        console.log(`Received ${newTransactions.length} real transactions`);
        newTransactions = newTransactions.slice(0, 20); // Ensure we only have 20 transactions
    }

    // Remove old transactions
    while (transactionList.firstChild) {
        transactionList.removeChild(transactionList.lastChild);
    }

    // Add new transactions
    newTransactions.forEach(tx => {
        const txElement = createTransactionListItem(tx);
        transactionList.appendChild(txElement);
    });
}

async function updateData() {
    const [newBlockHeight, fees, blockDetails] = await Promise.all([
        getBlockHeight(),
        getNetworkFees(),
        getLatestBlockDetails()
    ]);
    
    if (newBlockHeight !== null && newBlockHeight !== currentBlockHeight) {
        currentBlockHeight = newBlockHeight;
        updateCountdown(currentBlockHeight);
    }
    
    updateNetworkFees(fees);
    updateBlockDetails(blockDetails);
}

async function init() {
    console.log("Initializing...");
    await updateData();
    await updateMempoolTransactions();
    setInterval(updateData, 60000); // Update data every minute
    setInterval(updateMempoolTransactions, 5000); // Update mempool transactions every 5 seconds
    document.getElementById('broadcast-btn').addEventListener('click', broadcastTransaction);
    console.log("Initialization complete");
}

document.addEventListener('DOMContentLoaded', init);
