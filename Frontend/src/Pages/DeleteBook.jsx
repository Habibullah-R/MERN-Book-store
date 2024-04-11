import React,{ useState } from 'react'
import BackButton from '../components/BackButton'
import { useNavigate , useParams } from 'react-router'
import Spinner from '../components/Spinner'
import axios from 'axios'

const DeleteBook = () => {
  const [ loader , setLoader ] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()

  const handleDelete = ()=>{
    setLoader(true)
    axios.delete(`http://localhost:3000/books/${id}`)
    .then(()=>{
      setLoader(false)
      navigate('/')
    }).catch((error)=>{
      console.log(error)
      setLoader(false)
    })
  }

  return (
  <div className="p-4">
    <BackButton/>
    <h1 className='text-3xl my-4'>Delete book</h1>
    {loader ? <Spinner/> : ''}
    <div className="w-[600px] border-sky-400 rounded-xl mx-auto p-8 border-2 flex-col justify-center items-center">
      <h3 className="text-2xl">Are you sure you want to delete this book?</h3>
      <button className='text-white bg-red-600 p-4 my-8 w-full mx-auto ' onClick={handleDelete}>Delete</button>
    </div>


  </div>
  )
}

export default DeleteBook
