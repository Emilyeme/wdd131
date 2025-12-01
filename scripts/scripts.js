const products = [
  {id: 'prod1', name: 'Wireless Headphones'},
  {id: 'prod2', name: 'Bluetooth Speaker'},
  {id: 'prod3', name: 'Smartwatch'},
  {id: 'prod4', name: '4K Monitor'},
  {id: 'prod5', name: 'Mechanical Keyboard'}
];


const productSelect = document.getElementById('productName');
products.forEach(product => {
  const option = document.createElement('option');
  option.value = product.id;
  option.textContent = product.name;
  productSelect.appendChild(option);
});

// Last modified footer
const lastModified = document.getElementById('lastModified');
lastModified.textContent = `Last Modification: ${document.lastModified}`;