// Funcionalidad de búsqueda
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    const searchInput = document.getElementById('searchInput').value.toLowerCase(); // Obtiene el valor del campo de búsqueda
    const products = document.querySelectorAll('.product'); // Selecciona todos los productos

    // Contador para verificar si hay resultados
    let hasResults = false;

    products.forEach(product => {
        const productName = product.getAttribute('data-name').toLowerCase(); // Obtiene el nombre del producto
        if (productName.includes(searchInput)) {
            product.style.display = ''; // Muestra el producto si coincide
            hasResults = true; // Hay al menos un resultado
        } else {
            product.style.display = 'none'; // Oculta el producto si no coincide
        }
    });

    // Si no hay resultados, puedes mostrar un mensaje
    if (!hasResults) {
        alert('No se encontraron productos que coincidan con tu búsqueda.');
    }
});