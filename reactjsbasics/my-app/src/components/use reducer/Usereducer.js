import React ,{useState,useReducer} from 'react'

const bookData=[{
   id:1,
   name:"Hasnain"
},
{
    id:2,
    name:"Mahin"
},
{
    id:3,
    name:"Arafat"
},
{
    id:4,
    name:"Fahim"
}
]



const Modal=({modalText})=>{
    return <p style={{backgroundColor:"green"}}>{modalText}</p>
}

const reducer=(state,action)=>{
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
    return state;
}

const Usereducer = () => {
//  const [books, setBooks]=useState(bookData)
//  const [isModal,setIsModal]=useState(false)
//  const [modalText,setModalText]=useState('')

const [bookState, dispatch] = useReducer(reducer,{
    books:bookData,
    isModal:false,
    modalText:'',
})

const [bookName,setBookName]=useState('')


 const handleSubmit=(e)=>{
     e.preventDefault()
    const newBook={id:new Date().getTime().toString(), name:bookName}
    if(bookName.length>3){
        // setBooks((prevBooks)=>{
        //     return [...prevBooks,newBook]
        // })
        // setModalText('Book is added')
        // setIsModal(true)
        // setBookName('')
    dispatch({type:"ADD",payload:newBook})
    setBookName('')
    }
    else if(bookName.length<=3){
        const noData="Enter book name"
        dispatch({type:"EnterMsg",payload:noData})
    }
 }

  return (
    <div className='Container'>
        <h1>Understanding UseReducer</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="text">Name:</label>
            <input type="text" id="Name" value={bookName} onChange={(e)=>setBookName(e.target.value)}/>
            <button type='submit'>Add Name:</button>
        </form>
        {bookState.isModal && <Modal modalText={bookState.modalText}/>}
        {bookState.books.map((book)=>{
            return <div>
                     <li style={{margin:"10px",padding:"5px" ,backgroundColor:"red",color:"white"}} key={book.id}>
                         {book.name}
                         <button style={{padding:"5px",marginLeft:"10px" ,backgroundColor:"brown",color:"white"}} type='submit'>remove</button>
                     </li>
            </div>
                    
                     
        })}

    </div>
  )
}

export default Usereducer