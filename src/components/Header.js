import  {LOGO_URL} from "../utils/constants"
import {useState} from "react" ;
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {

    const [btnNameReact, setBtnNameReact]  = useState(["Login"]);
    const onlineStatus = useOnlineStatus();
    
    return (
        <div className="header">
            <img  className="logo"  src={LOGO_URL} />
            <div className="nav-items">
                <ul>
                    <li>status: {onlineStatus === true ? "online" : "offline" }</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button 
                        className="login" 
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