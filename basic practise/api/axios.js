
console.clear()

const makeRequest=async (config)=>{
    return await axios(config)
}

getData=()=>{
    makeRequest({
        url:"https://jsonplaceholder.typicode.com/posts",
        method:'GET',
        data:JSON.stringify({
            
        })
    })
    .then((res)=>console.log(res))
}
getData()
postData=()=>{
    makeRequest({
        url:"https://jsonplaceholder.typicode.com/posts",
        method:'POST',
        data:JSON.stringify({
            id:1,
            title:"fooma",
            body:"barma",
            userId:1
        })
    })
    .then((res)=>console.log(res))
}
postData()
