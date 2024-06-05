var input = document.querySelector('#todo');
var button = document.querySelector('#addTodo');
var ul = document.querySelector('#todoList');


button.addEventListener('click', () => {

  console.log("hello");
  var inputValue = input.value;
  input.value="";
  var checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  var lable = document.createElement('lable');
  lable.innerHTML = inputValue;
  var deleteButton = document.createElement('button');
  deleteButton.innerHTML = "Delete";
  var upButton = document.createElement('button');
  upButton.innerHTML = "⬆️";
  var downButton = document.createElement('button');
  downButton.innerHTML = "⬇️";

  var li = document.createElement('li');
  li.style.textDecoration = "none";
  li.appendChild(checkBox);
  li.appendChild(lable);
  li.appendChild(upButton);
  li.appendChild(downButton);
  li.appendChild(deleteButton);

  deleteButton.addEventListener('click', () => {
    ul.removeChild(li);
  });

  upButton.addEventListener('click', function () {

    var parent = this.parentNode.parentNode;
   // console.log(parent);
    for(let i=0; i<parent.childElementCount;i++){
       // console.log(parent.children[i]);
        if(parent.children[i] === this.parentNode){

             parent.children[i-1].before(li);
             break;
        }
    }
  });

  downButton.addEventListener('click', function () {
   
    var parent = this.parentNode.parentNode; // ul
    console.log(parent);
    for(let i=0; i<parent.childElementCount;i++){
        console.log(parent.children[i]);
        if(parent.children[i] === this.parentNode){

             parent.children[i+1].after(li);
             break;
        }
    }


  });

  checkBox.onchange = function () {

    if (this.checked) {
      lable.style.textDecoration = 'line-through';

      ul.removeChild(li);
      ul.appendChild(li);
    } else {
      lable.style.textDecoration = 'none';

    }
  }

  ul.appendChild(li);
})
