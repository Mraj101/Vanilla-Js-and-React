

const makeRequest=(method,url)=>{
    const xhr = new XMLHttpRequest();
    xhr.open(method,url);

    xhr.onlaod= ()=>{
            let data= xhr.response;
            console.log(JSON.parse(data));
    }
    xhr.onerror= ()=>{
        console.log("Error here")
    }

    xhr.send()
}



const getData=()=>{
    makeRequest("GET","https://jsonplaceholder.typicode.com/posts")
}


getData()
