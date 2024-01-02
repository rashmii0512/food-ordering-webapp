import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *    -logo
 *    -Nav Items
 * Body
 *    -Search
 *    -Restaurant container
 *       -Restaurant card
 * Footer
 *    -Copyright
 *    -links
 *    -adress
 *    -COntact
 */

const Header = () => {
    return (
        <div className="header">
            <img  className="logo"  src="https://t3.ftcdn.net/jpg/04/03/74/22/360_F_403742248_8DDzcFF4jw05lWqftk2yxzKRpFvpZ01Y.jpg" />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const styleCard = {
    background: "#f0f0f0",
};
// writing css  like code inside js using jsx

const Card = () => {
    return (
        <div className="res-card" style={styleCard}>
            <div className="res-logo">
                <img  src="https://www.shutterstock.com/image-photo/dum-handi-chicken-biryani-prepared-600nw-2000023562.jpg" />
            </div>
            <div className="res-info">
                <h3>Meghana Foods</h3>
                <h4>Biryani, North Indian, Asians</h4>
                <h4>4.4 stars</h4>
                <h4>38 minutes</h4>
            </div>
        </div>
    )
}


const Body = () => {
    return (
        <div className="body">
            <div className="search"></div>
            <div className="res-container">
                <Card/>
            </div>
        </div>
    )
}
const App = () => {
    return (
        <div className="app">
            <Header />
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>)