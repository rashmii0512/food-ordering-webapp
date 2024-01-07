import {useState, useEffect} from "react";
import ResDish from "./ResDish";
import Shimmer from "./Shimmer";
import {CON_URL, RES_LINK_1, RES_LINK_2} from "../utils/constants"
import {useParams} from "react-router-dom";

const ResMenu = () => {
    const params = useParams();

    const  [menu , setMenu] = useState([]);
    const  [filteredMenu , setFilteredMenu] = useState([]);
    const [resto, setResto] = useState([]);
    const [veg, setVeg] = useState("false");

    const [loop, setLoop] = useState();

    useEffect(()=>{
        getData();
    }, []);

    const getData = async  () => {
        const link = RES_LINK_1 + params.resId +RES_LINK_2;
        const data = await fetch(link);
        const json = await data.json();
        
        setMenu(json?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR.cards[3]?.card?.card?.itemCards); 
        setLoop(json?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR.cards);  
        // console.log(loop); 
        setFilteredMenu(json?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR.cards[3]?.card?.card?.itemCards);      
        setResto(json?.data?.cards[0].card?.card?.info);    
    }


    const forVeg = () => {
        setVeg("true");
        const newList = menu.filter((dish)=>{
            return dish.card?.info?.itemAttribute?.vegClassifier == "VEG";
        })
        // console.log(menu[0].card?.info?.itemAttribute?.vegClassifier);
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
                    // console.log(dish?.card);
                ))

                //to get all the section.... work in progress
                // loop.map((section, (value, index)=>{
                //     if(index > 1){
                //     const data = section?.card?.card?.itemCards ;
                //     console.log(data);
                //     // data.map((dish)=>(
                //     //     <div>
                //     //         <ResDish key={dish?.card?.info.id} props={dish?.card}/>
                //     //     </div>
                //     //     // console.log(dish?.card);
                //     // ))
                //     }
                // })

            }
        </div>
    )
}

export default ResMenu;