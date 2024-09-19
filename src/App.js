//Mini-Carland


import { useState } from "react";
import {
  TransformComponent,
  TransformWrapper,
  useControls,
} from "react-zoom-pan-pinch";

const Cars = [
  {
    name:'Ebrahim',
    lastName:'Taghavi',
    phone:9123458668,
    id: 118836,
    model: "Maybach GLS 600",
    company: "Mercedes Benz",
    madein: 2022,
    image: "https://eghtesaad24.ir/files/fa/news/1402/10/27/588457_459.png",
    color: "Black",
    description: "A new model from mercedes",

    price: 70000,
  },
  {
    name:'Ali',
    lastName:'Saadat',
    phone:9123422442,
    id: 933372,
    model: "Landcruiser",
    company: "Toyota",
    madein: 2023,
    image:
      "https://tiktarh.com/wp-content/uploads/2021/12/Shcar1001889www.tiktarh.com_.jpg",
    color: "White",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available",
    price: 50000,
  },
  {
    name:'Mohammad',
    lastnName:'Alijani',
    phone:9115683541,
    id: 499476,
    model: "2 Series Coupe",
    company: "BMW",
    madein: 2020,
    image:
      "https://1car.ir/thumbnails/mark/1car.ir-BMW-2-Series-Convertible-2015.jpg",
    color: "Gray",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available",
    price: 60000,
  },
];

function App() {
  const [isImageZoom, setIsImageZoom] = useState(false);
  const [isCarCard, setIsCarCard] = useState(false);
  const [isShowSellerInfo, setIsShowSellerInfo] = useState(false);
  const [isShowForm, setIsShowForm] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [car, setCar] = useState(Cars);

  function handleAddCar(car) {
    setCar((cars) => [...cars, car]);
  }

  function handleSelection(car) {
    setSelectedCar((cur) => (cur?.id === car.id ? cur : car));
    setIsCarCard(true);
    setIsShowForm(false);
  }

  function handleShowCard() {
    setIsShowForm(false);
  }

  function handleShowForm() {
    setIsCarCard(false);

    setIsShowSellerInfo(false);
    setIsShowForm(true);
  }

  function handleShowSellerInfo() {
    setIsCarCard(false);
    setIsShowSellerInfo(false);
  }

  return (
    <>
      <div className="mini-carland">
        <CarsList
          onSelection={handleSelection}
          car={car}
          handleShowForm={handleShowForm}
          handleShowCard={handleShowCard}
          setIsCarCard={setIsCarCard}
          setIsShowForm={setIsShowForm}
          selectedCar={selectedCar}
        ></CarsList>
        {isCarCard ? (
          <CarCard
            handleShowSellerInfo={handleShowSellerInfo}
            setIsCarCard={setIsCarCard}
            setIsImageZoom={setIsImageZoom}
            setIsShowSellerInfo={setIsShowSellerInfo}
            selectedCar={selectedCar}
          ></CarCard>
        ) : null}

        {isImageZoom ? (
          <CarImage
            selectedCar={selectedCar}
            setIsImageZoom={setIsImageZoom}
          ></CarImage>
        ) : null}

        {isShowSellerInfo ? (
          <ShowSellerInfo
            setIsShowSellerInfo={setIsShowSellerInfo}
            selectedCar={selectedCar}
          ></ShowSellerInfo>
        ) : null}
        {isShowForm ? (
          <FormAddCar
            onAddCar={handleAddCar}
            setIsShowForm={setIsShowForm}
          ></FormAddCar>
        ) : null}
      </div>
    </>
  );
}

function CarCard({
  selectedCar,
  setIsImageZoom,
  setIsCarCard,
  setIsShowSellerInfo,
  handleShowSellerInfo,
}) {
  return (
    <>
      <div className="card-wrapper">
        <div className="car-card">
          <div onClick={() => setIsImageZoom(true)} className="card-image">
            <img alt="image" src={selectedCar.image}></img>
          </div>
          <div className="card-content">
            <div className="card-title">
              <h2 className="card-model">{selectedCar.model}</h2>
              <span>{selectedCar.company}</span>
            </div>
            <ul className="card-marks">
              <li>
                <span>Price $ {selectedCar.price}</span>
              </li>
              <li>
                <span>Made in {selectedCar.madein}</span>
              </li>
              <li>
                <span>Color {selectedCar.color}</span>
              </li>
            </ul>
            <div className="card-description">
              <p>{selectedCar.description}</p>
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
          <button
            onClick={() => handleShowSellerInfo()}
            className="close-button"
          >
            <img src={require("./images/icons8-close-50 (1).png")}></img>
          </button>
        </div>
      </div>
    </>
  );
}

