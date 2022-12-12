console.log("HI")

// old way of sequencial asynchrons calling makes a mess of the code and makes call back hell

// const task1=(callBack)=>{
//     console.log("task1")
//     callBack()
// }
// const task2=(callBack)=>{
//     console.log("task2")
//     callBack()
// }
// const task3=(callBack)=>{
//     console.log("task3")
//     callBack()
// }
// const task4=()=>{
//     console.log("task4")
// }

// task1(()=>{
//     task2(()=>{
//         task3(()=>{
//             task4()
//         })
//     })
// })


///this is the promise way 

const taskOne=(()=>{
    return new Promise((resolve,reject)=>{
        resolve("Task One1 is comleted")
    })
})

const taskTwo=(()=>{
    return new Promise((resolve,reject)=>{
        reject("Task Two2 is not completed")
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

taskOne()
.then((res)=>{console.log("this is task one's then-----" ,res)})
.then(taskTwo)

.then((res)=>{console.log("this is task two's then-----" ,res)})
.then(taskThree)

.then((res)=>{console.log("this is task three's then-----" ,res)})
.then(taskFour)

.then((res)=>{console.log("this is task four then-----" ,res)})
.catch((res)=>{ console.log("this is rejected------",res)})





console.log("BYE")