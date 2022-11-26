import React from "react";


import Card from "./component/Card"
import Data from "./data.json"  
import { v4 as uuidv4 } from "uuid";
import ReactIcon from "./component/AddingReactIcon";
import ReactBootstrap from "./component/ReactBootstrap/ReactBootstrap";
import State from "./State";
import HandleEvent from "./ReactEventHandler";
import HookState from "./useStateHook"
import ReactForm from "./component/ReactForm/Form";
import Child from "./component/stateLifting/ChildComponent";

function App(){
  // another way of fetching using for loops
  /*   
        const items=[]
       for(let i=0;i<Data.length;i++)
       items.push( <Card content={Data[i].content} title={Data[i].title}/> )    */

       const item=Data.map((item,index) => <Card key={uuidv4()} content={item.content} title={item.title}/>)


       const handleChild=(childata)=>{
          console.log(childata)
          const child= childata
       }
  return (
    <div>
         <ReactForm/>
         {item}
         <ReactIcon/>
         <ReactBootstrap/>
         <State/>
         <HandleEvent/>
         <HookState/>
         <Child data="I am a data sent from (App:) eg. parents " onChildData={handleChild} />
    </div>
  )
}

export default App;