// Ensure cart is displayed correctly on the cart page
if (window.location.pathname.includes("cart.html")) {
    displayCart();
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

// Call displayCart to show items on load
displayCart();

