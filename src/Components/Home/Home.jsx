import React, { useContext, useEffect, useState } from 'react'
import "./Home.scss"
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import { FaRegStar } from "react-icons/fa";
import Loader from '../Loader/Loader';

const Home = () => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([])
    const { userAthenticate, search, filter, cart, setCart } = useContext(UserContext);
    const navigate = useNavigate()

    function getData() {
        setLoading(true)
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => {
                setData(data.products)
            })
        setLoading(false)
    }

    useEffect(() => {
        if (userAthenticate == false) {
            navigate("/login")
        }

        if (filter == "50") {
            setLoading(true)
            fetch("https://dummyjson.com/products")
                .then((res) => res.json())
                .then((data) => {
                    setData(data.products.filter((e) => e.price <= 50));
                })
            setLoading(false)

        }
        if (filter == "50-500") {
            setLoading(true)
            fetch("https://dummyjson.com/products")
                .then((res) => res.json())
                .then((data) => {
                    setData(data.products.filter((e) => (e.price >= 50 && e.price <= 500)));
                })
            setLoading(false)
        }
        if (filter == "500") {
            setLoading(true)
            fetch("https://dummyjson.com/products")
                .then((res) => res.json())
                .then((data) => {
                    setData(data.products.filter((e) => e.price > 500));
                })
            setLoading(false)
        }
        if (filter == "all") {
            getData()
        }

    }, [userAthenticate, filter])




    return (
        <header className='home container'>
            {
                loading ? <Loader /> : <div className="product-container">
                    {
                        data.filter(e => e.title.toLowerCase().includes(search.toLowerCase())).map((e) => (
                            <div className='product' key={e.id}>
                                <div className="img">
                                    <img src={e.thumbnail} alt="product image" />
                                </div>
                                <div className='bottom'>
                                    <h2>{e.title}</h2>
                                    <p>{e.description}</p>
                                    <div className="price">
                                        <h1>Rs {e.price}</h1>
                                        <button onClick={(btn) => {
                                            setCart([...cart, e]);
                                            btn.target.setAttribute("disabled", "true")
                                        }}>Add to cart</button>
                                    </div>
                                    <div className="star">
                                        <FaRegStar />
                                        {e.rating}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            }


        </header>
    )
}

export default Home
