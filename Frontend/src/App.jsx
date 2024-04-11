import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './Pages/Home'
import EditBook from './Pages/EditBook'
import DeleteBook from './Pages/DeleteBook'
import CreateBook from './Pages/CreateBook'
import ShowBook from './Pages/ShowBook'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/book/create' element={<CreateBook/>}/>
      <Route path='/book/delete/:id' element={<DeleteBook/>}/>
      <Route path='/book/edit/:id' element={<EditBook/>}/>
      <Route path='/book/details/:id' element={<ShowBook/>}/>
    </Routes>
  )
}

export default App
