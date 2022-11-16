import React from "react";
import Card from "./component/Card"
import Data from "./data.json"  
     

 



function App(){
  // another way of fetching using for loops
  /*   
        const items=[]
       for(let i=0;i<Data.length;i++)
       items.push( <Card content={Data[i].content} title={Data[i].title}/> )    */

       const item=Data.map((item,index) => <Card key={index} content={item.content} title={item.title}/>)
  return (
    <div>
         {item}
    </div>
  )
}

export default App;