import  {LOGO_URL} from "../utils/constants"
import {useState} from "react" ;

const Header = () => {

    const [login, setLogin]  = useState(["login"]);

    
    return (
        <div className="header">
            <img  className="logo"  src={LOGO_URL} />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button 
                        className="login" 
                        onClick = {() => {
                            setLogin(["Logout"]);
                        }}
                    >
                    {login}
                    </button>
                </ul>
            </div>
        </div>
    )
};

export default Header;