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

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
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
