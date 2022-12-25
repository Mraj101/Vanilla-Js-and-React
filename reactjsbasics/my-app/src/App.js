import React from "react";


import Card from "./components/Card"
import Data from "./data.json"  
import { v4 as uuidv4 } from "uuid";
import ReactIcon from "./components/AddingReactIcon";
import ReactBootstrap from "./components/ReactBootstrap/ReactBootstrap";
import State from "./State";
import HandleEvent from "./ReactEventHandler";
import HookState from "./useStateHook"
import ReactForm from "./components/ReactForm/Form";
import Child from "./components/stateLifting/ChildComponent";
import Toggle from "./components/toggling/toggle";
import UseEffect from "./components/UseEffect/useEffect";
import DataFetching from "./components/UseEffect/DataFetching";
import DataFetchingErrorHandling from "./components/UseEffect/DataFetchingErrorHandling";
import InlineDynamic from "./components/dynamic styling/InlineDynamic";
import Fragments from "./components/fragments/Fragments"
import Usereducer from "./components/use reducer/Usereducer";

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
         <Toggle/>
         <UseEffect/>
         <DataFetching/>
         <DataFetchingErrorHandling/>
         <InlineDynamic/>
         <Fragments />
         <Usereducer/>
    </div>
  )
}

export default App;