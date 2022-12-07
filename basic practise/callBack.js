//this is a conceptual programme for understanding call backs.

const task1 = (callback)=>{
    console.log("task1");
    callback();
}


const task2 = (callback)=>{
    setTimeout(()=>{console.log("dataLoading. task 2")
    callback();
    },2000)
    
}
const task3 = (callback)=>{
    console.log("task3");
    callback();
}
const task4 = (callback)=>{
    console.log("task4");
    callback();
}
const task5 = ()=>{
    console.log("task5");
 
}


task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                task5()
            })
        })
    })
})



function square(x){
    console.log(`squared value is: ${x*x}`)
}
function higherOrderFunction(number,callback){
    callback(number)
}

higherOrderFunction(6,square)