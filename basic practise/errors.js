
const inputID = document.querySelector('#number')
const btn=document.querySelector('#btn')
const normalDiv=document.querySelector('.div')
btn.addEventListener('click',()=>{
    console.log(`clicked `)

    const para = document.createElement('p');
    var x=inputID.value
   
try{
    if(x<5)
        throw "Custom too low-Error"
    else if(x>10)
        throw "Custom too high-Error"
}catch(err){
    para.textContent = err
    normalDiv.appendChild(para)
    inputID.value=""
}finally{
    console.log("here without x")
}

})


// try{
// console.log('hello');
// printf("hello in c");

// }catch(err){
//     console.log(` err is : ${err.messege}`)
// }finally{
//     console.log("this thing is a must run")
// }



//  x is not defined cause it will run before everything because of asynchronus programming