function ShowSellerInfo({ setIsShowSellerInfo ,selectedCar }) {
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
              <h2 className="seller-name"><text>{selectedCar.name}</text><text> {selectedCar.lastName}</text></h2>
            </div>
            <ul className="media-list">
              <li className="media-item-phone">
                <div className="info-title">
                  <img src={require("./images/icons8-phone-50.png")}></img>{" "}
                  Phone Nmber
                </div>{" "}
                <number>{selectedCar.phone} </number>
              </li>
              <li className="media-item">
                {" "}
                <div class="info-title">
                  <img src={require("./images/icons8-instagram-50.png")}></img>{" "}
                  Instagram
                </div>{" "}
                <text>{selectedCar.instagram}</text>
              </li>
              <li className="media-item">
                {" "}
                <div className="info-title">
                  <img src={require("./images/icons8-telegram-50.png")}></img>{" "}
                  Telegram
                </div>{" "}
                <text>{selectedCar.telegram}</text>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

function FormAddCar({ setIsShowForm, onAddCar }) {
  const [name , setName]  = useState('')
  const [lastName,setLastName] = useState('')
  const [phone, setPhone ] =  useState(null)
  const [instagram , setInstagram]= useState('')
  const [telegram, setTelegram]= useState('')
  const [model, setModel] = useState("");
  const [company, setCompany] = useState("");
  const [color, setColor] = useState("");
  const [madein, setMadein] = useState(null);
  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    if (!model || !company) {
      return;
    }
    if (!color || !madein) {
      return;
    }
    if (!price || !description) {
      return;
    }
    if (!name|| !lastName) {
      return;
    }
 
    if (!phone) {
      return;
    }
 

    e.preventDefault();
    const newCar = {
      name,
      lastName,
      phone,
      instagram,
      telegram,
      id: crypto.randomUUID(),
      model,
      company,
      color,
      madein,
      price,
      description,
      image,
    };

    onAddCar(newCar);
    setName('')
    setLastName('')
    setPhone(null)
    setInstagram('')
    setTelegram('')
    setModel("");
    setCompany("");
    setColor("");
    setMadein(0);
    setPrice(0);
    setDescription("");

    setImage(
      "https://img.favpng.com/12/10/4/car-computer-icons-logo-silhouette-png-favpng-mYuqVHPuukhaSDsT9ABDuR57T.jpg"
    );
  }

  return (
    <>
      <div className="form-add-car">
        <form className="" onSubmit={handleSubmit}>
          <div className="input-first-name">
            <label>Name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
          </div>
          <div className="input-last-name">
            <label>Last Name</label>
            <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}></input>
          </div>
          <div class="form-phone-number">
            <label>Phone Number</label>
            <input type="text" value={phone} onChange={(e)=> setPhone(e.target.value)}></input>
          </div>
          <div className="input-instagram">
            <label>Instagram</label>
            <input type="text" value={instagram} onChange={(e)=>setInstagram(e.target.value)}></input>
          </div>
          <div className="input-telegram">
            <label>Telegram</label>
            <input type="text" value={telegram} onChange={(e)=>setTelegram(e.target.value)}></input>
          </div>

          <div className="input-model">
            <label>Car Model</label>
            <input
              type="text"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            ></input>
          </div>
          <div className="input-company">
            <label>Car Company</label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            ></input>
          </div>
          <div className="input-color">
            <label>Car Color</label>
            <select value={color} onChange={(e) => setColor(e.target.value)}>
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
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></input>
          </div>
          <div className="input-madein">
            <label>Car Made in</label>
            <input
              type="number"
              value={madein}
              onChange={(e) => setMadein(e.target.value)}
            ></input>
          </div>
          <div className="input-description">
            <label>Car Information</label>
            <textarea
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="input-image">
            <label> Car Image</label>
            <input
              type="file"
              value=""
              name="Choose Image"
              onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
            ></input>

          </div>

          <div className="form-buttons">
            <button
              className="form-close-btn"
              onClick={() => setIsShowForm(false)}
            >
              <img src={require("./images/icons8-close-50 (1).png")}></img>
            </button>
            <button className="form-submit-btn">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

function Car({ car, handleShowCard, onSelection, selectedCar }) {
  return (
    <>
      <li onClick={() => onSelection(car)} className="cars-item">
        <div class="item-image">
          <img src={car.image} alt="toyota"></img>
        </div>
        <div className="item-content">
          <div className="item-title">
            <h2 className="item-model">{car.model} </h2>
            <span className="item-company"> {car.company}</span>
          </div>
          <div class="item-marks">
            <span>$ {car.price}</span>
            <span className="item-madein">{car.madein}</span>
            <span className="item-color">{car.color}</span>
          </div>
        </div>
      </li>
    </>
  );
}

function CarsList({
  setIsCarCard,
  setIsShowForm,
  handleShowCard,
  handleShowForm,
  car,
  selectedCar,
  onSelection,
}) {
  return (
    <>
      <div className="cars-list-wrapper">
        <ul className="cars-list">
          {car.map((car) => {
            return (
              <Car
                car={car}
                onSelection={onSelection}
                handleShowCard={handleShowCard}
                selectedCar={selectedCar}
              ></Car>
            );
          })}
        </ul>
        <div className="sell-car-btn-wrapper">
          <button
            onClick={() => {
              handleShowForm();
            }}
            className="sell-car-btn"
          >
            {" "}
            Sell Your Car{" "}
          </button>
        </div>
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

function CarImage({ setIsImageZoom, selectedCar }) {
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
                    <img className="car-image" src={selectedCar.image}></img>
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
