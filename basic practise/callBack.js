//this is a conceptual programme for understanding call backs.
///which in another sense asynchronus programming as they hold the program long and other gets executed before them
console.log("hi      -printed first on the program, so appreared first")


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



console.log("bye     -printed last on the program but did not appear last")


function square(x){
    console.log(`squared value is: ${x*x}      ------this was called after "bye" just to show higher order function`)
}
function higherOrderFunction(number,callback){
    callback(number)
}

higherOrderFunction(6,square)
