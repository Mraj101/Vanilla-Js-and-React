import React from "react";
import Card from "./component/Card"
import Data from "./data.json"  
import { v4 as uuidv4 } from "uuid";
     




function App(){
  // another way of fetching using for loops
  /*   
        const items=[]
       for(let i=0;i<Data.length;i++)
       items.push( <Card content={Data[i].content} title={Data[i].title}/> )    */

       const item=Data.map((item,index) => <Card key={uuidv4()} content={item.content} title={item.title}/>)
  return (
    <div>
         {item}
    </div>
  )
}

export default App;