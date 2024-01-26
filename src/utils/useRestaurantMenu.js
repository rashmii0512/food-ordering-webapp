import {useState, useEffect} from "react" ;
import { RES_LINK_1, RES_LINK_2} from "../utils/constants"

const useRestaurantMenu =  (resId) => {
    const [resto, setResto] = useState();
    const [menu, setMenu] = useState();
    const [carousel , setCarousel]  = useState();
    const [all, setAll] = useState();

    useEffect(()=>{
        getData();
    }, []);


    const getData = async  () => {
        const link = RES_LINK_1 + resId +RES_LINK_2;
        
        const data = await fetch(link);
        const json = await data.json();
        // console.log(json);
        setResto(json?.data?.cards[0].card?.card?.info); 
        
        const categories = 
        json?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );

        setAll(categories);

        // const two = await json?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel;
        // setCarousel(two);  
        // console.log(json);
        // console.log(carousel);
        let num = 3;
        // console.log("here " +  (json?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards).length );
        while(!(json?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[num]?.card?.card?.itemCards) && num < (json?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards).length ){
            num++;
        }
        setMenu(json?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[num]?.card?.card?.itemCards);
        //for further work of getting entire menu
        // while(num < (json?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards).length ){
        //     num++;
        //     if(json?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[num]?.card?.card?.itemCards){
        //         setMenu(menu.concat(json?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[num]?.card?.card?.itemCards));
        //         console.log(menu);
        //     }
            
        // }
        // console.log(menu);


    }

    return {
        resto,
        menu,
        carousel,
        all
    };

}

export default useRestaurantMenu;