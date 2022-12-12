

const makeRequest=(method,url,data)=>{
    const xhr = new XMLHttpRequest();
    xhr.open(method,url);

    xhr.onload= ()=>{
            let data= xhr.response;
            console.log(JSON.parse(data));
    }
    xhr.setRequestHeader('Content-Type',"application/json")

    xhr.onerror= ()=>{
        console.log("Error here")
    }

    xhr.send(JSON.stringify(data))
}



const getData=()=>{
 
    makeRequest("GET","https://jsonplaceholder.typicode.com/posts")
}
const postData=()=>{
    makeRequest("POST","https://jsonplaceholder.typicode.com/posts", {title: 'foo',
    body: 'bar',
    userId: 1,
})
}

const updateData=()=>{
    makeRequest("PUT","https://jsonplaceholder.typicode.com/posts/1", {title: 'food khabo',
    body: 'barma jabo',
    userId: 1,
})

}
const delteData=()=>{
    makeRequest("DELETE","https://jsonplaceholder.typicode.com/posts/1")
}


getData()
postData()
delteData()
updateData()
