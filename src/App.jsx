import React from 'react'
import "./styles/style.css"

import Nav from './components/Nav'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AddStudents from './components/AddStudents'
import ViewStudents from './components/ViewStudents'
import Home from './components/Home'
import EditStudents from './components/EditStudents'

const App = () => {
  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/add/users" element={<AddStudents/>}/>
          <Route path="/view/users" element={<ViewStudents/>}/>
          <Route path="/edit/:id" element={<EditStudents/>}/>
        </Routes>
      </Router>    
    </>
  )
}

export default App