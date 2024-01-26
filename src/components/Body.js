import {resList, swiggyList} from "../utils/mockData";
import {RES_IMG} from "../utils/constants"
import  Card4, { FastCard } from "./Card";
import {useState, useEffect} from "react" ;
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus"

const Body = () => {

    const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [search, setSearch] = useState("");
    const onlineStatus = useOnlineStatus();
    const FastCardComponent = FastCard(Card4);
    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async ()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.16876274291669&lng=72.9584626480937&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        // console.log(json);
        // console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants );
        // optional chaining
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // console.log(filteredListOfRestaurant);
    };


    if(onlineStatus === false) return (<h1>You are offline</h1>);
     //COnditional Rendering
    return  filteredListOfRestaurant ? (
    filteredListOfRestaurant.length == 0 ?( 
        <Shimmer/> 
    ): (
        <div className=" mx-0  md:mx-[10%] ">
            <input type="checkbox" className="  appearance-none relative w-[3.25rem] h-7 rounded-full shadow-sm bg-gray-300  cursor-pointer transition-colors ease-in-out duration-200 focus:ring-blue-600 disabled:pointer-events-none checked:bg-none checked:text-blue-600 checked:border-blue-600 focus:checked:border-blue-600 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-600 before:inline-block before:w-5 before:h-5 before:m-1 before:bg-white checked:before:bg-black before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"/>
            <div className="filter my-4">
                <div className="  p-2 my-4 border border-solid border-gray-800 rounded-md  flex justify-between">
                    <input
                        type="text" 
                        value ={search}
                        onChange={(e)=>{
                            setSearch(e.target.value)
                        }}
                        className = " p-2 w-11/12 border-none outline-none"
                    />
                    <button 
                        className="py-1 px-2 m-1 border bg-green-100 rounded-md  "
                        onClick={()=>{
                            const searchList = listOfRestaurant.filter((res)=>{
                                return res.info.name.toLowerCase().includes( search.toLowerCase()) 
                                // || res.info.cuisines.toLowerCase().includes( search.toLowerCase())
                            })
                            setFilteredListOfRestaurant(searchList);
                            // console.log(search);
                        }}
                    >
                        Search
                    </button>
                </div>
                
                <div className="">
                <button 
                  className = "p-2 border border-solid border-black rounded-md bg-green-100"
                  onClick = {() => {
                    const filteredList =  listOfRestaurant.filter(
                        (res)=> res.info.avgRating > 4.4   
                    );
                    // console.log(filteredList);
                    setFilteredListOfRestaurant(filteredList);
                  }}
                >
                    Top restaurants
                </button>
                </div>
            </div>
            <div className="res-container flex flex-wrap ">
                {    
                    filteredListOfRestaurant.map((restaurant) => (
                        
                        restaurant.info.sla.deliveryTime < 30 ? (
                            <FastCardComponent key={restaurant.info.id} resData = {restaurant} display={""}/>
                                
                        ) : ( 
                                <Card4 key={restaurant.info.id} resData = {restaurant} display={"hover:scale-[.92]  transition-transform  delay-125"}/>
                        )
                        

                    ))
                }
                
            </div>
        </div>
    )
    ) :(
        <Shimmer />
    );
};

export default Body;