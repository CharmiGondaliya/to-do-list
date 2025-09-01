

let todoList=JSON.parse(localStorage.getItem('list')) || [];
displayItems();
function addTodo() {
  let inputElement=document.querySelector('#todo-input');
  let dateElement=document.querySelector('#todo-date');
  let todoItem=inputElement.value;
  let todoDate=dateElement.value;
  if (!todoItem) {
    alert("Please enter a task!");
    return;
  }

  if (!todoDate) {
    alert("Please select a due date!");
    return;
  }
  todoList.push({item: todoItem, dueDate:todoDate});
  localStorage.setItem('list',JSON.stringify(todoList));
  inputElement.value='';
  dateElement.value='';
  displayItems();
}
function displayItems(){
  let containerElement=document.querySelector('.todo-container');
  let newHtml='';
  for(let i=0;i<todoList.length;i++){
    let {item,dueDate} = todoList[i];
    newHtml+=`
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class="btn-delete"  onclick="todoList.splice(${i},1);
        localStorage.setItem('list',JSON.stringify(todoList));
        displayItems() ;">Delete</button>`
  }
  containerElement.innerHTML=newHtml;
}