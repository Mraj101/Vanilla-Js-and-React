//fetch is pre built in browser so we don't need to install external things for using fetch.
//fetch is used instead of xmlHttpRequest

console.log("hi")


const makeRequest = async (url,config)=>{
    const res=await fetch(url,config)
   
    if(!res.ok)
    {
        const messege=`Error: ${res.status}`
        throw new Error(messege)
    }
    const data = await res.json()
    return data
}

const postData=()=>{
    
    makeRequest("https://jsonplaceholder.typicode.com/posts",{
    method:'POST',
    body:JSON.stringify({
        id:1,
        title:'fooma',
        body:'barma',
        userId:1
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
})
.then((res)=>console.log(res))
.catch((err)=>console.log(err))
}

postData()



console.log("Byue")