import { useRef, useState } from "react";
import {
  TransformComponent,
  TransformWrapper,
  useControls,
} from "react-zoom-pan-pinch";

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
  const [isImageZoom, setIsImageZoom] = useState(false);
  const [isCarCard, setIsCarCard] = useState(false);
  const [isShowSellerInfo, setIsShowSellerInfo] = useState(false);
  const [isShowForm,setIsShowForm] = useState(false)

  return (
    <>
      <div className="mini-carland">
        <CarsList setIsCarCard={setIsCarCard} setIsShowForm={setIsShowForm}></CarsList>
        {isCarCard ? (
          <CarCard
            setIsCarCard={setIsCarCard}
            setIsImageZoom={setIsImageZoom}
            setIsShowSellerInfo={setIsShowSellerInfo}
          ></CarCard>
        ) : null}

        {isImageZoom ? (
          <CarImage setIsImageZoom={setIsImageZoom}></CarImage>
        ) : null}

        {isShowSellerInfo ? (
          <ShowSellerInfo
            setIsShowSellerInfo={setIsShowSellerInfo}
          ></ShowSellerInfo>
        ) : null}
        {isShowForm ?   <FormAddCar setIsShowForm={setIsShowForm} ></FormAddCar> :null}
      
      </div>
    </>
  );
}

function CarCard({ setIsImageZoom, setIsCarCard, setIsShowSellerInfo }) {
  return (
    <>
      <div className="card-wrapper">
        <div className="car-card">
          <div onClick={() => setIsImageZoom(true)} className="card-image">
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
          <button
            onClick={() => setIsShowSellerInfo(true)}
            className="contact-button"
          >
            {" "}
            <div class="btn-content">
              <img
                className="phone-icon"
                src={require("./images/icons8-phone-30.png")}
              ></img>
              <text>Contact</text>
            </div>
          </button>
          <button onClick={() => setIsCarCard(false)} className="close-button">
            <img src={require("./images/icons8-close-50 (1).png")}></img>
          </button>
        </div>
      </div>
    </>
  );
}

function ShowSellerInfo({ setIsShowSellerInfo }) {
  return (
    <>
      <div className="seller-info-wrapper">
        <div className="seller-info">
          <div className="seller-info-content">
            <div
              onClick={() => setIsShowSellerInfo(false)}
              className="info-close-wrapper"
            >
              <img src={require("./images/icons8-close-50 (1).png")}></img>
            </div>
            <div className="seller-name-wrapper">
              <h2 className="seller-name">Rayan Alizadeh</h2>
            </div>
            <ul className="media-list">
              <li className="media-item-phone">
                <div className="info-title">
                  <img src={require("./images/icons8-phone-50.png")}></img>{" "}
                  Phone Nmber
                </div>{" "}
                <number>09961030593 </number>
              </li>
              <li className="media-item">
                {" "}
                <div class="info-title">
                  <img src={require("./images/icons8-instagram-50.png")}></img>{" "}
                  Instagram
                </div>{" "}
                <text>@amiralializadeh777</text>
              </li>
              <li className="media-item">
                {" "}
                <div className="info-title">
                  <img src={require("./images/icons8-telegram-50.png")}></img>{" "}
                  Telegram
                </div>{" "}
                <text>amirali313</text>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

function FormAddCar({setIsShowForm}) {
  return (
    <>
      <div className="form-add-car">
        <form className="">
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
          <div className="input-image">
            <label> Car Image</label>
            <input type="image"></input>
          </div>
        </form>
          <div className="form-buttons">
            <button className="btn" onClick={()=>setIsShowForm(false)} >Cancel</button>
            <button className="btn">Submit</button>
          </div>
      </div>
    </>
  );
}

function CarsList({ setIsCarCard , setIsShowForm}) {
  return (
    <>
      <div className="cars-list-wrapper">
        <ul className="cars-list">
          <li onClick={() => setIsCarCard(true)} className="cars-item">
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
        <div className="sell-car-btn-wrapper"><button onClick={()=>{setIsShowForm(true)}} className="sell-car-btn"> Sell Your Car </button></div>
        </div>

    </>
  );
}


function Controls() {
  const { zoomIn, zoomOut, resetTransform } = useControls();
  return (
    <>
      <div className="zoom-btn-wrapper">
        <span
          style={{ position: "absolute" }}
          onClick={() => zoomIn()}
          className="zoom-in-btn"
        >
          <img src={require("./images/icons8-plus-24.png")}></img>
        </span>
        <span className="zoom-out-btn">
          <img
            onClick={() => zoomOut()}
            src={require("./images/icons8-minus-24.png")}
          ></img>
        </span>
        <span className="zoom-reset-btn">
          <img
            onClick={() => resetTransform()}
            src={require("./images/icons8-reset-24.png")}
          ></img>
        </span>
      </div>
    </>
  );
}

function CarImage({ setIsImageZoom }) {
  return (
    <>
      <div style={{ overflow: "hidden" }} className="car-image-wrapper">
        <div style={{ position: "relative" }} className="car-image-container">
          <div className="btn-wrapper">
            <span onClick={() => setIsImageZoom(false)} className="btn-close">
              <img src={require("./images/icons8-close-30.png")}></img>
            </span>
          </div>
          {/* <img draggable="false" style={{transform:`scale:(${scale}) translate:(${position.x}px,${position.y}px)`,}} src={require("./images/Toyotaimage.jpg")} > */}
          <div class="image-wrapper">
            {/* <img draggable="false" style={{transform:`scale(${scale})` , translate:`${position.x}px,${position.y}px`} }  src={require("./images/Toyotaimage.jpg")} > */}
            <TransformWrapper
              initialScale={1}
              initialPositionX={0}
              initialPositionY={0}
            >
              {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                <>
                  <Controls></Controls>
                  <TransformComponent>
                    <img
                      className="car-image"
                      src={require("./images/Toyotaimage.jpg")}
                    ></img>
                  </TransformComponent>
                </>
              )}
            </TransformWrapper>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
