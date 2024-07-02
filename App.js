const products = [
    { id: 1, name: "Shirt", price: 700, image: "cap.png" },
    { id: 2, name: "Poly Bags", price: 500, image: "cap.png" },
    { id: 3, name: "Mango Seeds", price: 1500, image: "cap.png" },
    { id: 3, name: "RainPoint", price: 1200, image: "cap.png" },
    { id: 3, name: "DuraSack", price: 140, image: "cap.png" },
    { id: 3, name: "HDMI Code", price: 500, image: "cap.png" },
];

function displayProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h2>${product.name}</h2>
                <p>N${product.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="${product.id}">Call to Order</button>
            </div>
        `;
        productList.appendChild(productElement);
    });
}

function initNavigation() {
    const navButtons = document.querySelectorAll(".nav-btn");
    navButtons.forEach(button => {
        button.addEventListener("click", () => {
            navButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            const page = button.getAttribute("data-page");
            console.log(`Navigating to ${page}`);
            // Implement page navigation logic here
        });
    });
}

function init() {
    displayProducts();
    initNavigation();
}

init();
