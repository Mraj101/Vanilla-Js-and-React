const sect=document.querySelector('section'); 
const para=document.querySelector('p');
// sect.removeChild(para);
sect.appendChild(para)
// this is pushing the paragraph to the bottom.
var newpara=document.createElement('p');
newpara.textContent="hello i am a new paragraph";
sect.append(newpara);
document.querySelectorAll('p')[1].style.border='2px solid blue';