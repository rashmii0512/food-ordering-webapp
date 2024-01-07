import {DISH_URL} from "../utils/constants"

const ResDish = (props) => {
    const items = props.props;
    // console.log(items?.info);
    
    // console.log(props);
    const  {imageId, name, category, description, itemAttribute, offerTags , price, ratings } =  items?.info;
    // console.log(offerTags); offertag not present to all thats why error
    return (
        <div className="res-dish-container">
            <div className="res-dish">
                <div>
                    <p className="dish-name">{name}</p>
                    <p>{itemAttribute.vegClassifier.toLowerCase()}</p>
                    <div>
                        <p>{price / 100} Rs</p>
                    </div>
                    

                    <p className="desc">{description}</p>
                </div>
                <div className="for-img">
                    <button>
                        <img src={DISH_URL + imageId }/>
                        <span>ADD</span>
                    </button>
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default ResDish;