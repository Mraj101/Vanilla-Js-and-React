const button = document.querySelector("#btn");
const item = document.querySelector("#item");
const unorderdlist=document.querySelector('ul');

function appendItem(){
  const current_input=item.value;
  const child=document.createTextNode(current_input);
  item.value='';
  const list=document.createElement('li');
  unorderdlist.appendChild(list);
  const btn=document.createElement('button');
  btn.innerText="remove"
  list.appendChild(child);
  list.appendChild(btn);

  btn.addEventListener('click',event=>{
  unorderdlist.removeChild(list);
  });
  item.focus();

}
