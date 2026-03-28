let task = document.querySelector('#name');
let btn = document.querySelector('.btn');
let form = document.querySelector('#my-form');
let todo = document.querySelector('#users')

form.addEventListener('submit', submitt);

function submitt(e){
  e.preventDefault();
  const diva = document.createElement('div');
  const li = document.createElement('li');
  const butt = document.createElement('button');
  butt.innerText = 'remove';
  butt.style.padding = '4px';
  if(task.value === '' || task.value === ' ' ){
    alert("enter full fields");
  }
  else{
    li.appendChild(document.createTextNode(task.value));
    butt.addEventListener('click', onclick);
    function onclick(e){
        e.preventDefault();
        li.remove();
        butt.remove();
    }
    diva.appendChild(li);
    diva.appendChild(butt);
    todo.appendChild(diva);
    }
}