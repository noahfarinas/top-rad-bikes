import City5 from "./bikes/City5";
import Wagon from "./bikes/Wagon";
import RunnerPlus from "./bikes/RunnerPlus";
import Runner2 from "./bikes/Runner2";
import Rover6 from "./bikes/Rover6";
import Mission from "./bikes/Mission";
import Mini4 from "./bikes/Mini4.";
import Minist from "./bikes/Minist";
import Runner1 from "./bikes/Runner1";

function App() {
  return (
    <div className="App">
      <div className="page">      {/* //cargo utility bikes */}

        <div className="bikes">
          <Runner2 />
        </div>
        <div className="bikes">
          <RunnerPlus />
        </div>
        <div className="bikes">
          <Wagon />
        </div>
      </div>

      <div className="page">        {/* //city commuters */}
        <div className="bikes">
          <RunnerPlus />
        </div>
        <div className="bikes">
          <City5 />
        </div>
        <div className="bikes">
          <Mission />
        </div>
      </div>

      <div className="page">        {/* //Harsh Terrain */}
        <div className="bikes">
          <Rover6 />
        </div>
        <div className="bikes">
          <Runner2 />
        </div>
        <div className="bikes">
          <RunnerPlus />
        </div>
      </div>

      <div className="page">        {/* //Budget Friendly */}
        <div className="bikes">
          <Mini4 />
        </div>
        <div className="bikes">
          <Runner1 />
        </div>
        <div className="bikes">
          <Minist />
        </div>
      </div>


    </div>
  );
}

export default App;
