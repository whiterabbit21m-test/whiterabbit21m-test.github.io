---
layout: page
title: Support Me
permalink: /support/
---

# Lightning Support

You can send an arbitrary amount of sats to [whiterabbit21m@21m.tips][21mtips] or one of
my other lightning addresses.

<form method="POST" action="https://btcpay.whiterabbit21m.com/api/v1/invoices" class="btcpay-form btcpay-form--block">
  <input type="hidden" name="storeId" value="5vHj4TmiyYMCkFUpyBYf6rUDvaJ6YA7B74v2G7iYD9D2" />
  <input type="hidden" name="checkoutDesc" value="Donation" />
  <input type="hidden" name="browserRedirect" value="https://www.tuosito.com/grazie" />
  <input type="hidden" name="currency" value="USD" />
  
  <div class="form-group">
    <label for="btcpay-input-price">Importo della donazione (USD):</label>
    <input type="number" id="btcpay-input-price" name="price" value="5" min="1" step="1" class="form-control">
  </div>
  <button type="submit" class="cta-button">Dona con Bitcoin</button>
</form>

<div class="lightning-info">
  <h2>Cos'è un Lightning Address?</h2>
  <p>Un <a href="https://lightningaddress.com/">Lightning Address</a> ti permette di ricevere pagamenti in bitcoin utilizzando un formato simile a un indirizzo email. Prova tu stesso iscrivendoti a <a href="https://stacker.news/r/whiterabbit21m">Stacker News</a> o utilizzando uno di questi bot Telegram: <a href="https://t.me/VentunoTipBot">VentunoTipBot</a>, <a href="https://t.me/SatsMobiBot">SatsMobiBot</a>.</p>
  <p>I miei indirizzi lightning:</p>
  <ul>
    <li><a href="lightning:whiterabbit21m@21m.tips">whiterabbit21m@21m.tips</a></li>
    <li><a href="lightning:whiterabbit21m@sats.mobi">whiterabbit21m@sats.mobi</a></li>
  </ul>
</div>

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
  margin-bottom: 40px;
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
.lightning-info {
  background-color: #1E1E1E;
  padding: 25px;
  border-radius: 8px;
  margin-top: 40px;
}
.lightning-info h2 {
  color: #ffffff;
  margin-bottom: 15px;
}
.lightning-info p, .lightning-info ul {
  color: #ffffff;
}
.lightning-info a {
  color: #4CAF50;
  text-decoration: none;
}
.lightning-info a:hover {
  text-decoration: underline;
}
@media (max-width: 480px) {
  .btcpay-form, .lightning-info {
    padding: 20px;
  }
  
  .cta-button {
    padding: 12px 24px;
  }
}
</style>

[21mtips]: lightning:whiterabbit21m@21m.tips
[satsmobi]: lightning:whiterabbit21m@sats.mobi
