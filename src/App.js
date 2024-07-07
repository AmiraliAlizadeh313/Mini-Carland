function App() {
  return (
    <>
    <div className="mini-carland">
      <CarsList></CarsList>
      <FormAddCar></FormAddCar>
    </div>
    </>
  );
}

function FormAddCar(){
  return(
    <>
      <form className="form-add-car">
        <div className="input-model">
          <label>Car Model</label>
          <input type="text" value=''></input>
        </div>
        <div className="input-company">
          <label >Car Company</label>
          <input type="text" value=''></input>
        </div>
        <div className="input-color">
          <label>Car color</label>
          <select>
            <option>White</option>
            <option>Black</option>
            <option>Gray</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Navy blue</option>
            <option>Slime green</option>
          </select>
        </div>

      </form>

    </>

  )
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
        
        </ul>
    </>
  );
}

export default App;
