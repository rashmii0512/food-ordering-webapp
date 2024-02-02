import  {LOGO_URL} from "../utils/constants"
import {useState, useContext} from "react" ;
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";



const Header = () => {

    const [btnNameReact, setBtnNameReact]  = useState(["Login"]);
    const onlineStatus = useOnlineStatus();
    const {loggedInUser, setUserName} = useContext(UserContext);

    

    //suscribing to store using a selector
    // import appStore from "../redux/appStore";
    const cartItems = useSelector((store) => store.cart.items);
    return (
        <div className="flex justify-between mb-10 pl-24  pr-36  shadow-lg  items-center ">
            <img  className="h-[90px]   w-[200px]  object-cover"  src={LOGO_URL} />
            <div className="nav-items">
                <ul className="flex " >
                    <li className=" p-5 text-lg">status: {onlineStatus === true ? "online" : "offline" }</li>
                    <li className="p-5 text-lg "><Link to="/">Home</Link></li>
                    <li className="p-5 text-lg "><Link to="/about">About us</Link></li>
                    <li className="p-5 text-lg "><Link to="/contact">Contact us</Link></li>
                    <li className="p-5 text-lg "><Link to="/grocery">Grocery</Link></li>
                    <li className="p-5 text-lg relative "><Link to="/cart">Cart<span className="absolute text-sm font-bold top-2/4  z-10">({cartItems.length})</span></Link></li>
                    <button 
                        className="p-5 text-xl" 
                        onClick = {() => {
                            if(btnNameReact == "Login" ){
                                setBtnNameReact(["Logout"]);
                                setUserName("rashmi");
                            }else{
                                setBtnNameReact(["Login"]) ;
                                setUserName("Default user");
                            }
                        }}
                    >
                    {btnNameReact}
                    </button>
                    <li className="p-5 text-lg font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;