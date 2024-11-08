// Função de busca
document.getElementById('search-input').addEventListener('input', function() {
    const searchQuery = this.value.toLowerCase();
    document.querySelectorAll('.product-item').forEach(function(product) {
      const title = product.querySelector('.card-title').textContent.toLowerCase();
      if (title.includes(searchQuery)) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  });

  // Função de filtro por categoria
  document.getElementById('category-filter').addEventListener('change', function() {
    const category = this.value;
    document.querySelectorAll('.product-item').forEach(function(product) {
      if (category === 'Filtrar por Categoria' || product.dataset.category === category) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  });