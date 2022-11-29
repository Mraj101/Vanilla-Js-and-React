import React from 'react'

const NewTodo = () => {
  return (
    <div>
        <form >
            <label htmlFor="todo">NewTodo: </label>
            <input type="text" id="todo" name='todo'  />

        </form>
    </div>
  )
}

export default NewTodo