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

<form method="POST" action="https://btcpay.whiterabbit21m.com/api/v1/invoices" class="btcpay-form btcpay-form--block">
  <input type="hidden" name="storeId" value="ABCDEFGHILMNO" />
  <input type="hidden" name="checkoutDesc" value="Donazione per supportare il progetto" />
  <input type="hidden" name="browserRedirect" value="https://www.tuosito.com/grazie" />
  <input type="hidden" name="currency" value="USD" />
  
  <div class="form-group">
    <label for="btcpay-input-price">Importo della donazione (USD):</label>
    <input type="number" id="btcpay-input-price" name="price" value="5" min="1" step="1" class="form-control">
  </div>

  <input type="image" class="submit" name="submit" src="https://btcpay.whiterabbit21m.com/Storage/e9ffc4d5-ab3b-469e-8792-c8d2914c4948" alt="Dona con BTCPay Server">
</form>

<style>
.btcpay-form {
  display: inline-block;
  padding: 25px;
  border-radius: 8px;
  background-color: #1E1E1E;
  color: #ffffff;
  font-family: Arial, sans-serif;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #ffffff;
}

.form-control {
  width: 100%;
  padding: 12px;
  border: 1px solid #333;
  border-radius: 4px;
  background-color: #2C2C2C;
  color: #ffffff;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.form-control:focus {
  outline: none;
  border-color: #4CAF50;
}

.cta-button {
  display: inline-block;
  background-color: #4CAF50;
  color: #ffffff;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.2s ease;
  cursor: pointer;
  text-align: center;
  width: 100%;
}

.cta-button:hover, .cta-button:focus {
  background-color: #45a049;
  transform: translateY(-2px);
}

.cta-button:active {
  transform: translateY(0);
}

@media (max-width: 480px) {
  .btcpay-form {
    padding: 20px;
  }
  
  .cta-button {
    padding: 12px 24px;
  }
}
</style>

## Altre Forme di Supporto

Se preferisci supportarci in altri modi, puoi:

- Condividere i nostri contenuti sui social media
- Partecipare ai nostri eventi e workshop
- Contribuire al nostro codice open-source su GitHub

Grazie per il tuo supporto! Insieme, possiamo far crescere e migliorare l'ecosistema Bitcoin.
