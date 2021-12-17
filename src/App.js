function App() {
  return (
    <div className="App">
      <h1>Top Rad Power Bikes</h1>
      <div className="bikes">
          <img src="./images/runnerplus.jpeg"/>
        <h2>Rad Runner Plus</h2>
        <h3>4.5 stars <a className="reviews" href="https://www.google.com/search?q=google+rad+runner+plus+reviewsz&oq=google+rad+runner+plus+reviewsz&aqs=chrome..69i57j69i64.4319j0j7&sourceid=chrome&ie=UTF-8">909 reviews</a> </h3>
        <h3>$1,799</h3>
          <h4>Top Features</h4>
          <ul>
            <li> <b>Motor:</b> 750W Geared Hub</li>
            <li>20" x 3.3" tires</li>
            <li>74.3 lb</li>
          </ul>
      </div>

      <div className="bikes">
            <img src="./images/city5.jpeg" />
            <h2>Rad City 5 Plus</h2>
            <h3>$1,799</h3>
            <h4>Top Features</h4>
            <ul className="pricing-features">
                <li className="feature"><b>Motor:</b> 750W Geared Hub</li>
                <li class="feature">Hydraulic Disc Brakes</li>
                <li class="feature">64 lb</li>
            </ul>
      </div>

    

      </div>
  );                           
}

export default App
