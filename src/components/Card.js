import {CON_URL} from "../utils/constants"
import {resList} from "../utils/mockData";
import {Link} from "react-router-dom";

const Card4 = (props) => {
    const {resData, display} = props;
    const {id, name, cuisines, avgRating , sla } = resData?.info;
    // console.log("/resmenu/"+String(id));
    return (
        <Link to={"/resmenu/"+String(id)} className="cardLink">
        <div 
            className= {" h-[275px] w-[250px] m-4  rounded-md  " + display }
        >
            <div className="   ">

                <img className=" h-[175px] w-[100%] rounded-xl object-cover"  src= {CON_URL + resData.info.cloudinaryImageId}  />
                {/* {console.log(CON_URL + resData.info.cloudinaryImageId)} */}
            </div>
            <div className="res-info  p-2">
                <h4 className="font-medium">{name}</h4>
                <div className="flex font-medium "> 
                    <p>🌟 {avgRating}  ·</p>
                    <p className="mx-1"> {sla.deliveryTime} mins</p >
                </div>
                <p >{cuisines.join(", ")}</p>
                
            </div>
        </div>
        </Link>
    )
};

//higher order component
export const FastCard = (Card4) => {
    return (props) => {
        return(
            <div className="hover:scale-[.92]  transition-transform  delay-125" >
                <label className="bg-black rounded-xl p-1 m-2 text-white absolute z-[1] ">
                Fast Delivery</label>
                <Card4  {...props}/>
                
                
            </div>
        )
    };
};


export default Card4;