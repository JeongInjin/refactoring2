const price = order => {
  let basePrice = order.quantity * order.itemPrice;
  let quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  let shipping = Math.min(basePrice * 0.1, 100);
  return (
    basePrice - quantityDiscount + shipping
  )
}

const orderA = {
  itemPrice: 600,
  quantity: 3,
}
const orderB = {
  itemPrice: 8000,
  quantity: 2,
}

console.log(price(orderA))
console.log(price(orderB))
