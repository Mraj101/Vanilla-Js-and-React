import React from "react";
import Card from "./component/Card"
import Data from "./data.json"
function App(){
  return (
    <div>
      {  Data.map((item,index) => <Card content={item.content}/>)  }
 </div>
  )
}

export default App;