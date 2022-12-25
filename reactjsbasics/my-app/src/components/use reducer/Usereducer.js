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
    return <p>{modalText}</p>
}

const Usereducer = () => {
 const [books, setBooks]=useState(bookData)
 const [bookName,setBookName]=useState('')
 const [isModal,setIsModal]=useState(false)
 const [modalText,setModalText]=useState('')

 const [state, dispatch] = useReducer(reducer,{

 })

 const handleSubmit=(e)=>{
    e.preventDefault()
    setBooks((prevBooks)=>{
        const newBook={id:new Date().getTime().toString(), name:bookName}
        return [...prevBooks,newBook]
    })
    setIsModal(true)
    setModalText('Book is added')
 }

  return (
    <div className='Container'>
        <h1>Understanding UseReducer</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="text">Name:</label>
            <input type="text" id="Name" value={bookName} onChange={(e)=>setBookName(e.target.value)}/>
            <button type='submit'>Add Name:</button>
        </form>
        {isModal && <Modal modalText={modalText}/>}
        {books.map((book)=>{
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