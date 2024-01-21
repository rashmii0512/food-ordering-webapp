import {CON_URL} from "../utils/constants"
import {resList} from "../utils/mockData";
import {Link} from "react-router-dom";


export const styleCard = {
    background: "#f0f0f0",
};
// writing css  like code inside js using jsx
 
export const CardOld = () => {
    return (
        <div className="res-card" style={styleCard}>
            <div className="res-logo">
                <img  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xrxgghtuxiltg4soxjah" />
            </div>
            <div className="res-info">
                <p>Meghana Biryani</p>
                <p>Biryani, North Indian, Asians</p>
                <p>4.4 stars</p>
                <p>38 minutes</p>
            </div>
        </div>
    )
};

export const Card = (props) => {
    return (
        <div className="res-card" style={styleCard}>
            <div className="res-logo">
                <img  src={props.res_img} />
            </div>
            <div className="res-info">
                <p>{props.resName}</p>
                <p>{props.cuisine}</p>
                <p>{props.rating} rating</p>
                <p>{props.minutes} minutes</p >
            </div>
        </div>
    )
};

export const Card2 = ({res_img, resName, cuisine, rating, minutes }) => {
    return (
        <div className="res-card" style={styleCard}>
            <div className="res-logo">
                <img  src={res_img} />
            </div>
            <div className="res-info">
                <p>{resName}</p>
                <p>{cuisine}</p>
                <p>{rating} rating</p>
                <p>{minutes} minutes</p >
            </div>
        </div>
    )
};


export const Card3 = (props) => {
    const {resData} = props;
    // const {resName, cuisine, rating , minutes } = resData?.data;
    //then you can directly acces ,, i have not applied this below
    return (
        <div 
            className="res-card" 
            style={styleCard} 
            
        >
            <div className="res-logo">
                <img  src={resData.res_img} />
            </div>
            <div className="res-info">
                <p>{resData.resName}</p>
                <p>{resData.cuisine}</p>
                <p>{resData.rating} rating</p>
                <p>{resData.minutes} minutes</p >
            </div>
        </div>
    )
};

export const Card4 = (props) => {
    const {resData} = props;
    const {id, name, cuisines, avgRating , sla } = resData?.info;
    // console.log("/resmenu/"+String(id));
    return (
        <Link to={"/resmenu/"+String(id)} className="cardLink">
        <div 
            className="res-card"
            // onClick = {()=>{
            //     console.log("here");
            //     const link = "/resmenu/"+String(id);
                
            // }} 
        >
            <div className="res-logo">

                <img  src= {CON_URL + resData.info.cloudinaryImageId} />
                {/* {console.log(CON_URL + resData.info.cloudinaryImageId)} */}
            </div>
            <div className="res-info">
                <h4>{name}</h4>
                <p>{cuisines.join(", ")}</p>
                <p>{avgRating} rating</p>
                <p>{sla.deliveryTime} minutes</p >
            </div>
        </div>
        </Link>
    )
};

// export {styleCard, CardOld, Card , Card2, Card3, Card4, resList, };