import React from "react";
import ReactDOM from "react-dom/client";
/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *     -RestaurantCard
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 */

const restaurants = [
    {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "167748",
          "name": "KFC",
          "uuid": "1384b6f9-8be0-4539-9d66-32f1c4dc4dde",
          "city": "2",
          "area": "Golf Course Extension",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
          "cuisines": [
            "Burgers",
            "Biryani",
            "American",
            "Snacks",
            "Fast Food"
          ],
          "tags": [],
          "costForTwo": 40000,
          "costForTwoString": "₹400 FOR TWO",
          "deliveryTime": 25,
          "minDeliveryTime": 25,
          "maxDeliveryTime": 25,
          "slaString": "25 MINS",
          "lastMileTravel": 2.200000047683716,
          "slugs": {
            "restaurant": "kfc-m3m-urbana-golf-course-golf-course-ext",
            "city": "gurgaon"
          },
          "cityState": "2",
          "address": "KFC ResturantsSHOP NO. G -11,12,14-15, M3M URBANA GOLF COURSE EXTENSION ROAD SECTOR -67 GURGAON, HARYANA",
          "locality": "M3M Urbana",
          "parentId": 547,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [],
          "aggregatedDiscountInfo": {
            "header": "20% off",
            "shortDescriptionList": [
              {
                "meta": "20% off | Use SWIGGYIT",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "20% off up to ₹50 on select items | Use code SWIGGYIT",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "20% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use SWIGGYIT",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "20% off up to ₹50 on select items | Use code SWIGGYIT",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 3500,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 3500,
            "message": "",
            "title": "Delivery Charge",
            "amount": "3500",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=6536480~p=4~eid=00000187-c255-65e2-0838-2761000c040f",
          "badges": {
            "imageBased": [],
            "textBased": [],
            "textExtendedBadges": []
          },
          "lastMileTravelString": "2.2 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "167748",
            "deliveryTime": 25,
            "minDeliveryTime": 25,
            "maxDeliveryTime": 25,
            "lastMileTravel": 2.200000047683716,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "4.1",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "389894",
          "name": "Burger King",
          "uuid": "6237ee62-e022-4ac3-a9fd-e6e383ccca42",
          "city": "2",
          "area": "sohna road",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "28fb13049b4e55297bb3f703cde63c35",
          "cuisines": [
            "Burgers",
            "American"
          ],
          "tags": [],
          "costForTwo": 35000,
          "costForTwoString": "₹350 FOR TWO",
          "deliveryTime": 25,
          "minDeliveryTime": 25,
          "maxDeliveryTime": 25,
          "slaString": "25 MINS",
          "lastMileTravel": 1.100000023841858,
          "slugs": {
            "restaurant": "burger-king-bharti-worldmark-golf-course-ext",
            "city": "gurgaon"
          },
          "cityState": "2",
          "address": "BURGER KING INDIA LTD. UNIT NO. MINI ANCHOR 2, 1ST FLOOR FOOD COURT COUNTER WORLDMARK 3, GURGAON VILLAGE MAIDAWAS SECTOR 65, 122001",
          "locality": "Worldmark",
          "parentId": 166,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [],
          "aggregatedDiscountInfo": {
            "header": "Get every item under 129",
            "shortDescriptionList": [
              {
                "meta": "Get every item under 129",
                "discountType": "FinalPrice",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "Get every item under 129",
                "discountType": "FinalPrice",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "",
            "shortDescriptionList": [
              {
                "meta": "",
                "discountType": "FinalPrice",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "Get every item under 129",
                "discountType": "FinalPrice",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 3500,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 3500,
            "message": "",
            "title": "Delivery Charge",
            "amount": "3500",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [],
            "textBased": [],
            "textExtendedBadges": []
          },
          "lastMileTravelString": "1.1 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "389894",
            "deliveryTime": 25,
            "minDeliveryTime": 25,
            "maxDeliveryTime": 25,
            "lastMileTravel": 1.100000023841858,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.3",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "46790",
          "name": "Om Sweets & Snacks (M3M Cosmopolitan)",
          "uuid": "875b74e8-470e-4929-8820-65bbbe7af99a",
          "city": "2",
          "area": "Sohna Road",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "tbyietxfk9eob3awlcac",
          "cuisines": [
            "Sweets",
            "North Indian",
            "South Indian",
            "Chinese",
            "Snacks",
            "Desserts",
            "Bakery"
          ],
          "tags": [],
          "costForTwo": 40000,
          "costForTwoString": "₹400 FOR TWO",
          "deliveryTime": 30,
          "minDeliveryTime": 30,
          "maxDeliveryTime": 30,
          "slaString": "30 MINS",
          "lastMileTravel": 2.700000047683716,
          "slugs": {
            "restaurant": "om-sweets-snacks-m3m-mall-sohna-road",
            "city": "gurgaon"
          },
          "cityState": "2",
          "address": "Ground floor M3M Cosmopolitan Mall, Sector 66 golf course extension, Road Gurugram.",
          "locality": "Cosmopolitan Mall",
          "parentId": 676,
          "unserviceable": false,
          "veg": true,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [],
          "chain": [],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 3500,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 3500,
            "message": "",
            "title": "Delivery Charge",
            "amount": "3500",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [],
            "textBased": [],
            "textExtendedBadges": []
          },
          "lastMileTravelString": "2.7 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "46790",
            "deliveryTime": 30,
            "minDeliveryTime": 30,
            "maxDeliveryTime": 30,
            "lastMileTravel": 2.700000047683716,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.4",
          "totalRatings": 10000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "254107",
          "name": "McDonald's",
          "uuid": "870c4fbf-4374-488b-8be0-945b2e581447",
          "city": "2",
          "area": "Sector 49",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "1293a58ab5610f4c730c3d8cb6ac1b65",
          "cuisines": [
            "American"
          ],
          "tags": [],
          "costForTwo": 40000,
          "costForTwoString": "₹400 FOR TWO",
          "deliveryTime": 27,
          "minDeliveryTime": 27,
          "maxDeliveryTime": 27,
          "slaString": "27 MINS",
          "lastMileTravel": 3.799999952316284,
          "slugs": {
            "restaurant": "mcdonalds-hr-gurgaon-eros-sohna-road",
            "city": "gurgaon"
          },
          "cityState": "2",
          "address": "HR Gurugram Eros, Eros City Square. Rosewood City. Sector- 49 & 50, Village Ghasola. Badshapur. Sohna Road. Gurugram-122001",
          "locality": "Eros City Square Mall",
          "parentId": 630,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [],
          "chain": [],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 4100,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 4100,
            "message": "",
            "title": "Delivery Charge",
            "amount": "4100",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [],
            "textBased": [],
            "textExtendedBadges": []
          },
          "lastMileTravelString": "3.7 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "254107",
            "deliveryTime": 27,
            "minDeliveryTime": 27,
            "maxDeliveryTime": 27,
            "lastMileTravel": 3.799999952316284,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.2",
          "totalRatings": 10000,
          "new": false
        },
        "subtype": "basic"
      }
]

const restaurant = {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "167748",
      "name": "KFC",
      "uuid": "1384b6f9-8be0-4539-9d66-32f1c4dc4dde",
      "city": "2",
      "area": "Golf Course Extension",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
      "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
      ],
      "tags": [],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 25,
      "minDeliveryTime": 25,
      "maxDeliveryTime": 25,
      "slaString": "25 MINS",
      "lastMileTravel": 2.200000047683716,
      "slugs": {
        "restaurant": "kfc-m3m-urbana-golf-course-golf-course-ext",
        "city": "gurgaon"
      },
      "cityState": "2",
      "address": "KFC ResturantsSHOP NO. G -11,12,14-15, M3M URBANA GOLF COURSE EXTENSION ROAD SECTOR -67 GURGAON, HARYANA",
      "locality": "M3M Urbana",
      "parentId": 547,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "aggregatedDiscountInfo": {
        "header": "20% off",
        "shortDescriptionList": [
          {
            "meta": "20% off | Use SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "20% off up to ₹50 on select items | Use code SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "20% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "20% off up to ₹50 on select items | Use code SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3500,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3500",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6536480~p=4~eid=00000187-c255-65e2-0838-2761000c040f",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "2.2 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "167748",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "lastMileTravel": 2.200000047683716,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.1",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  }

const Header = () =>{
    return(
        <div className="header">
            <img className="logo" src="https://png.pngtree.com/png-vector/20220727/ourmid/pngtree-burger-logo-vector-design-free-png-clipart-png-image_6081288.png"></img>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>

    )

}
const RestaurantCard = (props) =>{
    const {name,cuisines,avgRating,deliveryTime,costForTwo,cloudinaryImageId} = props?.restaurant.data
    return(
            <div className="restaurant-card">
                <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId}></img>
                <h3>{name}</h3>
                <h5>{cuisines.join(', ')}</h5>
                <h5>{avgRating} Stars</h5>
                <h5>{deliveryTime} Minutes</h5>
                <h5>₹{costForTwo/100} For Two</h5>
            </div>
    )
}

const Body = () =>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="restaurant-container">
                {
                    restaurants.map(restaurant=><RestaurantCard key={restaurant.data.id} restaurant={restaurant}/> )
                }
                
            </div>
        </div>
    )
}

const AppLayout = () =>{
    return(
        <div>
            <Header/>
            <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeader)
root.render(<AppLayout />)
