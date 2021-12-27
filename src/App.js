import City5 from "./bikes/City5";
import Wagon from "./bikes/Wagon";
import RunnerPlus from "./bikes/RunnerPlus";

function App() {
  return (
    

    <div className="App">
      <div className="bikes">
      {/* <div className="bikes">
        <img src="https://cdn.shopify.com/s/files/1/0799/9645/products/RadRunner_Plus_Right_View_3000_1_800x.jpg?v=1613000410" alt="runnerpluspicture
        " />
        <h2>Rad Runner Plus</h2>
        <h3 className="price">$1,799</h3>
        <ul className="pricing-features">
          <li className="feature">
            {" "}
            <b>Motor:</b> 750W Geared Hub
          </li>
          <li className="feature">20" x 3.3" tires</li>
          <li className="feature">74.3 lb</li>
        </ul>
      </div> */}
      <RunnerPlus />
      </div>

      <div className="bikes">
        {/* <img src="https://cdn.shopify.com/s/files/1/0799/9645/products/City5STBlack_1_800x.jpg?v=1631737276" /> // old code before separate component 
        <h2>Rad City 5 Plus Step-Thru</h2>
        <h3 className="price">$1,799</h3>
        <ul className="pricing-features">
          <li className="feature">
            <b>Motor:</b> 750W Geared Hub
          </li>
          <li className="feature">Hydraulic Disc Brakes</li>
          <li className="feature">64 lb</li>
        </ul> */}

        <City5 />
      </div>

      <div className="bikes">
        {/* <img src="https://cdn.shopify.com/s/files/1/0799/9645/products/RadWagon4_Orange_Right_View_2400_900x.jpg?v=1612311493" alt="wagonphoto"/>
        <h2>Rad Wagon 4</h2>
        <h3 className="price">$1,899</h3>
        <ul className="pricing-features">
          <li className="feature">
            <b>Motor:</b> 750W Geared Hub
          </li>
          <li className="feature">350 lb payload capacity</li>
          <li className="feature">77 lb</li>
        </ul> */}
        <Wagon />
      </div>
    </div>
  );
}

export default App;
