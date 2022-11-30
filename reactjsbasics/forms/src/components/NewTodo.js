import React ,{useState}from 'react'

const NewTodo = (props) => {

  const [todo, setnewTodo]=useState("")
  const handleInput=(e)=>{
    setnewTodo(e.target.value)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    props.onNewTodo(todo) 
   }



  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">NewTodo: </label>
            <input type="text" id="todo" name='todo' value={todo} onChange={handleInput}  /><br />
            <button type='submit'  style={{backgroundColor:"red" ,color:"white"}}>Add todo</button>
        </form>
    </div>
  )
}

export default NewTodo