const products = document.querySelectorAll('.product');

products.forEach(product => {
  product.addEventListener('mouseenter', () => {
    product.style.backgroundColor = '#ddd';
  });
  product.addEventListener('mouseleave', () => {
    product.style.backgroundColor = '#eee';
  });
});