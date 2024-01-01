import React, { useContext } from 'react'
import "./Cart.scss"
import { FaRegCircleXmark } from "react-icons/fa6";
import { UserContext } from '../../Context/UserContext';
import cartImg from "../../assets/cart.png";


const Cart = () => {

    const { cart, setCart, totalBill } = useContext(UserContext);

    const removeItem = (e) => {
        let newCart = cart.filter((item) => item.id != e)
        setCart(newCart);
    }

    return (
        <div className='cart container'>

            {
                cart.length < 1 ? <div className="emptycart">
                    <h1 className="center" style={{ color: "#3598fe" }}>Your Cart ({cart.length} items)</h1>
                    <img src={cartImg} alt="" />
                </div> : <div>
                    <h1 className="center">Your Cart ({cart.length} items)</h1>
                    <div className="main-cart">
                        <div className="row heading">
                            <span>Item</span>
                            <span>Name</span>
                            <span>Price</span>
                            <span>Delete</span>
                        </div>
                        {
                            cart.map((e) => (
                                <div className="row" key={e.id}>
                                    <img src={e.thumbnail} alt="" />
                                    <h3>{e.title}</h3>
                                    <p>{e.price} RS</p>
                                    <FaRegCircleXmark onClick={() => removeItem(e.id)} />
                                </div>
                            ))
                        }


                        <div className="total">
                            <p>Grand Total:<span>Rs.{totalBill}</span></p>

                        </div>
                    </div>
                </div>
            }





        </div>
    )
}

export default Cart
