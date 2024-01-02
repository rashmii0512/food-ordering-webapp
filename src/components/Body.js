import {resList, swiggyList} from "../utils/mockData";
import {RES_IMG} from "../utils/constants"
import {styleCard, CardOld, Card , Card2, Card3, Card4 } from "./Card";



const Body = () => {
    return (
        <div className="body">
            <div className="search"></div>
            <div className="res-container">
                {/* passing a prop ( i.e propertl=y which is like argument ) 
                props passes a javascript object */}
                <CardOld/>
                {/* dont keep the url in components , keep them in components of utils ,i havent removed them from here */}
                <Card 
                  res_img= {RES_IMG}
                  resName="Meghana Foods"
                  cuisine="Biryani, North Indian , Asian"
                  rating="4.4"
                  minutes="27"
                />
                <Card2 
                  res_img={RES_IMG}
                  resName="KFC"
                  cuisine="Fried chicken, Burgers"
                  rating="4.6"
                  minutes="36"
                />
                {/* industry level using json data  */}
                <Card3 resData = {resList[0]}/>
                <Card3 resData = {resList[1]}/>
                {/* instead of putting individually , use a loop , used irl*/}
                {/* use map filter reduce */}
                {    
                    resList.map((restaurant) => (
                        <Card3 key={restaurant.id} resData = {restaurant}/>
                    ))
                }

                {/* you should provide a key of you are looping over components */}
                {    
                    swiggyList.map((restaurant) => (
                        <Card4 key={restaurant.info.id} resData = {restaurant}/>
                    ))
                }



            </div>
        </div>
    )
};

export default Body;