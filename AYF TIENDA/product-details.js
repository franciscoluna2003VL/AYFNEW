document.addEventListener("DOMContentLoaded", () => {
    // Obtener los parámetros de la URL
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name");
    const price = params.get("price");
    const description = params.get("description");
    const image = params.get("image");

    // Actualizar el contenido de la página con los detalles del producto
    document.getElementById("product-name").textContent = name || "Nombre del Producto";
    document.getElementById("product-price").textContent = `Precio: ${price || "$0.00"}`;
    document.getElementById("product-description").textContent = description || "Descripción del producto...";
    document.getElementById("product-image").src = image || "default-product.jpg";
});
