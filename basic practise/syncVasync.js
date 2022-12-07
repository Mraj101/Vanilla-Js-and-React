const task1 = ()=>{
    console.log("task1");
}
const dataLoading = ()=>{
    console.log("task2. data loading");
}

const task2 = ()=>{
    setTimeout(dataLoading,2000)
}
const task3 = ()=>{
    console.log("task3");
}
const task4 = ()=>{
    console.log("task4");
}
const task5 = ()=>{
    console.log("task5");
}

task1();
task2();
task3();
task4();
task5();
