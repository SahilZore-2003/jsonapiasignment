import { createContext, useState } from "react";


export const UserContext = createContext(null);

export const UserContextProvider = (props) => {


    const user = localStorage.getItem("user");
    const [userAthenticate, setUserAuthenticate] = useState(!!user);
    const [showLoginModel, setShowLoginModel] = useState(false)
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("all")
    const [cart, setCart] = useState([])
    let totalBill = cart.reduce((a,b)=>{
      return  a+=b.price;
    },0);

   

    return (
        <UserContext.Provider value={{totalBill, cart, setCart, setSearch, search, userAthenticate, setUserAuthenticate, user, showLoginModel, setShowLoginModel, filter, setFilter }}>
            {props.children}
        </UserContext.Provider>
    )
}