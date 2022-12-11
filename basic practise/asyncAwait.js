console.log("hi")
const taskOne=(()=>{
    return new Promise((resolve,reject)=>{
        resolve("Task One1 is comleted")
    })
})

const taskTwo=(()=>{
    return new Promise((resolve,reject)=>{
        resolve("Task Two2 is  completed")
    })
})
const taskThree=(()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("This is setTime out of 3333")
        },2000)
    })
})
const taskFour=(()=>{
    return new Promise((resolve,reject)=>{
        resolve("Task four4 is completed")
    })
})

async function completeAllTask(){
    try{
        const t1 = await taskOne();
        console.log(t1) 
        const t2 = await taskTwo();
        console.log(t2)
         const t3 = await taskThree();
        console.log(t3)
         const t4 = await taskFour();
        console.log(t4)
    
    }catch(err){
        console.log(err)
    }
   

}
completeAllTask()


console.log("bye")