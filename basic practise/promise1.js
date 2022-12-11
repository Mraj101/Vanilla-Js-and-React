//creating promise

console.log("start-----")
promise1=new Promise((resolve,reject) => {
    let flag=false
    if(flag)
     {resolve("Promise1 completed")}
    else 
    {reject("Promised1 failed")}
})
promise2=new Promise((resolve,reject) => {
    let flag=false
    if(flag) resolve("Promise2 completed");
    else reject("Promised2 failed");
})



// promise1.then((res)=>{
//     console.log("hi i am resolve from promise 1  "+res)
// }).catch((res)=>{console.log("hi i am reject  "+res)})

// promise2.then((res)=>{
//     console.log("hi i am resolve from promise 2 "+res)
// }).catch((res)=>{console.log("hi i am reject from promise 2 "+res)})


//another way of calling promises

Promise.all([promise1,promise2])
.then((res)=>{
    console.log(res)
})
.catch((res)=>console.log(res))


Promise.race([promise1,promise2]).then((res)=>console.log("this is then of race---__"+res))
.catch((res)=>console.log("this is catch of race:____"+res))

console.log("end")