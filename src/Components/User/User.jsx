import React, { useContext } from 'react'
import "./User.scss"
import { UserContext } from '../../Context/UserContext'
import { useNavigate } from 'react-router-dom'


const User = () => {

    const navigate = useNavigate()
    const { showLoginModel,setUserAuthenticate, user, setShowLoginModel } = useContext(UserContext);

    const logout = () => {
        localStorage.removeItem("user");
        setShowLoginModel(false)
        setUserAuthenticate(false)
        navigate("/login")
    }

    const userDetails = JSON.parse(user)
    if (userDetails == null) {
        return
    }



    return (
        <div className='user' style={showLoginModel ? { right: "0%" } : { right: "-100%" }}>
            <div>
                <img src={userDetails.image} alt="" />
            </div>
            <h2>{userDetails.username}</h2>
            <h4>{userDetails.firstName} {userDetails.lastName}</h4>
            <p>{userDetails.email}</p>
            <button onClick={logout}>LogOut</button>
        </div>
    )
}

export default User
