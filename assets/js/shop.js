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
      if (section.id === categoryId) {
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
      }
    });
  }

  categoryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const categoryId = link.getAttribute('href').substring(1);
      showCategory(categoryId);
    });
  });

  if (productSections.length > 0) {
    showCategory(productSections[0].id);
  }

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', addToCart);
  });

  function findProduct(id) {
    for (let category in productsData) {
      const product = productsData[category].find(p => p.id === id);
      if (product) {
        return product;
      }
    }
    console.error(`Product with id ${id} not found`);
    return null;
  }

  function addToCart(event) {
    const productId = event.target.dataset.id;
    const product = findProduct(productId);
    if (product) {
      cart.push(product);
      updateCartDisplay();
    } else {
      console.error(`Unable to add product with id ${productId} to cart`);
    }
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
    
    try {
      const response = await createBTCPayInvoice(customerData);
      if (response.invoiceId) {
        window.location.href = response.checkoutUrl;
      } else {
        alert('Error creating invoice. Please try again.');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('An error occurred during checkout. Please try again.');
    }
  }

  async function createBTCPayInvoice(customerData) {
    // Implementa questa funzione per creare una fattura con BTCPay Server
    // Per ora, simuliamo una risposta
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          invoiceId: 'dummy-invoice-id',
          checkoutUrl: 'https://btcpay.example.com/invoice/dummy-invoice-id'
        });
      }, 1000);
    });
  }
});
