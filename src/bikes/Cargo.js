import React from "react";


const cargo = [
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
];

    </div>
function Cargo() {
  const UTILITY = cargo.map(_item => (
    
    <div className="bikelist">   
   
        <img src={_item.image} alt={_item.imageAlt} />
        <h2>{_item.bikeModel}</h2>
        <h3 className="price">{_item.price}</h3>
        <ul className="pricing-features">
          <li className="feature">
            <b>Motor:</b> {_item.motor}
          </li>
          <li className="feature">{_item.payload} payload capacity</li>
          <li className="feature">{_item.weight}</li>
        </ul>
    </div>
  ));
  return <>{UTILITY}</>;
}

export default Cargo;
