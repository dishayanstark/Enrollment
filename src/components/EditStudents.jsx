import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from "../styles/addedit.module.css"

const EditStudents = () => {
    const {id} = useParams()

        const [name,setName]=useState("")
        const [dept,setDept]=useState("")
        const [course,setCourse]=useState("")
        const [email,setEmail]=useState("")
        const [phone,setPhone]=useState("")
        
        const navigate=useNavigate()

        useEffect(()=>{
            axios.get(`http://localhost:5000/users/${id}`)
            .then((response)=>{
                const{name,dept,course,email,phone}=response.data
                setName(name)
                setDept(dept)
                setCourse(course)
                setEmail(email)
                setPhone(phone)
            })
            .catch(err=>console.log(err)
            )
        },[id])

        function handleEdit(e){
            e.preventDefault()

            const editStudent={
            name,dept,course,email,phone
        }

        axios.put(`http://localhost:5000/users/${id}`,editStudent)
        .then(()=>{
            navigate("/view/users")
        })
        }
  return (
    <>
        <div className={styles.formholder}>
        <form action="" onSubmit={handleEdit}> 
            <div className={styles.sign}>
                <h2>EDIT STUDENT DETAILS</h2>

                <input type="text" placeholder="Student Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                <input type="text" placeholder="Department" value={dept} onChange={(e)=>{setDept(e.target.value)}}/>
                <input type="text" placeholder="Course" value={course} onChange={(e)=>{setCourse(e.target.value)}}/>
                <input type="email" placeholder="Email Address" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="number" placeholder="Mobile Number" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>

                <div className={styles.click}>
                    <center><button>Edit Details</button></center>
                </div>
            </div>
        </form>
        </div>
        </>
  )
}

export default EditStudents