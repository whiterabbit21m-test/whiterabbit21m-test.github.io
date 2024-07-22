// assets/js/bitcoin-status.js

function updateBitcoinStats() {
  function updateUptime() {
    const startDate = new Date('2009-01-03T18:15:05Z');
    const now = new Date();
    const uptime = now - startDate;
    const years = Math.floor(uptime / (365 * 24 * 60 * 60 * 1000));
    const days = Math.floor((uptime % (365 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
    document.getElementById('uptime-clock').textContent = `${years} anni, ${days} giorni`;
  }

  async function fetchBlockchainStats() {
    try {
      const response = await fetch('https://api.blockchain.info/stats');
      const data = await response.json();
      document.getElementById('block-count').textContent = data.n_blocks_total.toLocaleString();
      document.getElementById('hash-rate').textContent = (data.hash_rate / 1e9).toFixed(2) + ' GH/s';
      document.getElementById('difficulty').textContent = data.difficulty.toLocaleString();
    } catch (error) {
      console.error('Errore nel recupero dei dati della blockchain:', error);
    }
  }

  updateUptime();
  fetchBlockchainStats();
  setInterval(updateUptime, 60000);
  setInterval(fetchBlockchainStats, 60000);
}

document.addEventListener('DOMContentLoaded', updateBitcoinStats);
