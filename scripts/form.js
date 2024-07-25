document.addEventListener('DOMContentLoaded', () => {
    const products = [
      { id: 'prod1', name: 'Laptop' },
      { id: 'prod2', name: 'Speaker' },
      { id: 'prod3', name: 'Headphones' },
      { id: 'prod4', name: 'Camera' },
      { id: 'prod5', name: 'Printer' }
    ];
  
    const productSelect = document.getElementById('product-name');
    
    products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.id;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  
    document.getElementById('current-year').textContent = new Date().getFullYear();
  
    const reviewCount = localStorage.getItem('reviewCount') || 0;
    localStorage.setItem('reviewCount', reviewCount);
  
    const reviewCountElement = document.getElementById('review-count');
    if (reviewCountElement) {
      reviewCountElement.textContent = reviewCount;
    }
  
    const form = document.getElementById('review-form');
    if (form) {
      form.addEventListener('submit', () => {
        localStorage.setItem('reviewCount', parseInt(reviewCount, 10) + 1);
      });
    }
  });
  