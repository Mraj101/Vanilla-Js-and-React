import React ,{useState} from 'react'

import Todos from './Todos'
import NewTodo from './NewTodo'



const dummyTodos=["todo1","todo2"]
const Home = () => {
const [todos, setTodo] = useState(dummyTodos)
  
const handleNewTodo = (newTodo)=>{
   setTodo([...todos,newTodo])
}
  return (
    <div>
        <NewTodo onNewTodo={handleNewTodo} />
        <Todos todos={ todos } />
    </div>
  )
}

export default Home