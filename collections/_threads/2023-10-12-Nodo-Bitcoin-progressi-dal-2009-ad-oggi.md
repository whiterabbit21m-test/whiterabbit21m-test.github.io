---
layout: thread
title: "Nodo Bitcoin, evoluzione dal 2009 ad oggi"
subtitle: "Speech di Giacomo Zucco su come si è evoluto il network di Bitcoin specializzandosi su diversi campi."
date: 2023-10-12
blocktime: 
source: https://spotify.link/1aBp1cnFPDb
redirect_from: /nodi
archive: 
author: WhiteRabbit
category: bitcoin
tags:
 - Bitcoin
 - Writing
---

Uno dei principali problemi di comprensione di cosa sia un nodo Bitcoin e di quale sia il suo compito è che 
inizialmente (nel 2009) quello che veniva definito nodo svolegeva una serie di compiti, per poi arrivare ai 
giorni nostri specializzandosi su diversi campi. Uno di questi campi ha mantenuto per tradizione il nome 
originario "nodo" invece gli altri campi sono stati definiti con nomi diversi che andremo ad analizare di seguito.

---

### 2009 Genesis Block

Quando nel 2009 il primo blocco Genesi è partito tutti usavano il client scritto da Satoshi, il client di Satoshi 
generava quello che Satoshi nel Whitepaper chiamava nodo. Quindi ogni utente che voleva usare Bitcoin doveva far 
girare questo nodo che svolegeva sostanzialmente cinque compiti:
- Scaricare, validare e inoltrare a best effort a tutti gli altri nodi della rete blocchi e transazioni.
- Creare il template di una transazione che spende.
- Firmare la transazione per poterla spendere.
- Creare un blocco candidato con tutte le transazioni non ancora confermate nella memory pool aggregandole con l' hash 
del blocco precedente l' adgiust timestamp ecc ecc.
- Risolvere la prova di lavoro (PoW), quindi fare molti tentativi con il campo nonce e con i campi extra nonce finchè 
non si trovava l' hash corretto.

Quindi nel 2009 tutti i nodi svolgono questi cinque compiti, è importante avere un nodo ed è l' unico modo per usare 
Bitcoin e non ci sono alternative. Questo nodo e trustless, nel senso che un altro nodo non può mentire ad altri nodi 
se non con un solo unico modo chiamato "reorg", ovvero se gli altri nodi hanno piu potere di CPU potrebbero dare piu peso 
a una versione della storia sempre valida ma diversa da quella a cui e stato dato peso prima. Un tipico esempio di reorg 
potrebbe essere un double-spending commerciale, quindi se gli altri nodi con più potenza di calcolo del mio nodo 
decidono di pagarmi e dopo aver ricevuto il pagamanto riescono a fare un reorg riuscirebbero a riprendendosi i Bitcoin, 
quindi quando si paga qualcuno bisogna essere certi che quel qualcuno non sia in combutta con la maggiornaza 
del CPU power, ma dopo un pò di tempo d' attesa diventa più costoso per chi effettua il reorg perdere il block reward
di quando guadagnerebbe facendo un double-spending. Quindi si può dire che esiste un attacco e che non è totalmente 
trustless in quando bisogna fidarsi della maggioranza, ma solo nel senso di una remota collusione tra chi sta pagando
e chi ha il 50% +1 della potenza di calcolo totale e considerando che sia conveniente farlo finchè il costo del block 
reward che si perde non superi il valore della transazione che si vuole riscrivere.

---

### 2010 Slash inventa le mining pool

