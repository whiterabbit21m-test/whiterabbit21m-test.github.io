document.addEventListener('DOMContentLoaded', () => {
  const productSections = document.querySelectorAll('.product-section');
  const categoryLinks = document.querySelectorAll('.product-categories a');
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const checkoutButton = document.getElementById('checkout-button');
  const checkoutModal = document.getElementById('checkout-modal');
  const checkoutForm = document.getElementById('checkout-form');
  let cart = [];

  function showCategory(categoryId) {
    productSections.forEach(section => {
      section.style.display = section.id === categoryId ? 'block' : 'none';
    });
  }

  categoryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      showCategory(link.getAttribute('href').substring(1));
    });
  });

  if (productSections.length > 0) {
    showCategory(productSections[0].id);
  }

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', addToCart);
  });

  function addToCart(event) {
    const productId = event.target.dataset.id;
    const product = findProduct(productId);
    if (product) {
      cart.push(product);
      updateCartDisplay();
      console.log('Product added to cart:', product);
    } else {
      console.error(`Unable to add product with id ${productId} to cart`);
    }
  }

  function findProduct(id) {
    for (let category in productsData) {
      const product = productsData[category].find(p => p.id === id);
      if (product) return product;
    }
    return null;
  }

  function updateCartDisplay() {
    cartItems.innerHTML = cart.map(item => `<p>${item.name} - ${item.price} USD</p>`).join('');
    cartTotal.textContent = `${calculateTotal()} USD`;
  }

  function calculateTotal() {
    return cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
  }

  checkoutButton.addEventListener('click', () => {
    checkoutModal.style.display = 'block';
  });

  checkoutForm.addEventListener('submit', handleCheckout);

  async function handleCheckout(event) {
    event.preventDefault();
    const formData = new FormData(checkoutForm);
    const customerData = Object.fromEntries(formData);
    
    customerData.cart = cart.map(item => ({
      id: item.id,
      name: item.name,
      price: item.price
    }));

    try {
      console.log('Sending customer data:', customerData);
      const response = await createBTCPayInvoice(customerData);
      console.log('Response from createBTCPayInvoice:', response);
      if (response && response.checkoutLink) {
        console.log('Redirecting to checkout:', response.checkoutLink);
        window.location.href = response.checkoutLink;
      } else {
        console.error('Invalid response from createBTCPayInvoice:', response);
        alert('Error creating invoice. Please check the console for more details.');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert(`An error occurred during checkout: ${error.message}. Please check the console for more details.`);
    }
  }

  async function createBTCPayInvoice(customerData) {
    const btcPayServerUrl = 'https://btcpay.whiterabbit21m.com';
    const storeId = '5vHj4TmiyYMCkFUpyBYf6rUDvaJ6YA7B74v2G7iYD9D2';
    const apiKey = '9633c153628208369db7d932556dc23d3dfc6756'; // Assicurati di sostituire questo con il tuo vero token API

    const invoiceData = {
      amount: calculateTotal(),
      currency: 'USD',
      metadata: {
        orderId: Date.now().toString(),
        itemDesc: cart.map(item => item.name).join(', '),
      },
      checkout: {
        speedPolicy: 'HighSpeed',
        paymentMethods: ['BTC'],
        defaultPaymentMethod: 'BTC'
      },
      buyer: {
        name: customerData.name,
        email: customerData.email,
        address1: customerData.address,
        city: customerData.city,
        zip: customerData.zip,
        country: customerData.country
      }
    };

    console.log('Sending invoice data:', JSON.stringify(invoiceData, null, 2));

    try {
      const response = await fetch(`${btcPayServerUrl}/api/v1/stores/${storeId}/invoices`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `token ${apiKey}`
        },
        body: JSON.stringify(invoiceData),
      });

      console.log('BTCPay Server response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('BTCPay Server error response:', errorText);
        throw new Error(`BTCPay Server responded with status ${response.status}: ${errorText}`);
      }

      const invoice = await response.json();
      console.log('Created invoice:', JSON.stringify(invoice, null, 2));

      if (invoice.checkoutLink) {
        return { checkoutLink: invoice.checkoutLink };
      } else {
        console.error('Unexpected response structure:', invoice);
        throw new Error('Checkout link not found in BTCPay Server response');
      }
    } catch (error) {
      console.error('Error in createBTCPayInvoice:', error);
      throw error;
    }
  }

  window.closeModal = function() {
    checkoutModal.style.display = 'none';
  }

  window.onclick = function(event) {
    if (event.target == checkoutModal) {
      checkoutModal.style.display = 'none';
    }
  }

  console.log('Shop script initialized');
});
