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
        <div className="px-[10%] flex flex-col justify-between">
            <div className="res-head">
                <div>
                    
                    
{/* <label class="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer">
  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div></input>
  <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
</label> */}


                    <div className="flex justify-between">
                        <div>
                        <h1 className=" text-xl">{resto.name}</h1>
                        {console.log(resto)}
                        <p className=" text-lg">{resto?.slugs?.city}</p>
                        <p>{resto?.cuisines.join(", ")}</p>
                        <p className="mx-1"> {resto?.sla.deliveryTime} mins {resto?.feeDetails?.message}</p >
                        </div>
                    
                        <div  className="py-[1%]">
                            <div className="border border-solid border-gray-500 rounded-md p-2 items-center">
                                <p >🌟 {resto?.avgRating} </p>
                                <hr className="m-1  border border-gray-200"/>
                                <p className="text-sm">{resto?.totalRatingsString}</p>
                            </div>
                            
                        </div>

                    </div>
                    {/* <p className="inline-block pr-2">{(resto?.locality).toLowerCase()},</p>
                    <p className="inline-block px-2" >{resto?.areaName.toLowerCase()},</p>
                    <p className="inline-block px-2" >{resto?.city}</p> */}
                    
                </div>
               
            </div>
            <hr className="my-2"/>
            <div className = "px-4 my-2 flex items-center">
                <span className="pr-2">Veg Only   </span>
                <label class="relative inline-flex items-center cursor-pointer">
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">

                    
                < input 
                  type="checkbox" 
                  onClick= {() =>{
                    console.log(veg);
                    veg === "false" 
                    ?   forVeg()
                    :   forNonVeg();
                  }}
                  
                  className="sr-only peer"
                /> 
    
                </div>
                </label>
                
            </div>
            <hr className="my-2" />
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