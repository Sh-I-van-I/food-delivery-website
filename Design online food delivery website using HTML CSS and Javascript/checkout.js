// Assuming you have a `cartData` array containing cart items (item object with name, price, quantity)

const orderItemsTable = document.getElementById('order-items');
const totalPriceElement = document.getElementById('total-price');

function displayOrderItems() {
  let totalPrice = 0;
  orderItemsTable.innerHTML = ''; // Clear existing rows

  cartData.forEach(item => {
    const tableRow = document.createElement('tr');
    const itemNameCell = document.createElement('td');
    itemNameCell.innerText = item.name;

    const itemPriceCell = document.createElement('td');
    itemPriceCell.innerText = `$${item.price}`;

    
