// Array of products (image URL, name, price in DKK)
const products = [
    {
        name: "Ripped Skinny Jeans",
        price: 199,
        image: "https://www.w3schools.com/w3images/jeans1.jpg"
    },
    {
        name: "Mega Ripped Jeans",
        price: 169,
        image: "https://www.w3schools.com/w3images/jeans2.jpg"
    },
    {
        name: "Washed Skinny Jeans",
        price: 179,
        image: "https://www.w3schools.com/w3images/jeans4.jpg"
    },
    {
        name: "Vintage Skinny Jeans",
        price: 149,
        image: "https://www.w3schools.com/w3images/jeans3.jpg"
    }
];

// Function to generate product grid
function generateProducts() {
    const productsContainer = document.getElementById('products');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('w3-col', 'l3', 's6', 'product');

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <p>${product.name}</p>
                <p class="price">DKK ${product.price}</p>
                <button class="w3-button add-to-cart" onclick="addToCart('${product.name}', ${product.price}, '${product.image}')">Add to Cart</button>
            </div>
        `;

        productsContainer.appendChild(productDiv);
    });
}

// Call function to generate products
generateProducts();
