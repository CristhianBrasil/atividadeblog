// script.js - pequeno comportamento de demonstração
document.getElementById('searchForm').addEventListener('submit', function(e){
  e.preventDefault();
  const q = document.getElementById('searchInput').value.trim();
  if (!q) {
    alert('Digite algo para buscar.');
    return;
  }
  // comportamento simples: só mostra o que foi buscado (sem backend)
  alert('Você buscou por: ' + q + '\n(Implementar busca real com backend ou JS adicional)');
});