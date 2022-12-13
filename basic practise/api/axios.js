
console.clear()

const makeRequest=async (config)=>{
    return await axios(config)
}

getData(
    makeRequest({
        method:'GET',
        data:JSON.stringify({
            
        })
    })
)