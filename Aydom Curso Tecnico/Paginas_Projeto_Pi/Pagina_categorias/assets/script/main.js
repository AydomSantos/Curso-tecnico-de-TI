document.addEventListener("DOMContentLoaded", function () {
  const categoryFilter = document.getElementById("category-filter");
  const productsContainer = document.getElementById("products-container");
  const productItems = productsContainer.getElementsByClassName("product-item");

  // Adiciona evento de filtro ao select de categoria
  categoryFilter.addEventListener("change", function () {
    const selectedCategory = categoryFilter.value;

    Array.from(productItems).forEach(function (item) {
      // Verifica se a categoria selecionada corresponde ao data-category do item
      if (selectedCategory === "Filtrar por Categoria" || item.getAttribute("data-category") === selectedCategory) {
        item.style.display = "block"; // Mostra o item
      } else {
        item.style.display = "none"; // Oculta o item
      }
    });
  });
});
