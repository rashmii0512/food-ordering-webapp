import {resList, swiggyList} from "../utils/mockData";
import {RES_IMG} from "../utils/constants"
import {styleCard, CardOld, Card , Card2, Card3, Card4 } from "./Card";
import {useState, useEffect} from "react" ;
import Shimmer from "./Shimmer";


const Body = () => {

    const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async ()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.16876274291669&lng=72.9584626480937&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
        // console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants );
        // optional chaining
        setListOfRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredListOfRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    //COnditional Rendering
    // if(listOfRestaurant.length === 0){
    //    return (
    //     //Dont put loading ... use shimmer ui
    //     <Shimmer/>
    //    ) 
    // }

    return  filteredListOfRestaurant.length == 0 ?( 
        <Shimmer/> 
    ): (
        <div className="body">
            <div className="filter">
                <div className="search-box">
                    <input
                        type="text" 
                        value ={search}
                        onChange={(e)=>{
                            setSearch(e.target.value)
                        }}
                    />
                    <button 
                        className="search-btn"
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
            
                <button 
                  className = "top"
                  onClick = {() => {
                    const filteredList =  listOfRestaurant.filter(
                        (res)=> res.info.avgRating > 4.4   
                    );
                    console.log(filteredList);
                    setFilteredListOfRestaurant(filteredList);
                  }}
                >
                    Top restaurants
                </button>
            </div>
            <div className="res-container">
                {    
                    filteredListOfRestaurant.map((restaurant) => (
                        <Card4 key={restaurant.info.id} resData = {restaurant}/>
                    ))
                }
                
            </div>
        </div>
    )
};

export default Body;