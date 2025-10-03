let todos;
if(localStorage.getItem('todos')) todos = JSON.parse (localStorage.getItem('todos'));
else todos = [];


function getTodo(event){
  console.log(document.getElementById('todo-input').value);
  document.getElementById('todo-input').value=''
  displayTodos();

  event.preventDefault();
}

function displayTodos(){
  document.getElementById('container').innerHTML="";

  todos.map((todo, index)=>{
    constdiv = document.createElement('div');
    const p = document.createElement('p');
    p.innterHTML = todo;
    const button = document.createElement('button');
    button.innerText = '@';
    button.onclick = function(){
      removeTodo(index);
    }
    div.appendChild(p);
    div.appendChild(button);

    document.getElementById('container').appendChild(div);
  })
  localStorage.setItem('todos' , JSON.stringify(todos));
}

function removeTodo(index){
  todos.splice(index, 1);
  displayTodos();
}
