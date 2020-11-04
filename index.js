// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')

  const priceValue = price.innerHTML
  const quantityValue = quantity.value 

  const subtotal = priceValue * quantityValue

  const subtotalSpan = product.querySelector('.subtotal span')

  subtotalSpan.innerHTML = subtotal

  return subtotal 
}

function calculateAll() {
  
  const productList = document.querySelectorAll('.product')

  let sum = 0

  productList.forEach(elm => {

    sum += updateSubtotal(elm)

    const total = document.querySelector('#total-value span')

    total.innerHTML = sum
  })
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  const buttonRemove = document.querySelectorAll('.btn-remove')

  buttonRemove.forEach(elm => {

    elm.onclick = event => {

      const target = (event.currentTarget).parentNode

      const parent = target.parentNode

      document.querySelector('tbody').removeChild(parent)

      const sumTotal = document.querySelector('#total-value span')

      sumTotal.innerHTML -= updateSubtotal(parent)

    }
  })
}

// ITERATION 5

function createProduct() {
  
  const newRow = document.createElement('tr')

  const newProductName = document.querySelectorAll('.create-product input')[0]
  const newProductPrice = document.querySelectorAll('.create-product input')[1]

  const newName = newProductName.value
  const newPrice = newProductPrice.value

  newRow.innerHTML = `<td class="name">
            <span>${newName}</span>
          </td>
          <td class="price">$<span>${newPrice}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>`
  
  newRow.setAttribute('class', 'product')

  document.querySelector('tbody').appendChild(newRow)

}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const buttonRemove = document.querySelectorAll('.btn-remove')
  buttonRemove.forEach(elm => elm.addEventListener('click', removeProduct))
  
  const addButton = document.querySelector('#create')
  addButton.addEventListener('click', createProduct)
});
