import React from 'react'
import subTitle2 from '../images/SubTitle.png'
import { useState } from 'react';
import '../styles/Blog.css'
const Table = () => {


    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [person, setperson] = useState();
    const [date, setDate] = useState();
    const [timing, setTiming] = useState();
  
    //validation
    const [userNameError, setUserNameError] = useState();
    const [emailError, setEmailError] = useState('')
    const [personerror, setPersonError] = useState('')
    const [timingerror, settimingError] = useState('')
    const [dateError, setDateError] = useState('')
  
  
    const handelname = (e) => {
      setUserName(e.target.value);
      if (e.target.value.length < 3) {
        setUserNameError('Username must be at least 3 characters long');
      } else {
        setUserNameError('');
      }
    }
  
    const handelEmail = (e) => {
      setEmail(e.target.value)
      if (!email) {
        setEmailError("please enter your email")
      }
      else if (!email.includes('@') || !email.includes('.')) {
        setEmailError("please enter  a valid email address")
      }
      else {
        setEmailError("")
      }
    }
  
    const handeldate = (e) => {
      setDate(e.target.value)
      if (!date) {
        setDateError("please enter  date")
  
      }
      else {
        setDateError("")
      }
  
    }
    const handeltime = (e) => {
      setTiming(e.target.value)
      if (!timing) {
        settimingError("please enter  date")
  
      }
      else if (/[a-zA-Z]/.test(timing)) {
        settimingError(" date should be only numbers")
      }
      else {
        settimingError("")
      }
  
    }
    const handelperson = (e) => {
      setperson(e.target.value)
      if (!person) {
        setPersonError("please enter  full name")
  
      }
      else {
        setPersonError("")
      }
  
    }
  
  



    return (
        <div>

                <div className='grid'  >
                    <div className='text'>
                        <img src={subTitle2}  ></img>


                        <h1>Book your table now</h1></div>
                    <form onSubmit={(e) => { e.preventDefault() }}>
                        <div className='grid-one'>
                            <div>
                                <input type='text' value={userName} onChange={handelname} placeholder='Name' className='name ' />
                                {userNameError && <div style={{ color: 'red' }}>{userNameError}</div>}
                            </div>
                            <div>
                                <input type='email' value={email} onChange={handelEmail} placeholder='Email' className='email' />
                                {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
                            </div>
                        </div>
                        <div className='grid-two '>
                            <div>
                                <input type="text" value={person} onChange={handelperson} placeholder='Person' className='person' />
                                {personerror && <div style={{ color: 'red' }}>{personerror}</div>}

                            </div>

                            <div>
                                <input type="text" value={timing} onChange={handeltime} placeholder='Timing' className='timing' />
                                {timingerror && <div style={{ color: 'red' }}>{timingerror}</div>}

                            </div>
                            <div>
                                <input type="text" value={date} onChange={handeldate} placeholder='Date' className='date' />
                                {dateError && <div style={{ color: 'red' }}>{timingerror}</div>}

                            </div>

                        </div>
                        <button className='submit' > Book a Table</button>
                    </form>
                </div>
           

        </div>
    )
}

export default Table