import React, { useEffect, useState } from 'react';
import Shimmer from "./Shimmer";
// import {DOWN_ARROW} from "../utils/constants";
import ItemList from "./ItemList";

const Category = ({category, veg, show, setShowIndex})=>{
    const DOWN_ARROW = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAaVBMVEX///8AAAD09PT4+Pipqan5+fmmpqZjY2Pb29taWlrY2NgaGhry8vKenp7S0tLV1dUjIyMVFRVdXV2cnJyvr6/p6elXV1fDw8MoKCgkJCRoaGgMDAy8vLyIiIhvb29SUlI3NzcvLy97e3t82G8BAAACcklEQVR4nO3b6VLiQBSGYXqGEdxQBxC3AfX+L3JqQLbkSzpLn3bS/T6/LY95K50TqmQ0AgAAAAAAAAAAAAAAAAAAAAAAAAAAwMFssZjFmrV8G78tYw2zdOG2LmLMWj5uZ22GH27ivvy2nzXbz3LR7m4jfw5X4h6tZx2rOXdjPczU8uRK3MZ21mk1t7adZWzuonU7q+ac5Shzk/NrMTynhWpuajfK3sZF6lasNuylsC5ezaXNnFI1N+h3kEXpcky6lasN+9k2Kl+PQTdR7Tb8lJhW5SsK/nwT1d5Dz4itfExDd7srT3j6FXbEN7DulmY12S3g801V+xnu138j0S3Y53rxXEukmmU3VS2FE7ozNuomTuh9OtWsuqVeTXbrvRfSr2bxHpLqm8e50O8hV6JaKjv0VNh9mu77WlHIvSCqPadZTXabdPtNahukWi3c/ZZXtVDdxDa4TrlamG6iWtL32j/9u4lqyW6Do757Ic9qfbvleEJ3+nTLt9rhf7c6dMtvh57q2i3val275V5NdvO+h+T8XNtrf79NRbUfcf7Y/0jbblTbaddNndAcq8luL1U/q7ZBntXa3G/ihD7ktg2Omnaj2rlm3US1zN7Xipp0U9Vyfa7t+btRTfHtU6pp9d2oVuW2ppvaoVTbqe4mqr1Sba+qG/daPd2N55qP6Lammp/oJqoN+9u1Fhp0o5rg7cY2kDzdePOoMKdaJzX3Gye0RmW3B7ZBnYpuVPOQ3ajmJfYC1RoodXulWhPFbuzQZuZU62TOCe3ksE/59N7K6mNb7TO9bzoamy7GKx5rAAAAAAAAAAAAAAAAAAAAAAAAAAAAff0FCtIXXDcvDXQAAAAASUVORK5CYII=";
    const [arrow, setArrow] = useState("");
    
    // const [show, setShow] = useState(false);
    const {title, itemCards}  = category?.card?.card;
    // console.log(itemCards[1]?.card);
    const [items, setItems] = useState([[]]);
    
    useEffect(()=>{
        if(itemCards){
            setItems(itemCards);
        }
    }, [itemCards] )

    useEffect(()=>{
        if(veg == "false"){
            setItems(itemCards);
        }else{
            const newList = itemCards.filter((dish)=>{
                return dish.card?.info?.itemAttribute?.vegClassifier == "VEG";
            })
            setItems(newList);
        }
    }, [veg])

    const handleClick = () => {
        setShowIndex();
    }

    useEffect(()=>{
        if(show){
            setArrow("rotate-180");
        }else{
            setArrow("")
        }
    }, [show])

    

    return  items.length === 0
    ? (
        <Shimmer/>
    ) : (
        <div>
            {/*Accordian header */}
            <div className="flex justify-between p-2 cursor-pointer "
                 onClick = {()=>{
                     handleClick();
                 }}
            >
                <p className="font-bold  text-xl m-3">{title}</p>
                {/* <p className="icon-downArrow text-black">▼</p> */}
                <img className={"h-6 w-9 " + arrow} src={DOWN_ARROW}></img>
            </div>
            
            {/*Accordian body aka dishes */}
            {   
                show && <ItemList items={items}/>
            }

            <hr className="border-none p-1 bg-gray-200"/>
        </div>
    )
};
export default Category;