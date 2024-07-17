const Cars = [
  {
    id: 118836,
    model: "Maybach GLS 600",
    company: "Mercedes Benz",
    madein: 2022,
    image: "https://eghtesaad24.ir/files/fa/news/1402/10/27/588457_459.png",
    color: "Black",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available",
  },
  {
    id: 933372,
    model: "Landcruiser",
    company: "Toyota",
    madein: 2023,
    image:
      "https://tiktarh.com/wp-content/uploads/2021/12/Shcar1001889www.tiktarh.com_.jpg",
    color: "White",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available",
  },
  {
    id: 499476,
    model: "2 Series Coupe",
    company: "BMW",
    madein: 2020,
    image: "https://i.pravatar.cc/48?u=499476",
    color: "Gray",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available",
  },
];

function App() {
  return (
    <>
      <div className="mini-carland">
        <CarsList></CarsList>
        <CarCard></CarCard>
        {/* <FormAddCar></FormAddCar> */}
      </div>
    </>
  );
}

function CarCard() {
  return (
    <>
      <div className="card-wrapper">
        <div className="car-card">
          <div className="card-image">
            <img alt="image" src={require("./images/Toyotaimage.jpg")}></img>
          </div>
          <div className="card-content">
            <div className="card-title">
              <h2 className="card-model">Landcruiser</h2>
              <span>Toyota</span>
            </div>
            <ul className="card-marks">
              <li>
                <span>Price $1000000</span>
              </li>
              <li>
                <span>Made in 2023</span>
              </li>
              <li>
                <span>Color Black</span>
              </li>
            </ul>
            <div className="card-description">
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before the final copy is available
              </p>
            </div>
          </div>
        </div>
        <div className="btn-phone-wrapper">
          {" "}
          <button>
            {" "}
            <div class="btn-content">
              <img
                className="phone-icon"
                src={require("./images/icons8-phone-30.png")}
              ></img>
              <text>Call to seller</text>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

function FormAddCar() {
  return (
    <>
      <form className="form-add-car">
        <div className="input-model">
          <label>Car Model</label>
          <input type="text"></input>
        </div>
        <div className="input-company">
          <label>Car Company</label>
          <input type="text"></input>
        </div>
        <div className="input-color">
          <label>Car Color</label>
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
        <div className="input-price">
          <label>Car Price</label>
          <input type="number"></input>
        </div>
        <div className="input-madein">
          <label>Car Made in</label>
          <input type="number"></input>
        </div>
        <div className="input-description">
          <label>Car Information</label>
          <textarea type="text"></textarea>
        </div>

        <div className="form-buttons">
          <Button>Cancel</Button>
          <Button>Submit</Button>
        </div>
      </form>
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
      </ul>
    </>
  );
}

function Button({ children }) {
  return <button className="btn">{children}</button>;
}

export default App;
