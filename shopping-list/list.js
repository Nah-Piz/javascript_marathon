class shoppingList {
  constructor(ulSelecotor,inputSelector,addSelector,deleteBtnSelector,doneSelector) {
    this.ulElem = document.querySelector(ulSelecotor);
    this.inputElem = document.querySelector(inputSelector);
    this.addBtn = document.querySelector(addSelector);
    this.deleteBtnElem = document.querySelectorAll(deleteBtnSelector);
    this.doneElem = document.querySelectorAll(doneSelector)
    this.shoppingItems = JSON.parse(localStorage.getItem('storedItems')) || []
    this.idSetter = Math.floor(Math.random()*1000);
  }
  renderList(list){
    this.ulElem.innerText = '';
    if (list.length === 0) {
      const NullLi = document.createElement('li');
      NullLi.innerText = 'No shopping item';
      this.ulElem.appendChild(NullLi)
    } else {
      list.forEach((item, i) => {
        this.ulElem.appendChild(this.createList(item,i))
      })
    }
    console.log(this.shoppingItems)
  }
  createList(itemAdded,shoppingItems){
    const li = document.createElement('li');
    const leftDiv = document.createElement('div');
    const rightDiv = document.createElement('div');
    const listNo = document.createElement('span');
    const item = document.createElement('span');
    const deleteBtn = document.createElement('span');
    item.id = 'item';
    listNo.innerText = `${shoppingItems+1}. `;
    rightDiv.className = 'right-div';
    item.innerText = itemAdded.itemName;
    if (itemAdded.isDone) {
      item.classList.add('is-done');
    } else {
      const done = document.createElement('span');
      done.dataset.btnId = itemAdded.id;
      done.id = 'done';
      rightDiv.appendChild(done);
      done.innerText = '✅';
      this.handleDone(done)
    }
    listNo.id = 'item-no';
    deleteBtn.innerText = '❌';
    deleteBtn.className = 'delete';
    deleteBtn.dataset.btnId = itemAdded.id;
    leftDiv.appendChild(listNo);
    leftDiv.appendChild(item);
    rightDiv.appendChild(deleteBtn);
    li.appendChild(leftDiv);
    li.appendChild(rightDiv);

    this.handleDelete(deleteBtn)

    return li
  }
  handleItemInput(){
    this.inputElem.addEventListener('change', ()=>{
      const value = event.target.value;
      const newItem = {
        id: `std-id-${this.idSetter}`,
        itemName: value,
        isDone: false
      }
      this.shoppingItems.push(newItem)
      this.handleLocalStorage()
    })
  }
  handleAddBtn(){
    this.addBtn.addEventListener('click', ()=>{
      this.renderList(this.shoppingItems)
      this.inputElem.value = '';
      this.idSetter = this.idSetter+Math.floor(Math.random()*Math.floor(Math.random()*10000));
    })
  }
  handleLocalStorage(){
    localStorage.setItem('storedItems', JSON.stringify(this.shoppingItems))
  }
  handleDelete(elem){
    elem.addEventListener('click', ()=>{  
      const newList = this.shoppingItems.filter(s=>(s.id!==event.target.dataset.btnId));
      this.shoppingItems = newList;
      this.handleLocalStorage()
      this.renderList(this.shoppingItems)
    })
  }
  handleDone(elem){
    elem.addEventListener('click', ()=>{
      this.shoppingItems.forEach(it => {
        if (it.id === event.target.dataset.btnId) {
          it.isDone = true;
          this.handleAnimations(it.itemName,'compeleted')
        }
      })
      this.handleLocalStorage()
      this.renderList(this.shoppingItems)
    })
  }
  handleAnimations(nam,btn){
    const alertSpan = document.querySelector('.alert');
    alertSpan.classList.add('alert-on');
    alertSpan.innerText = `${nam} was successfully ${btn}`;
    window.addEventListener('animationend', ()=>{
      alertSpan.classList.remove('alert-on')
    })
  }
}
const createShoppingList = new shoppingList('ul','#input','#addItem','.delete','#done');
createShoppingList.renderList(createShoppingList.shoppingItems)
createShoppingList.handleItemInput();
createShoppingList.handleAddBtn();
createShoppingList.handleDelete();
