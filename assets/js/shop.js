// shop.js
let cart = [];

document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const checkoutButton = document.getElementById('checkout-button');
  const checkoutModal = document.getElementById('checkout-modal');
  const checkoutForm = document.getElementById('checkout-form');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
  });

  checkoutButton.addEventListener('click', () => {
    checkoutModal.style.display = 'block';
  });

  checkoutForm.addEventListener('submit', handleCheckout);

  function addToCart(event) {
    const productId = event.target.dataset.id;
    const product = findProduct(productId);
    if (product) {
      cart.push(product);
      updateCartDisplay();
    }
  }

  function updateCartDisplay() {
    cartItems.innerHTML = cart.map(item => `<p>${item.name} - ${item.price} USD</p>`).join('');
    cartTotal.textContent = `${calculateTotal()} USD`;
  }

  function calculateTotal() {
    return cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
  }

  function findProduct(id) {
    // This would need to be implemented to find the product in your data
    // For now, let's return a dummy product
    return { id, name: 'Product ' + id, price: '10.00' };
  }

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
    // This function would need to be implemented to create an invoice with BTCPay Server
    // It should send the cart items and customer data to your server, which would then
    // create an invoice with BTCPay Server and return the invoice ID and checkout URL
    // For now, let's simulate a response
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
