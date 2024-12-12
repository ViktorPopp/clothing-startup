let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add product to cart
function addToCart(name, price, image) {
    const existingProduct = cart.find(item => item.name === name);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ name, price, image, quantity: 1 });
    }

    saveCart();
    updateCartCount();
}

// Function to clear the cart
function clearCart() {
    // Remove the cart data from local storage
    localStorage.removeItem('cart');

    // Clear the cart display
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    cartItemsContainer.innerHTML = '<p>Your cart is now empty.</p>';
    cartTotalElement.innerHTML = '';

    // Update the cart count in the navbar (if applicable)
    updateCartCount();
}

// Function to update the cart count in the navbar
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to remove a single item from the cart
function removeItemFromCart(index) {
    // Retrieve the current cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Remove the item at the specified index
    cart.splice(index, 1);

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update the cart count in the navbar
    updateCartCount();

    // Optionally, refresh the cart page to show the updated cart
    displayCart();
}

// Update cart item count in navbar
function updateCartCount() {
    cartCount.innerText = cart.reduce((total, item) => total + item.quantity, 0);
}

// Display cart items on cart page
function displayCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotalSpan = document.getElementById('cart-total');

    cartItemsDiv.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('w3-col', 'l3', 's6', 'product');
        cartItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="product-info">
                <p>${item.name} (x${item.quantity})</p>
                <p class="price">DKK ${itemTotal}</p>
            </div>
        `;
        cartItemsDiv.appendChild(cartItemDiv);
    });

    cartTotalSpan.textContent = `Total: DKK ${total}`;
}

// Initialize cart page
displayCart();
