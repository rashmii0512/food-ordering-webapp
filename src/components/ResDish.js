import {DISH_URL} from "../utils/constants"

const ResDish = (props) => {
    const items = props.props;
    // console.log(items?.info);
    if(!items){
        return(<div></div>)
    }
    // console.log(props);
    const  {imageId, name, category, description, itemAttribute, offerTags , price, ratings } =  items?.info;
    // console.log(offerTags); offertag not present to all thats why error
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
                        className="w-[110px] border-none bg-none inline-block">
                        <img className="h-[100px] w-full object-cover rounded-md " src={DISH_URL + imageId } alt="no img"/>
                        <span className="py-2 px-6 rounded-md border border-solid border-gray-500 bg-blue-200 relative shadow-md">ADD</span>
                    </button>
                </div> 
            </div>
            <hr className="my-2"/>
        </div>
    )
    
}

export default ResDish;