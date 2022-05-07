import BikeView from "./bikes/BikeView";

const BIKEDATA = [
  {
    category: "Cargo",
    bikeModel: "runner 2",
    motor: "750w motor",
    price: "$1,499",
    image:
      "https://cdn.shopify.com/s/files/1/0799/9645/products/US-RadRunner2-Black-Right-View_3919856d-cdf6-4cfe-af7c-54877005d5da_900x.jpg?v=1643842909",
    imageAlt: "runner 2 image",
    weight: "65 lb",
    payload: "300 lb"
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
    payload: "300 lb"
  },

  {
    category: "Cargo",
    bikeModel: "wagon",
    motor: "750w motor",
    price: "$1,999",
    image: "https://cdn.shopify.com/s/files/1/0799/9645/products/WagonWhite_side1to1_900x.png?v=1651092141",
    imageAlt: "wagon image",
    weight: "77 lb",
    payload: "300 lb"
  },
  {
    category: "Budget",
    bikeModel: "mission",
    motor: "500w motor",
    price: "$1,199",
    image:
      "https://cdn.shopify.com/s/files/1/0799/9645/products/RadMission_Grey_Right_View_2400_1200x_b1a46d13-f8fd-49e7-8f03-7373c006cace_900x.jpg?v=1644252641",
    imageAlt: "mission image",
    weight: "48 lb",
    payload: "275 lb"
  },
  {
    category: "Budget",
    bikeModel: "expand 5",
    motor: "750w motor",
    price: "$1,299",
    image:
      "https://cdn.shopify.com/s/files/1/0799/9645/products/ExpandWhite_1_700x.jpg?v=1646335557",
    imageAlt: "runner1 image",
    weight: "62.5 lb",
    payload: "275 lb"
  },
  {
    category: "Budget",
    bikeModel: "mini step-thru",
    motor: "750w motor",
    price: "$1,499",
    image:
      "https://cdn.shopify.com/s/files/1/0799/9645/products/RadMini_ST2_Right_View_2400_900x.jpg?v=1612312638",
    imageAlt: "minist image",
    weight: "71 lb",
    payload: "275 lb"
  },
  {
    category: "Commuter",
    bikeModel: "city 5 Plus",
    motor: "750w motor",
    price: "$1,999",
    image:
      "https://cdn.shopify.com/s/files/1/0799/9645/products/City5STBlack_1_1_900x.jpg?v=1643843866",
    imageAlt: "city5 image",
    weight: "65 lb",
    payload: "300 lb"
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
    payload: "275 lb"
  },
  {
    category: "Commuter",
    bikeModel: "runner 2",
    motor: "750w motor",
    price: "$1,499",
    image:
      "https://cdn.shopify.com/s/files/1/0799/9645/products/US-RadRunner2-Green-Right-View_218bde8e-1179-442d-972d-933283821cf7_900x.jpg?v=1643845203",
    imageAlt: "runner2 image",
    weight: "65 lb",
    payload: "300 lb"
  },
  {
    category: "all-terrain",
    bikeModel: "rover 6 plus",
    motor: "750w motor",
    price: "$1,999",
    image:
      "https://cdn.shopify.com/s/files/1/0799/9645/products/R6HS_1_e9af54ce-2dd6-40db-9856-f36e019444df_900x.jpg?v=1650558103",
    imageAlt: "rover6 image",
    weight: "75 lb",
    payload: "275 lb"
  },
  {
    category: "all-terrain",
    bikeModel: "runner 2",
    motor: "750w motor",
    price: "$1,499",
    image:
      "https://cdn.shopify.com/s/files/1/0799/9645/products/US-RadRunner2-Green-Right-View_218bde8e-1179-442d-972d-933283821cf7_900x.jpg?v=1643845203",
    imageAlt: "runner2 image",
    weight: "65 lb",
    payload: "300 lb"
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
    payload: "300 lb"
  },
  
];

function App() {
  return (
    <div className="App">
      <BikeView data={BIKEDATA} />
      
    </div>
  );
}

export default App;