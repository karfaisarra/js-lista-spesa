const shoppingList = [
    'Compra pane',
    'Latte di marndorle',
    'Insalata',
    'Burger di soia'
  ];
  
  
  
  const shoppingListElement = document.querySelector('.shopping-list')
  console.log(shoppingListElement);
  
  
  /* for (let i = 0; i < shoppingList.length; i++) {
    const item = shoppingList[i];
  
    const liElement = `<li>${item}</li>`
    shoppingListElement.insertAdjacentHTML('beforeend', liElement)
  
  } */

  //while loop
  let i = 0;
  while (i < shoppingList.length) {
    const item = shoppingList[i];
  
    const liElement = `<li>${item}</li>`;
    shoppingListElement.insertAdjacentHTML('beforeend', liElement);

    i++;
  }