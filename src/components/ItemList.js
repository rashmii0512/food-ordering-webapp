import ResDish from "./ResDish";

const ItemList = ({items}) => {
    if(!items){
        return <div></div>
    }
    return(
        <div>
            
            {
                items.map((dish)=>(
                    <div key={dish?.card?.info.id} >
                        {/* {console.log(dish?.card?.info)} */}
                        <ResDish  props={dish?.card} />
                        {/* {dish.card?.card?.title} */}
                        {/* <Category category={c} /> */}
        
                    </div>
                ))
            }
        
        </div>
    )
};

export default ItemList;