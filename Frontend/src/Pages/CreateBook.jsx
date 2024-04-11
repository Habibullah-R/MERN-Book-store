import React,{ useState } from 'react'
import BackButton from '../components/BackButton'
import { useNavigate } from 'react-router'
import Spinner from '../components/Spinner'
import axios from 'axios'

const CreateBook = () => {
  const [ title , setTitle ] = useState('')
  const [ author , setAuthor ] = useState('')
  const [ publishYear , setPublishYear ] = useState('')
  const [loader , setLoader] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = ()=>{
    const data = {
      title,
      author,
      publishYear
    }
    setLoader(true)
    axios.post('https://mern-book-store-sand.vercel.app/books',data)
    .then(()=>{
      setLoader(false);
      navigate('/');
    })
    .catch((err)=>{
      setLoader(false)
      alert("An error has occur")
      console.log(err.message)
    })
  }

  return (
    <div className='p-4'>
      <BackButton/>
      <h2 className='text-3xl my-4'>Create new book</h2>
      {loader ? <Spinner/> : ""}
      <div className="flex justify-center flex-col border border-sky-400 rounded-lg mx-auto w-[600px] px-4">
        <div className="my-4">
          <label className="text-gray-500 text-xl mr-4">Title</label>
          <input 
          className='w-full border-2 border-gray-500 px-4 py-2 mx-auto'
          type="text"
          value={title}
          onChange={e=>setTitle(e.target.value)}
           />
        </div>
        <div className="my-4">
          <label className="text-gray-500 text-xl mr-4">Author name</label>
          <input 
          className='w-full border-2 border-gray-500 px-4 py-2 mx-auto'
          type="text"
          value={author}
          onChange={e=>setAuthor(e.target.value)}
           />
        </div>
        <div className="my-4">
          <label className="text-gray-500 text-xl mr-4">Publish Year</label>
          <input 
          className='w-full border-2 border-gray-500 px-4 py-2 mx-auto'
          type="number"
          value={publishYear}
          onChange={e=>setPublishYear(e.target.value)}
           />
        </div>
        <button className='p-2 m-8 bg-sky-300' onClick={handleSubmit}>Save</button>
      </div>
      
    </div>
  )
}

export default CreateBook
