
var x;
const inputID = document.querySelector('#number')
const btn=document.querySelector('#btn')
btn.addEventListener('click',()=>{
    x= inputID.value
    console.log(`clicked ${x}`)
   
try{
    if(x<5)
        throw "too low"
    else if(x>10)
        throw "too high"
}catch(err){
    console.log(err)
}finally{
    console.log("here without x")
}

})


try{
console.log('hello');
printf("hello in c");

}catch(err){
    console.log(` err is : ${err.messege}`)
}finally{
    console.log("this thing is a must run")
}



console.log(x)// x is not defined cause it will run before everything because of asynchronus programming


