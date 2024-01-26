import {useState, useEffect} from "react";
import ResDish from "./ResDish";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Category from "./Category";

const ResMenu = () => {

    const params = useParams();
    const  [filteredMenu , setFilteredMenu] = useState([]);
    const {resto, menu, carousal, all} = useRestaurantMenu(params.resId) ;
    const [showIndex, setShowIndex] = useState(0);
    

    useEffect(()=>{
        if(menu){
            // setFilteredMenu(menu);
            setFilteredMenu(all);
            // console.log(menu);
            // console.log(all);
        }
        
    }, [menu]);
    
    const [veg, setVeg] = useState("false");


    const forVeg = () => {
        setVeg("true");
        // const newList = menu.filter((dish)=>{
        //     return dish.card?.info?.itemAttribute?.vegClassifier == "VEG";
        // })
        // setFilteredMenu(newList);
    }

    const forNonVeg = () => {
        setVeg("false");
        // setFilteredMenu(menu);
    }
    
    return (filteredMenu.length === 0 && veg=="false" )
    ? <Shimmer/> 
    : (
        <div className="px-[20%] flex flex-col justify-between">
            <div className="res-head">
                <div>
                    
                    


                    <div className="flex justify-between">
                        <div>
                        <h1 className=" text-xl">{resto.name}</h1>
                        {/* {console.log(resto)} */}
                        <p className=" text-lg">{resto?.slugs?.city}</p>
                        <p>{resto?.cuisines.join(", ")}</p>
                        <p className="mx-1"> {resto?.sla.deliveryTime} mins | {resto?.feeDetails?.message}</p >
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
                    
                < input 
                  type="checkbox" 
                  onClick= {() =>{
                    // console.log(veg);
                    veg === "false" 
                    ?   forVeg()
                    :   forNonVeg();
                  }}
                  
                  className="  appearance-none relative w-[3.25rem] h-7 rounded-full shadow-sm bg-gray-300  cursor-pointer transition-colors ease-in-out duration-200 focus:ring-blue-600 disabled:pointer-events-none checked:bg-none checked:text-blue-600 checked:border-blue-600 focus:checked:border-blue-600 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-600 before:inline-block before:w-5 before:h-5 before:m-1 before:bg-white checked:before:bg-green-600 before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"
                /> 
    
                {/* </div> */}
                {/* </label> */}
                
            </div>
            <hr className="my-2" />
            {
                filteredMenu.map((c, index)=>(
                    <div>
                        {/* <ResDish key={dish?.card?.info.id} props={dish?.card}/> */}
                        {/* {dish.card?.card?.title} */}
                        <Category 
                            category={c} 
                            veg={veg} 
                            show={showIndex == index ? true : false} 
                            setShowIndex = {() => setShowIndex(index) }
                        />

                    </div>
                ))

                


            }
            {/* {
                carousal.map((dish)=>(
                    <div>
                        <ResDish key={dish?.card?.info.id} props={dish?.card}/>
                    </div>
                ))
            } */}
        </div>
    )
}

export default ResMenu;