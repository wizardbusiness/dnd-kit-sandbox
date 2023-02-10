let items = [1, 2, 3, 4, 5];

function reOrder(from, to) {
  const newOrder = items.slice(0)
  const itemToInsert = newOrder[from];
  newOrder.splice(from, 1);
  newOrder.splice(to, 0, itemToInsert)
  
  items = newOrder;
  return;
}

console.log(items)
reOrder(0, 2, items)
console.log(items)
reOrder(2, 0, items)
console.log(items)


