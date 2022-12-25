import React ,{useState} from 'react'

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
},
]

const Usereducer = () => {
 const [books, setBooks]=useState(bookData)
 const [bookName,setBookName]=useState('')
 const handleSubmit=(e)=>{
    e.preventDefault()
    setBooks((prevBooks)=>{
        const newBook={id:new Date().getTime().toString(), name:bookName}
        return [...books,newBook]
    })
 }
  return (
    <div className='Container'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="text">Name:</label>
            <input type="text" id="Name" value={bookName} onChange={(e)=>setBookName(e.target.value)}/>
            <button type='submit'>Add Name:</button>
        </form>
        {books.map((book)=>{
            return <li key={book.id}>
                {book.name}
            </li>
        })}

    </div>
  )
}

export default Usereducer