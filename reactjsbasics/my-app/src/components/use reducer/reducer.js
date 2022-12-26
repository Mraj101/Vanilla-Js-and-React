export  const reducer=(state,action)=>{
  if(action.type==="ADD"){
      const allBooks=[...state.books,action.payload]
      return {
          ...state,
          books:allBooks,
          isModal:true,
          modalText:'Books added',
      }
     
  }
  else if(action.type==="EnterMsg"){
      const data=action.payload
      return {
          ...state,
          modalText:data,
      }
  }
  else if(action.type==="REMOVE"){
      const filteredBooks=state.books.filter((book)=>book.id!==action.payload)
      return {
          ...state,
          books:filteredBooks,
          modalText:"Books removed",
          isModal:true,
      }
  }
  return state;
}
