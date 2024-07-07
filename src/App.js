function App() {
  return (
    <>
      <CarsList></CarsList>
    </>
  );
}

function CarsList() {
  return (
    <>
      <ul className="cars-list">
        <li className="cars-item">
          <div class="item-image">
            <img src={require("./images/Toyotaimage.jpg")} alt="toyota"></img>
          </div>
          <div className="item-content">
            <div className="item-title">
              <h2 className="item-model">Landcruiser </h2>
              <span className="item-company"> Toyota</span>
            </div>

            <div class="item-marks">
              <span>Price $1000000</span>
              <span className="item-madein">Made in 2023</span>
              <span className="item-color">Black</span>
            </div>
          </div>
        </li>
        <li className="cars-item">
          <div class="item-image">
            <img src={require("./images/Toyotaimage.jpg")} alt="toyota"></img>
          </div>
          <div className="item-content">
            <div className="item-title">
              <h2 className="item-model">Landcruiser </h2>
              <span className="item-company"> Toyota</span>
            </div>

            <div class="item-marks">
              <span>Price $1000000</span>
              <span className="item-madein">Made in 2023</span>
              <span className="item-color">Black</span>
            </div>
          </div>
        </li>
        <li className="cars-item">
          <div class="item-image">
            <img src={require("./images/Toyotaimage.jpg")} alt="toyota"></img>
          </div>
          <div className="item-content">
            <div className="item-title">
              <h2 className="item-model">Landcruiser </h2>
              <span className="item-company"> Toyota</span>
            </div>

            <div class="item-marks">
              <span>Price $1000000</span>
              <span className="item-madein">Made in 2023</span>
              <span className="item-color">Black</span>
            </div>
          </div>
        </li>
        <li className="cars-item">
          <div class="item-image">
            <img src={require("./images/Toyotaimage.jpg")} alt="toyota"></img>
          </div>
          <div className="item-content">
            <div className="item-title">
              <h2 className="item-model">Landcruiser </h2>
              <span className="item-company"> Toyota</span>
            </div>

            <div class="item-marks">
              <span>Price $1000000</span>
              <span className="item-madein">Made in 2023</span>
              <span className="item-color">Black</span>
            </div>
          </div>
        </li>
        <li className="cars-item">
          <div class="item-image">
            <img src={require("./images/Toyotaimage.jpg")} alt="toyota"></img>
          </div>
          <div className="item-content">
            <div className="item-title">
              <h2 className="item-model">Landcruiser </h2>
              <span className="item-company"> Toyota</span>
            </div>

            <div class="item-marks">
              <span>Price $1000000</span>
              <span className="item-madein">Made in 2023</span>
              <span className="item-color">Black</span>
            </div>
          </div>
        </li>
        <li className="cars-item">
          <div class="item-image">
            <img src={require("./images/Toyotaimage.jpg")} alt="toyota"></img>
          </div>
          <div className="item-content">
            <div className="item-title">
              <h2 className="item-model">Landcruiser </h2>
              <span className="item-company"> Toyota</span>
            </div>

            <div class="item-marks">
              <span>Price $1000000</span>
              <span className="item-madein">Made in 2023</span>
              <span className="item-color">Black</span>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}

export default App;
