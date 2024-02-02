import {DISH_URL} from "../utils/constants"
import {useDispatch} from "react-redux";
import {addItem} from "../redux/cartSlice";
import {useState} from "react";

const ResDish = (props) => {
    const [num, setNum] = useState(0);
    const items = props.props;
    // console.log("resdish");
    // console.log(props);
    // console.log(items);
    if(!items){
        console.log("err");
        return(<div></div>)
    }
    // console.log(props);
    const  {imageId, name, category, description, itemAttribute, offerTags , price, ratings } =  items?.info;
    // console.log(offerTags); offertag not present to all thats why error


    const dispatch = useDispatch();

    handleAddDish = ()=>{
        // if(num == 0){
            dispatch(addItem({props: props.props, number:1}));
        // }
        
        // console.log(items?.info?.id);
    }


    return (

        <div className="res-dish-container">
            {/* {console.log(items)} */}
            <div className="flex justify-between items-center min-h-[150px]">
                <div>
                    <p className=" text-lg font-['Proxima Nova', Ariel] ">{name}</p>
                    <p >{itemAttribute.vegClassifier.toLowerCase()}</p>
                    <div>
                    {/* <p>{price/100} Rs</p> */}
                        <p>{price? price/ 100 : items?.info.defaultPrice/100} Rs</p>
                    </div>
                    

                    <p className="text-sm text-gray-700">{description}</p>
                </div>
                <div className="for-img">
                    <button 
                        className="w-[110px] h-[90px] border-none bg-none flex flex-col align-middle justify-center"
                        onClick = {()=>{
                            
                            handleAddDish();
                            setNum(num+1);
                            
                        }}
                    >
                        <img className="h-[100px] w-full object-cover rounded-md  align-top" src={DISH_URL + imageId } alt="no img"/>
                        <div className="py-2 w-4/5 m-[10%] rounded-md border border-solid border-gray-500 bg-blue-200 shadow-md align-bottom relative top-[-35%] text-center">{num == 0 ? "ADD" : num}</div>
                    </button>
                </div> 
            </div>
            <hr className="my-2"/>
        </div>
    )
    
}

export default ResDish;