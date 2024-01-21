import {useState, useEffect} from "react";
import ResDish from "./ResDish";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const ResMenu = () => {

    const params = useParams();
    const  [filteredMenu , setFilteredMenu] = useState([]);
    const {resto, menu} = useRestaurantMenu(params.resId) ;
    

    useEffect(()=>{
        if(menu){
            setFilteredMenu(menu);
            // console.log(menu);
        }
        
    }, [menu]);
    
    const [veg, setVeg] = useState("false");


    const forVeg = () => {
        setVeg("true");
        const newList = menu.filter((dish)=>{
            return dish.card?.info?.itemAttribute?.vegClassifier == "VEG";
        })
        setFilteredMenu(newList);
    }

    const forNonVeg = () => {
        setVeg("false");
        setFilteredMenu(menu);
    }
    

    return filteredMenu.length === 0 
    ? <Shimmer/> 
    : (
        <div className="res-menu">
            <div className="res-head">
                <div>
                    <h1>{resto.name}</h1>
                    <p>{resto?.slugs?.city}</p>
                    <p></p>
                </div>
               
            </div>
            <hr/>
            <div className = "veg-filter">
                Veg Only 
                < input 
                  type="checkbox" 
                  onClick= {() =>{
                    console.log(veg);
                    veg === "false" 
                    ?   forVeg()
                    :   forNonVeg();
                  }}
                /> 
            </div>
            <hr/>
            {
                filteredMenu.map((dish)=>(
                    <div>
                        <ResDish key={dish?.card?.info.id} props={dish?.card}/>
                    </div>
                ))


            }
        </div>
    )
}

export default ResMenu;