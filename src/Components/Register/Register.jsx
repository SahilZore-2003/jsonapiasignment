import React, { useContext, useEffect, useState } from 'react'
import "./Register.scss"
import { FaRegUser } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../../Context/UserContext';
import { useNavigate } from "react-router-dom";

const Register = () => {

  const { userAthenticate, setUserAuthenticate } = useContext(UserContext);
  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    if (password.length >= 6 && username.length >= 6) {
      setSubmit(true)
    } else {
      setSubmit(false)
    }
  }, [password, username])

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(`username : ${username} password: ${password}`)

    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: `${username}`,
        password: `${password}`,
      })
    })
      .then(res => res.json())
      .then((data) => {

        if (Object.keys(data).length > 2) {
          localStorage.setItem("user", JSON.stringify(data));
          toast.success("Login Successfull");
          setUserAuthenticate(true)
          setUsername("")
          setPassword("")
          navigate("/")
        } else {
          console.log("login Failed!!")
          setUserAuthenticate(false)
          toast.error("Login Failed!!");
          setUsername("")
          setPassword("")
        }
      })

  }




  return (
    <div className='register'>
      <ToastContainer />
      <h1 className='center'>Login Please!</h1>
      <div className='main'>
        <form onSubmit={handleSubmit}>
          <h2 className='center'>Hello Friend's</h2>
          <div>
            <FaRegUser />
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='UserName' />
            {/* <small>**Username not valid**</small> */}
          </div>

          <div>
            <CiLock />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
            {/* <small>**password not valid**</small> */}
          </div>
          {

            submit ? <button type='submit'>Login</button> : <button disabled>Login</button>
          }
        </form>
        <div className="right">
          <div>
            <h2>Glad to see you !</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, asperiores.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
