import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "../styles/addedit.module.css"

const AddStudents = () => {
    const [name,setName]=useState("")
    const [dept,setDept]=useState("")
    const [course,setCourse]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    
    const navigate=useNavigate()

    function handleForm(e){
        e.preventDefault()

        const users={
            name,dept,course,email,phone
        }

        axios.post("http://localhost:5000/users",users)
        .then(()=>{
            setName("")
            setDept("")
            setCourse("")
            setEmail("")
            setPhone("")
            navigate("/view/users")
        })
        .catch((err)=>console.log(err))
    }

    return (
        <>
        <div className={styles.formholder}>
        <form action="" onSubmit={handleForm}> 
            <div className={styles.sign}>
                <h2>STUDENT DETAILS</h2>

                <input type="text" placeholder="Student Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                <input type="text" placeholder="Department" value={dept} onChange={(e)=>{setDept(e.target.value)}}/>
                <input type="text" placeholder="Course" value={course} onChange={(e)=>{setCourse(e.target.value)}}/>
                <input type="email" placeholder="Email Address" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="number" placeholder="Mobile Number" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>

                <div className={styles.click}>
                    <center><button>Add Student</button></center>
                </div>
            </div>
        </form>
        </div>
        </>
    )
  }

export default AddStudents;