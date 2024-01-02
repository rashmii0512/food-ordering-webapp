import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *    -logo
 *    -Nav Items
 * Body
 *    -Search
 *    -Restaurant container
 *       -Restaurant card
 * Footer
 *    -Copyright
 *    -links
 *    -adress
 *    -COntact
 */

const Header = () => {
    return (
        <div className="header">
            <img  className="logo"  src="https://t3.ftcdn.net/jpg/04/03/74/22/360_F_403742248_8DDzcFF4jw05lWqftk2yxzKRpFvpZ01Y.jpg" />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const styleCard = {
    background: "#f0f0f0",
};
// writing css  like code inside js using jsx

const CardOld = () => {
    return (
        <div className="res-card" style={styleCard}>
            <div className="res-logo">
                <img  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xrxgghtuxiltg4soxjah" />
            </div>
            <div className="res-info">
                <p>Meghana Biryani</p>
                <p>Biryani, North Indian, Asians</p>
                <p>4.4 stars</p>
                <p>38 minutes</p>
            </div>
        </div>
    )
}

const Card = (props) => {
    return (
        <div className="res-card" style={styleCard}>
            <div className="res-logo">
                <img  src={props.res_img} />
            </div>
            <div className="res-info">
                <p>{props.resName}</p>
                <p>{props.cuisine}</p>
                <p>{props.rating} rating</p>
                <p>{props.minutes} minutes</p >
            </div>
        </div>
    )
}

const Card2 = ({res_img, resName, cuisine, rating, minutes }) => {
    return (
        <div className="res-card" style={styleCard}>
            <div className="res-logo">
                <img  src={res_img} />
            </div>
            <div className="res-info">
                <p>{resName}</p>
                <p>{cuisine}</p>
                <p>{rating} rating</p>
                <p>{minutes} minutes</p >
            </div>
        </div>
    )
}


const Card3 = (props) => {
    const {resData} = props;
    // const {resName, cuisine, rating , minutes } = resData?.data;
    //then you can directly acces ,, i have not applied this below
    return (
        <div className="res-card" style={styleCard}>
            <div className="res-logo">
                <img  src={resData.res_img} />
            </div>
            <div className="res-info">
                <p>{resData.resName}</p>
                <p>{resData.cuisine}</p>
                <p>{resData.rating} rating</p>
                <p>{resData.minutes} minutes</p >
            </div>
        </div>
    )
}

const Card4 = (props) => {
    const {resData} = props;
    const {name, cuisines, avgRating , sla } = resData?.info;
    // console.log(resData?.info);
    //then you can directly acces ,, i have not applied this below
    return (
        <div className="res-card" style={styleCard}>
            <div className="res-logo">

                <img  src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId } />
            </div>
            <div className="res-info">
                <h4>{name}</h4>
                <p>{cuisines.join(", ")}</p>
                <p>{avgRating} rating</p>
                <p>{sla.deliveryTime} minutes</p >
            </div>
        </div>
    )
}


const Body = () => {
    return (
        <div className="body">
            <div className="search"></div>
            <div className="res-container">
                {/* passing a prop ( i.e propertl=y which is like argument ) 
                props passes a javascript object */}
                <CardOld/>
                <Card 
                  res_img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xrxgghtuxiltg4soxjah"
                  resName="Meghana Foods"
                  cuisine="Biryani, North Indian , Asian"
                  rating="4.4"
                  minutes="27"
                />
                <Card2 
                  res_img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4"
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
}

const resList =[
    {id:0, res_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b033728dcb0101ceb19bff0e1e1f6474",resName :"Front Street", cuisine:"Cakes, patties, cookies", rating:"4.7", minutes: "23 mins"},
    {id:1, res_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/80d3024589ed6aefeb518b810af4d4cd",resName :"Monginis", cuisine:"Cakes, patties, cookies", rating:"4.3", minutes: "26 mins"}
]

const swiggyList = [
    {
      "info": {
        "id": "24464",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "aimajvlwqnus1s3h7dy7",
        "locality": "Antop Hill Wadala",
        "areaName": "Mulund East",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Pastas",
          "Desserts"
        ],
        "avgRating": 4.5,
        "parentId": "2456",
        "avgRatingString": "4.5",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 25,
          "serviceability": "SERVICEABLE",
          "slaString": "25 mins",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-03 02:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/dominos-pizza-antop-hill-wadala-mulund-east-mumbai-24464",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "23746",
        "name": "McDonald's",
        "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
        "locality": "R Mall",
        "areaName": "Mulund West",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Beverages",
          "Cafe",
          "Desserts"
        ],
        "avgRating": 4.3,
        "parentId": "630",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 4.6,
          "serviceability": "SERVICEABLE",
          "slaString": "33 mins",
          "lastMileTravelString": "4.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-02 23:45:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/mcdonalds-r-mall-mulund-west-mumbai-23746",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "433401",
        "name": "KFC",
        "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
        "locality": "LBS Marg",
        "areaName": "Mulund",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Biryani",
          "American",
          "Snacks",
          "Fast Food"
        ],
        "avgRating": 4.1,
        "parentId": "547",
        "avgRatingString": "4.1",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 4.6,
          "serviceability": "SERVICEABLE",
          "slaString": "32 mins",
          "lastMileTravelString": "4.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-03 00:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/kfc-lbs-marg-mulund-mumbai-433401",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "9648",
        "name": "Burger King",
        "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "locality": "Korum mall",
        "areaName": "Thane West",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "avgRating": 4.2,
        "parentId": "166",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 42,
          "lastMileTravel": 5,
          "serviceability": "SERVICEABLE",
          "slaString": "42 mins",
          "lastMileTravelString": "5.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-03 02:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/burger-king-korum-mall-thane-west-mumbai-9648",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "278213",
        "name": "Theobroma",
        "cloudinaryImageId": "b033728dcb0101ceb19bff0e1e1f6474",
        "locality": "Thane",
        "areaName": "Airoli Navi Mumbai",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Bakery",
          "Desserts"
        ],
        "avgRating": 4.5,
        "parentId": "1040",
        "avgRatingString": "4.5",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 26,
          "lastMileTravel": 6.5,
          "serviceability": "SERVICEABLE",
          "slaString": "26 mins",
          "lastMileTravelString": "6.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-03 00:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "ABOVE ₹179",
          "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/theobroma-thane-airoli-navi-mumbai-mumbai-278213",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "238032",
        "name": "Subway",
        "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
        "locality": "Ns Road Junction",
        "areaName": "Mulund West",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Fast Food",
          "Salads",
          "Snacks",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "2",
        "avgRatingString": "4.3",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "36 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-03 05:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹100"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/subway-ns-road-junction-mulund-west-mumbai-238032",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "435689",
        "name": "Starbucks Coffee",
        "cloudinaryImageId": "258fe8a3577877fbfe064095ed1d9dc3",
        "locality": "Gaurangi Chambers",
        "areaName": "Panch Pakhdi",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Beverages",
          "Cafe",
          "Snacks",
          "Desserts",
          "Bakery",
          "Ice Cream"
        ],
        "avgRating": 4.5,
        "parentId": "195515",
        "avgRatingString": "4.5",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 3.9,
          "serviceability": "SERVICEABLE",
          "slaString": "33 mins",
          "lastMileTravelString": "3.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-02 23:59:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "ABOVE ₹900",
          "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/starbucks-coffee-gaurangi-chambers-panch-pakhdi-mumbai-435689",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "32928",
        "name": "Chaayos Chai+Snacks=Relax",
        "cloudinaryImageId": "cace805a6ba74137571d0f7ac92302b1",
        "locality": "Runwal Galleria",
        "areaName": "Bhandup West",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Bakery",
          "Beverages",
          "Chaat",
          "Desserts",
          "Home Food",
          "Italian",
          "Maharashtrian",
          "Snacks",
          "Street Food",
          "Sweets"
        ],
        "avgRating": 4.5,
        "parentId": "281782",
        "avgRatingString": "4.5",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 4.6,
          "serviceability": "SERVICEABLE",
          "slaString": "28 mins",
          "lastMileTravelString": "4.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-03 00:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-runwal-galleria-bhandup-west-mumbai-32928",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "122587",
        "name": "Faasos - Wraps, Rolls & Shawarma",
        "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
        "locality": "LBS Marg",
        "areaName": "Thane West",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Kebabs",
          "Fast Food",
          "Snacks",
          "American",
          "Healthy Food",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.1,
        "parentId": "21809",
        "avgRatingString": "4.1",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 34,
          "lastMileTravel": 5,
          "serviceability": "SERVICEABLE",
          "slaString": "34 mins",
          "lastMileTravelString": "5.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-02 23:59:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹110"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-lbs-marg-thane-west-mumbai-122587",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "10839",
        "name": "Pizza Hut",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "locality": "Mulund West",
        "areaName": "Mulund West",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Italian",
          "Pizzas",
          "Fast Food"
        ],
        "avgRating": 3.7,
        "parentId": "721",
        "avgRatingString": "3.7",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 37,
          "lastMileTravel": 4.6,
          "serviceability": "SERVICEABLE",
          "slaString": "37 mins",
          "lastMileTravelString": "4.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-02 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹179"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/pizza-hut-mulund-west-mumbai-10839",
        "type": "WEBLINK"
      }
    }
]
const App = () => {
    return (
        <div className="app">
            <Header />
            <Body/>
            
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>)