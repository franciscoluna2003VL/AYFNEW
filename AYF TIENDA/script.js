document.addEventListener("DOMContentLoaded", () => {
    console.log("AYF tienda cargada.");
    // Aquí puedes agregar interactividad, como agregar productos al carrito, o efectos.
});
document.addEventListener("DOMContentLoaded", () => {
    const cartIcon = document.getElementById("cart-icon");
    const cartOverlay = document.getElementById("cart");
    const closeCartButton = document.getElementById("close-cart");
    const cartItems = document.getElementById("cart-items");

    cartIcon.addEventListener("click", () => {
        cartOverlay.style.display = "flex";
    });

    closeCartButton.addEventListener("click", () => {
        cartOverlay.style.display = "none";
    });

    document.querySelectorAll(".producto").forEach(product => {
        product.addEventListener("click", () => {
            const name = product.querySelector("p").textContent;
            const price = product.querySelector("span").textContent;
            const item = document.createElement("li");
            item.textContent = `${name} - ${price}`;
            cartItems.appendChild(item);
        });
    });
});

const modalOverlay = document.getElementById("product-modal");
const closeModalButton = document.getElementById("close-modal");

document.querySelectorAll(".producto").forEach(product => {
    product.addEventListener("click", () => {
        const name = product.getAttribute("data-name");
        const price = product.getAttribute("data-price");
        const description = product.getAttribute("data-description");
        const image = product.getAttribute("data-image");

        // Redirigir a la página de detalles del producto con los parámetros en la URL
        window.location.href = `producto.html?name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}&description=${encodeURIComponent(description)}&image=${encodeURIComponent(image)}`;
    });
});
