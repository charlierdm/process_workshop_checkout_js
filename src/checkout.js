const checkout = (shoppingList) => {

  if(Number.isInteger(shoppingList)){
    return -1;
  }

  let list = shoppingList.split('');
  let total = 0;
  let aCount = 0;
  let bCount = 0;

  for(i = 0; i < list.length; i++){
    if(list[i] === list[i].toLowerCase()){
      return -1;
    }
    if(list[i] === 'A'){
      total += 50;
      aCount += 1;
      if(aCount === 3){
        total -= 20;
        aCount = 0;
      }
    }
    if(list[i] === 'B'){
      total += 30;
      bCount += 1;
      if(bCount === 2){
        total -= 15;
        bCount = 0;
      }
    }
    if(list[i] === 'C'){ total += 20; }
    if(list[i] === 'D'){ total += 15; }
  }
  return total;
}
