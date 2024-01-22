import  {LOGO_URL} from "../utils/constants"
import {useState} from "react" ;
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {

    const [btnNameReact, setBtnNameReact]  = useState(["Login"]);
    const onlineStatus = useOnlineStatus();
    
    return (
        <div className="flex justify-between  pl-24  pr-36 mb-2  shadow-lg  items-center ">
            <img  className="h-[90px]   w-[200px]  object-cover"  src={LOGO_URL} />
            <div className="nav-items">
                <ul className="flex " >
                    <li className=" p-5 text-lg">status: {onlineStatus === true ? "online" : "offline" }</li>
                    <li className="p-5 text-lg "><Link to="/">Home</Link></li>
                    <li className="p-5 text-lg "><Link to="/about">About us</Link></li>
                    <li className="p-5 text-lg "><Link to="/contact">Contact us</Link></li>
                    <li className="p-5 text-lg "><Link to="/grocery">Grocery</Link></li>
                    <li className="p-5 text-lg ">Cart</li>
                    <button 
                        className="p-5 text-xl" 
                        onClick = {() => {
                            btnNameReact == "Login" 
                            ? setBtnNameReact(["Logout"])
                            : setBtnNameReact(["Login"]) ;
                        }}
                    >
                    {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    )
};

export default Header;