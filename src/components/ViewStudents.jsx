import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from "../styles/view.module.css"
import { useNavigate } from 'react-router-dom'

const ViewStudents = () => {

  const [users,setUsers]=useState([])
  const navigate=useNavigate()

  function fetchData(){
    axios.get("http://localhost:5000/users")
    .then((response)=>setUsers(response.data.reverse()))
    .catch(err=>console.log(err))
  }
  useEffect(()=>{
    fetchData()
  },[])

  function handleEdit(e,id){
    e.preventDefault()
    navigate(`/edit/${id}`)
  }

  function handleDelete(e,id){
    e.preventDefault()

    axios.delete(`http://localhost:5000/users/${id}`)
    .then(()=>{
      fetchData()
    })
    .catch(err=>console.log(err)
    )
  }
  return (
    <>
      {users.map((x)=>(
        <div className={styles.container}>
          <div className={styles.details}>
            <h1>{x.name}</h1><br/>
            <p>Department : {x.dept}<br/>
            Course : {x.course}<br/>
            Email : {x.email}<br/>
            Mobile : {x.phone}</p><br/>
            <button onClick={(e)=>{handleEdit(e,x.id)}}>Edit Student</button><br/>
            <button onClick={(e)=>{handleDelete(e,x.id)}}>Delete Student</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default ViewStudents