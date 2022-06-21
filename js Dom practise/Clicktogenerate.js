function addTextNode(text)
{
    const newtext=document.createTextNode(text);
    const para=document.getElementById('p2')

    para.appendChild(newtext);
}