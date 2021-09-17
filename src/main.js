function switchIt (itemList, find, showBox, eventName) {
  eventName = eventName || 'click'
  for (let index = 0; index < itemList.length; index++) {
    const element = itemList[index];
    element.addEventListener(eventName, function (e) {
      for (let index2 = 0; index2 < itemList.length; index2++) {
        itemList[index2].classList.remove('active')
      }
      element.classList.add('active')
      
      if (showBox && find) {
        switch (showBox.nodeName) {
          case 'IMG':
            showBox.src = element.querySelector(find).src
            break;
        
          default:
            showBox.innerHTML = element.querySelector(find).innerHTML
            break;
        }
      }
    })
  }
  itemList[0].classList.add('active')
  if (showBox && find) {
    switch (showBox.nodeName) {
      case 'IMG':
        showBox.src = itemList[0].querySelector(find).src
        break;
    
      default:
        showBox.innerHTML = itemList[0].querySelector(find).innerHTML
        break;
    }
  }
}