Nel novembre 2010 già cambia tutto, Slash inventa la mining pool. Sostanzialmente se chi minava in modo solitario con la propria CPU 
aveva molta varianza, nel senso che è vero che si vinceva tutta la ricompesa del blocco ma si vinceva cosi raramente che 
si andava  in bancarotta prima di aver vinto, se invece si ci univa a minare insime a tanti altri condividendo la potenza 
di calcolo si aveva la stessa vincita divisa per gli utenti della pool ma si aveva anche meno varianza e quindi era più 
difficile andare fuori mercato vincendo di meno ma piu frequentmente. La prima mining pool creata molto velocemnte manda 
fuori mercato i minatori solitari. L' aggiunta della mining pool cambia già la definizone originaria di nodo perchè quando 
viene utilizzata la CPU del computer non si sta più usando la potenza di calcolo in un nodo che deve scaricare, validare 
blocchi e tansazioni e non crea più il blocco canditato, ma viene delegato tutto questo al nodo della pool, il nodo 
della pool delaga invece ai minatori della pool solo la risoluzione della PoW. I minatori della pool se dovessero 
rivalidare tutto il blocco canditato con un nodo vero e proprio perderebbero troppo tempo e si devono già fidare 
perchè la ricompensa del blocco viene mantenuta dalla pool e viene data sulla base di fiducia. Quindi si ha un computer 
con CPU con il quale si fa solo ricerca della PoW e solo la pool ha effettivamente un nodo. Si è gia diviso il lavoro del 
nodo dalla pool, la quale svolge il lavoro di validare tutto e preparare il blocco candidato lasciando ai monatori il 
lavoro di minare. Esistono ancora i minatori che non vogliono partecipare a una pool anche se non sono più così competitivi 
perchè un pò tagliati fuori dal mercato ma lasciano le loro CPU accese continuando a scaricare, validare ed inoltrare 
tutto quanto e magari ogni tanto potrebbero vincere una reward. Sempre nel 2010 avviene il passaggio da CPU mining a 
GPU mining, con il primo blocco minato da Art Force con GPU a luglio 2010 il che vuol dire già che non tutti i nodi 
potevano competere per la risoluzione della PoW, ma solo una parte, in genere i computer da gaming che avevano una 
scheda grafica specialistica. Nella fine del 2010 già le GPU avevano mandato fuori mercato i nodi che cercavano di fare
PoW con CPU. Quindi già a fine 2010 abbiamo una specializzazione con un gruppo di nodi che sono quelli delle mining 
pool e di un gruppo di utenti che non minano ma scaricano, validano e broadcastano transazioni e un altro gruppo di nodi che 
sono quelli dei minatori delle pool che solitamente sono dotati di una buona e performate GPU. Questi ultimi in genere 
essendo utenti Bitcoin fanno girare due sofware, il primo che gestisce la GPU in contatto con la mining pool e un secondo 
software che e il Bitcoin Core che viene utilizzato come portafoglio Bitcoin.

---

### 2011 I wallet

Per la prima volta arriva un wallet mobile su android, Bitcoin Wallet. Ovviamente questo wallet mobile non puo contenere 
un nodo, non tanto per un problema di storage che potrebbe essere superato con una microSD, ma proprio per un problema
di banda e di CPU per validare tutte le firme dal 2009 in poi, non sarebbe stato possibile. Subito dopo Bitcoin Wallet 
arriva Electrum Wallet prima su desktop e poi anche su mobile. A questo punto con l' arrivo dei wallet si separa 
ulteriormente il lavoro del nodo, nel 2009 il nodo faceva tutto, nel 2010 fa tutto tranne risolvere la PoW ed adesso nel 
2011 non crea e non firma transazioni, questo compito viene delegato per alcuni utenti ai wallet. In questo modo si 
crea un' altra classe di nodi, quelli che oltre a scaricare, validare e inoltrare addirittura servono a questi wallet 
le informazioni della rete Bitcoin. Questi wallet si possono considerare fidati appunto perchè ricevono informazioni da 
nodi terzi. Mentre possono essere cosiderati trustless per quanto riguarda la gestione delle chiavi private. Per esempio 
il wallet Electrum sa che e stata ricevuta una transazione perchè attravarso degli indici prende le informazioni della 
transazione fornita da un nodo chiamato Electrum Server. Ovviamente c'è la possibilità che il nodo che da l' informazione 
la dia falsa, ma questo si riesce a mitigare connettendosi a tanti Electrum Server, di coseguenza nasce il problema 
di privacy nel senso che l' Electrum Server a cui si connette il wallet può tener traccia delle informazioni richieste e può 
registrare tutti gli indirizzi del wallet. Nel 2011 la parola nodo rimane assegnata al software che scarica, valida e inoltra
blocchi e transazioni, il software che crea le transazioni viene chiamato wallet, il software che crea blocchi 
canditati viene chiamato mining pool, invece il software che utilizza prima la GPU e poi le FPGA e le ASIC infine sarà 
il firmware del produttore della macchina.

