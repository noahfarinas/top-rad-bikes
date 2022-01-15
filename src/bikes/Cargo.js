import React from "react";

export default function App() {
  let currentCategory = null;


  const BIKEDATA = [
    {
      category: "Cargo",
      bikeModel: "runner 2",
      motor: "750w motor",
      price: "$1,499",
      image:
        "https://cdn.shopify.com/s/files/1/0799/9645/products/US-RadRunner2-Black-Right-View-2021Dec16_800x.jpg?v=1640105462",
      imageAlt: "runner 2 image",
      weight: "65 lb",
      payload: "300 lb",
    },

    {
      category: "Cargo",
      bikeModel: "runner plus",
      motor: "750w motor",
      price: "$1,899",
      image:
        "https://cdn.shopify.com/s/files/1/0799/9645/products/RadRunner_Plus_Right_View_3000_1_800x.jpg?v=1613000410",
      imageAlt: "runner plus image",
      weight: "74.3 lb",
      payload: "300 lb",
    },

    {
      category: "Cargo",
      bikeModel: "wagon",
      motor: "750w motor",
      price: "$1,999",
      image:
        "https://cdn.shopify.com/s/files/1/0799/9645/products/RadWagon4_Orange_Right_View_2400_900x.jpg?v=1612311493",
      imageAlt: "wagon image",
      weight: "77 lb",
      payload: "300 lb",
    },
    {
      category: "Budget",
      bikeModel: "mission",
      motor: "500w motor",
      price: "$1,199",
      image:
        "https://cdn.shopify.com/s/files/1/0799/9645/products/RadMission_White_Right_View_2400_900x.jpg?v=1638115803",
      imageAlt: "mission image",
      weight: "48 lb",
      payload: "275 lb",
    },
    {
      category: "Budget",
      bikeModel: "runner1",
      motor: "750w motor",
      price: "$1,299",
      image:
        "https://d2yn9m4p3q9iyv.cloudfront.net/radpowerbikes/2021/radrunner-1/thumbs/1000/e70d1.webp",
      imageAlt: "runner1 image",
      weight: "65 lb",
      payload: "300 lb",
    },
    {
      category: "Commuter",
      bikeModel: "city5",
      motor: "750w motor",
      price: "$1,999",
      image:
        "https://cdn.shopify.com/s/files/1/0799/9645/products/City5STBlack_1_800x.jpg?v=1631737276",
      imageAlt: "city5 image",
      weight: "65 lb",
      payload: "300 lb",
    },
    {
    category: "Commuter",
    bikeModel: "mini step-thru",
    motor: "750w motor",
    price: "$1,499",
    image:
      "https://cdn.shopify.com/s/files/1/0799/9645/products/RadMini_ST2_Right_View_2400_900x.jpg?v=1612312638",
    imageAlt: "minist image",
    weight: "71 lb",
    payload: "275 lb",
  },
  {
    category: "Commuter",
    bikeModel: "runner2",
    motor: "750w motor",
    price: "$1,499",
    image:
      "https://cdn.shopify.com/s/files/1/0799/9645/products/US-RadRunner2-Black-Right-View-2021Dec16_800x.jpg?v=1640105462",
    imageAlt: "runner2 image",
    weight: "65 lb",
    payload: "300 lb",
  },
  {
    category: "all-terrain",
    bikeModel: "rover6 plus",
    motor: "750w motor",
    price: "$1,999",
    image:
      "https://cdn.shopify.com/s/files/1/0799/9645/products/R6STG_1_800x.jpg?v=1626451948",
    imageAlt: "rover6 image",
    weight: "75 lb",
    payload: "275 lb",
  },
  {
    category: "all-terrain",
    bikeModel: "runner2",
    motor: "750w motor",
    price: "$1,499",
    image:
      "https://cdn.shopify.com/s/files/1/0799/9645/products/US-RadRunner2-Black-Right-View-2021Dec16_800x.jpg?v=1640105462",
    imageAlt: "runner2 image",
    weight: "65 lb",
    payload: "300 lb",
  },
  {
    category: "all-terrain",
    bikeModel: "runner plus",
    motor: "750w motor",
    price: "$1,899",
    image:
      "https://cdn.shopify.com/s/files/1/0799/9645/products/RadRunner_Plus_Right_View_3000_1_800x.jpg?v=1613000410",
    imageAlt: "runnerplus image",
    weight: "75 lb",
    payload: "300 lb",
  },

  ];

  let BIKES = BIKEDATA.map((bike) => {
    let bikes = [];
    if (currentCategory !== bike.category) {
      currentCategory = bike.category;
      bikes.push(<h1>{bike.category}</h1>);
    }


    bikes.push(
      <>
        <div className="bikelist">
          <img src={bike.image} alt={bike.imageAlt} />
          <h2>{bike.bikeModel}</h2>
          <h3 className="price">{bike.price}</h3>
          <ul className="pricing-features">
            <li className="feature">
              <b>Motor:</b> {bike.motor}
            </li>
            <li className="feature">{bike.payload} payload capacity</li>
            <li className="feature">{bike.weight}</li>
          </ul>
        </div>
      </>
    );
    return bikes;
  });

  return (
    <div className="App">
      <h3>{BIKES}</h3>
    </div>
  );
}