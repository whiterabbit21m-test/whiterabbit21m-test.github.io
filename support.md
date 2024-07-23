---
layout: page
title: Support Me
permalink: /support/
---


# Lightning Support

You can send an arbitrary amount of sats to [whiterabbit21m@21m.tips][21mtips] or one of
my other lightning addresses.[^ln-addr]

[21mtips]: lightning:whiterabbit21m@21m.tips
[satsmobi]: lightning:whiterabbit21m@sats.mobi

[^ln-addr]: A [Lightning Address](https://lightningaddress.com/) allows you to receive bitcoin payments using an e-mail style address format. Try it out yourself by signing up to [Stacker News](https://stacker.news/r/whiterabbit21m) or by using one of these Telegram bots: [VentunoTipBot](https://t.me/VentunoTipBot), [SatsMobiBot](https://t.me/SatsMobiBot). My lightning addresses: [whiterabbit21m@21m.tips][21mtips], [whiterabbit21m@sats.mobi][satsmobi]

<form method="POST" action="https://btcpay.whiterabbit21m.com/api/v1/invoices" class="btcpay-form btcpay-form--block">
  <input type="hidden" name="storeId" value="ABCDEFGHILMNO" />
  <input type="hidden" name="checkoutDesc" value="Donazione per supportare il progetto" />
  <input type="hidden" name="browserRedirect" value="https://www.tuosito.com/grazie" />
  <input type="hidden" name="currency" value="USD" />
  
  <div class="form-group">
    <label for="btcpay-input-price">Importo della donazione (USD):</label>
    <input type="number" id="btcpay-input-price" name="price" value="5" min="1" step="1" class="form-control">
  </div>

  <button type="submit" class="cta-button">Dona con Bitcoin</button>
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
- Contribuire al nostro codice open-source su GitHub

Grazie per il tuo supporto!