---

### Asic
 Già nella fine del 2011 per la PoW vengono utilizzitate le FPGA che già nel 2013 vengono soppiantatate dalle ASIC. Sia
 le FPGA che le ASIC non sono computer generici che possono far girare nodi per scaricare validare e inoltrare blocchi 
 e transazioni. Già nel 2013 quindi chi trova la soluzione dei blocchi non ha un nodo nella stessa macchina, non è
 materialmente possibile averlo. Il produttore di blocchi è una macchina che non fa nessun tipo di validazione, la 
 ASIC e una macchina che non può scaricare e validare blocchi e transazioni, può solo fare hash collision continua.
 Adesso si può dedurre che abbiamo un miner (che non può essere chiamato nodo) che produce soluzioni al problrma dei 
 blocchi, abbiamo un coordinatore della mining pool che (si spera) abbia un nodo ed infine c'è l' utente normale il 
 quale ha un nodo che scarica, valida e inoltra blocchi e transazioni. 
 
---

### Hardware wallet

 Chi ha un nodo molto spesso già non usa più Bitcoin Core come wallet perche abbiamo anche l' arrivo dei così detti hardware 
 wallet, che possono essere considerati un ulteriore specializzazione dei wallet. Già nel 2014 arrivano Trezor e 
 Ledger. Questi ultimi non possono essere dei nodi e quindi abbiamo il Bitcoin Core che continua ad essere usato
 come nodo e il Trezor o il Ledger hanno il compito di firmare soltanto le transazioni. Con l' arrivo del multifirma, 
 delle fees più difficili da stimare e con il coin control arrivano dei wallet ancora più specilizzati come per esempio 
 Specter o Sparrow, quasi nessuno ai giorni nostri usa più Bitcoin Core come wallet, essendo molto rudimentale ha 
 bisogno di inferfacce specifiche per gli hardware wallet e non gestisce bene e con facilità multisig e descriptor. 

 ---

### Conclusione
 
 Bitcoin Core viene utilizzato tendenzialmente come nodo con la funzione principale di questa parola che prima comprendeva 
 i compiti che abbiamo tattato mentre adesso finisce per indicare solo scaricare, validare ed inoltrare blocchi e 
 transazioni. Attenzione non viene mai utilizzato il termine storare perchè solo alcuni nodi storano effettivamente le 
 informazioni. I così detti nodi archive fanno storage delle informazioni mentre i così detti nodi pruned dopo aver scaricato, 
 validato e inoltrato possono anche cancellare la storia passata. 

 Teniamo conto che Satoshi all' inizio del 2008 nel Whitepaper che scrive non spiega tutto Bitcoin, non si parla di script,
 di smart contract, non e menzionato il limite dei 21 milioni, non si parla dell' aggiustamento della difficiltà specifico, 
 non si parla dell' halving. Il Whitepaper si concentra solo sul problema del double-spending che era l' unico problema 
 rimasto insoluto nel 2008, quindi Satoshi scrive un Whitepaper che descrive solo uno degli aspetti di Bitcoin, come risolvere 
 il double-spending. Nel Whitepaper descrive due tipologie di classi di utenti e una delle due la chiama nodi. I nodi come abbiamo detto 
 scaricavano, validavano e inoltravano blocchi e transazioni (cosa che avviene ancora oggi) e creavano e firmavano 
 transazioni (cosa che non fanno piu normalemnte). Satoshi indicava che i nodi erano un tutt' uno prima della 
 specilizzazione nei vari campi. Gli ASIC non possono essere considerati nodi per i motivi già elencati in precedenza.
