const productsGrid = document.querySelector('.products-grid');
const product = document.querySelector('.product');
const category = document.querySelectorAll('.category');
const search = document.querySelector('#search');
const range = document.querySelector('#range');
const rangeValue = document.querySelector('.range-value');

function updateProducts(c) {
  c.map(p => {
    let productClone = product.cloneNode(true);
    productClone.querySelector('.product-image').src = p.image;
    productClone.querySelector('.product-name').innerText = p.name;
    productClone.querySelector('.product-price').innerText = `$${p.price}`
    productsGrid.appendChild(productClone)
  })
}
updateProducts(collection);
updateProducts(collection);

search.addEventListener('keyup', ()=>{
  productsGrid.innerText = '';
  let value = event.target.value;
  let filtered = collection.filter(f => f.name.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  (filtered.length>0) ? updateProducts(filtered) : productsGrid.innerText = `Search for ${value}: Not Found`
})

function initializeRange() {
  let productPrices = collection.map(n => n.price);
  range.max = Math.max(...productPrices);
  range.min = Math.min(...productPrices);
  range.value = Math.max(...productPrices);
  rangeValue.innerText = `$${range.value}`;
}
initializeRange();

range.addEventListener('input', ()=>{
  let value = event.target.value;
  productsGrid.innerText = '';
  rangeValue.innerText = `$${value}`;
  let filtered = collection.filter(f => f.price <= value);
  (filtered.length>0) ? updateProducts(filtered) : productsGrid.innerText = `Search for ${value}: Not Found`
})

category.forEach(cate => {
  cate.addEventListener('click', ()=>{
    let id = event.target.id;
    productsGrid.innerText = '';
    if (id === 'all') {
      updateProducts(collection)
    } else if (id === 'jacket') {
      updateProducts(collection.filter(f => f.category.toLowerCase() === id.toLowerCase()))
    } else if (id === 'full-set') {
      updateProducts(collection.filter(f => f.category.toLowerCase() === 'full set'))
    }
  })
})