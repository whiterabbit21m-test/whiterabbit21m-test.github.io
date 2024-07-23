---
layout: page
title: Supportaci
permalink: /support/
---

# Supporta il Nostro Progetto

Grazie per il tuo interesse nel supportare il nostro progetto! Il tuo contributo ci aiuta a continuare a fornire risorse educative e strumenti per la comunità Bitcoin.

## Perché Supportarci?

- Manteniamo risorse educative gratuite su Bitcoin
- Sviluppiamo strumenti open-source per la comunità

## Come Puoi Supportarci

Puoi fare una donazione usando Bitcoin attraverso BTCPay Server. È sicuro, privato e ci permette di ricevere il 100% della tua donazione.

<button class="btcpay-custom-button" onclick="openBTCPayModalDonation()">Dona con Bitcoin</button>

<button class="btcpay-custom-button" onclick="openBTCPayModalDonation()">Dona con Bitcoin</button>

<script>
function openBTCPayModalDonation() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      window.open(data.url, '_blank');
    }
  };
  xhttp.open("POST", "https://btcpay.whiterabbit21m.com/api/v1/invoices", true);
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.setRequestHeader("Authorization", "Bearer 123456789");
  var data = JSON.stringify({"storeId": "ABCDEFGHILMNO", "amount": "0", "currency": "USD", "allowCustomPaymentAmounts": true});
  xhttp.send(data);
}
</script>

<script src="https://btcpay.whiterabbit21m.com/modal/btcpay.js"></script>

## Altre Forme di Supporto

Se preferisci supportarci in altri modi, puoi:

- Condividere i nostri contenuti sui social media
- Partecipare ai nostri eventi e workshop
- Contribuire al nostro codice open-source su GitHub

Grazie per il tuo supporto! Insieme, possiamo far crescere e migliorare l'ecosistema Bitcoin.
