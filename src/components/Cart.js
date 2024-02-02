import {useSelector } from "react-redux";
import ResDish from "./ResDish";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";

const Cart = () => {
    const cart = useSelector((store)=> store.cart.items);
    const dispatch = useDispatch();
    id = cart?.props?.info?.id;
    // console.log("here-----");
    const removeDish=()=>{
        dispatch(clearCart());
    }
    
    if(cart.length == 0){
        return (
            <div className="px-[20%] flex flex-col justify-between">
                <h1 className="text-center font-bold p-5">Your cart is empty</h1>
                <p className ="text-center p-5">You can go to home page to view more restaurants</p>
            </div>
        )
    }
    return (
        <div className="px-[20%] flex flex-col justify-between">
            <h1 className="text-center font-bold">Cart</h1>
            {
                cart.map((data, index)=>{
                    
                    return (
                        <div>
                             <ResDish key={id} props={cart[index].props}/>
                             {/* {console.log(cart[index]?.props)} */}
                        </div>
                    )
                     
                    
                })
            }

            <div className="flex justify-evenly">
                <button 
                    className="py-1 px-2 m-1 border bg-green-100 rounded-md"
                    onClick ={()=>{
                        removeDish();
                    }}
                >Clear Cart
                </button>
                <button className="py-1 px-2 m-1 border bg-green-100 rounded-md">CheckOut</button>
            </div>
            
            
        </div>
    )
}

export default Cart;