document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".product-image");
    const modal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");
    const modalName = document.getElementById("modal-product-name");
    const modalPrice = document.getElementById("modal-product-price");
    const closeModal = document.getElementById("close-modal");

    images.forEach(image => {
        image.addEventListener("click", () => {
            const src = image.src;
            const name = image.getAttribute("data-name");
            const price = image.getAttribute("data-price");

            modalImage.src = src;
            modalName.textContent = name;
            modalPrice.textContent = price;

            modal.style.display = "flex";
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});




document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".product-image");
    const modal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");
    const modalName = document.getElementById("modal-product-name");
    const modalPrice = document.getElementById("modal-product-price");
    const closeModal = document.getElementById("close-modal");
    const addToCartButton = document.getElementById("add-to-cart");

    const cartIcon = document.getElementById("cart-icon");
    const cart = document.getElementById("cart");
    const closeCartButton = document.getElementById("close-cart");
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");

    let cartItemList = [];

    // Abre el modal de imagen ampliada
    images.forEach(image => {
        image.addEventListener("click", () => {
            const src = image.src;
            const name = image.getAttribute("data-name");
            const price = image.getAttribute("data-price");

            modalImage.src = src;
            modalName.textContent = name;
            modalPrice.textContent = price;

            modal.style.display = "flex";

            // Almacena la información del producto para el botón de agregar al carrito
            addToCartButton.dataset.name = name;
            addToCartButton.dataset.price = price;
        });
    });

    // Cierra el modal de imagen ampliada
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Abre el modal del carrito
    cartIcon.addEventListener("click", () => {
        cart.style.display = "flex";
    });

    // Cierra el modal del carrito
    closeCartButton.addEventListener("click", () => {
        cart.style.display = "none";
    });

    // Agrega el producto al carrito
    addToCartButton.addEventListener("click", () => {
        const name = addToCartButton.dataset.name;
        const price = addToCartButton.dataset.price;

        // Agrega el producto a la lista del carrito
        cartItemList.push({ name, price });

        // Actualiza el contador de productos en el carrito
        cartCount.textContent = cartItemList.length;

        // Actualiza el contenido del carrito
        updateCart();

        // Cierra el modal de imagen ampliada
        modal.style.display = "none";
    });

    // Actualiza el contenido del carrito
    function updateCart() {
        cartItems.innerHTML = "";
        cartItemList.forEach((item, index) => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - ${item.price}`;
            cartItems.appendChild(li);
        });
    }

    // Cierra el modal al hacer clic fuera de él
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
        if (e.target === cart) {
            cart.style.display = "none";
        }
    });
});
