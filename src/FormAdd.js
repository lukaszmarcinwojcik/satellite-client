import React, { useEffect, useState } from 'react';

import ErrorsList from './ErrorList';

const API ="https://nuclearsatellite-api.herokuapp.com"

let currentDate = new Date();
    let dd = currentDate.getDate();
    let mm = currentDate.getMonth()+1;
    let yyyy = currentDate.getFullYear();
    if(dd.length===1){dd="0"+dd.toString()}
    if(mm.length===1){mm="0"+dd.toString()}
currentDate=`${yyyy}-${mm}-${dd}`
let currentYear = (new Date()).getFullYear();
 
  let options =[]     
        for (let i = 1900; i <= currentYear; i++) {
            options.push(i)
        }
  options=options.map(item=>(<option key={item} value={item}>{item}</option>))
  currentYear=currentYear.toString()


const FormAdd = (props) => {
  const [isAddFormActive, setIsAddFormActive] = useState(false);
  const toggleIsAddFormActive = () => setIsAddFormActive(prevValue => !prevValue);
  
  useEffect(() => {
   
  }, []);

  const [satelliteAdd, setSatelliteAdd]=useState({
    sideNumber: "",
    producer: "",
    model:"",
    softwareVersion: "",
    modelYear: currentYear,
    dateOfLaunching: currentDate,
    amountOfAmmunition: 1,
    altitudeInOrbit: 200,
    hasAI: false,
});
const [errors, setErrors]=useState([]);
const [message, setMessage]=useState("");

const handleInput = (e) => {
  const name=e.target.name;
  const value =e.target.value;
  const type= e.target.type;


  if(type==="checkbox"){
      const checked=e.target.checked;
      setSatelliteAdd({...satelliteAdd, [name] : checked})
      return;
  }
  setSatelliteAdd({...satelliteAdd, [name] : value})
}

const handleSubmit = (e) => {
  e.preventDefault();
  const {sideNumber, producer, softwareVersion, modelYear, dateOfLaunching, amountOfAmmunition, altitudeInOrbit,model, hasAI} =satelliteAdd;

  if(!sideNumber || !producer || !softwareVersion || !modelYear || !dateOfLaunching || !amountOfAmmunition || !altitudeInOrbit||!model){
    setErrors([{message: "Wszystkie pola muszą być wypełnione"}])
    return
  };

  let user =JSON.parse(localStorage.getItem("user"))._id;
  
  fetch(`${API}/satellite/add`, {
      method: "POST",
      body: JSON.stringify({
        user:user,
        model:model,
        sideNumber: sideNumber,
        producer: producer,
        softwareVersion: softwareVersion,
        modelYear: modelYear,
        dateOfLaunching: dateOfLaunching,
        amountOfAmmunition: amountOfAmmunition,
        altitudeInOrbit: altitudeInOrbit,
        hasAI: hasAI,
      }),
      headers: {
        "x-access-token": localStorage.getItem("accessToken"),
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
      },
      })
      .then((resp) => resp.json())
      .then((data) => {
          if(data.errors){
              setErrors([{message: data.error}])
              console.log(errors)
          }
          if(data.message){
            console.log("message",data.message)
              setMessage(data.message);
              setErrors([]);
              setSatelliteAdd({
                sideNumber: "",
                producer: "",
                softwareVersion: "",
                modelYear: currentYear,
                dateOfLaunching: currentDate,
                amountOfAmmunition: 1,
                altitudeInOrbit: 200,
                hasAI: false,
              })
              props.updateSatelliteList()
              setTimeout(toggleIsAddFormActive, 1500 );
              
          }
      });


}

  const addForm =(
  <div className={"addFormContainer"}>
    <div onClick={toggleIsAddFormActive} className={"closeBtn"}></div>
    <h2>Dodaj nowego satelite...</h2>
    
      <form action="" onSubmit={handleSubmit}>
        <div className="loginPanelDiv">
          <label htmlFor="model">Model</label>
          <input type="text" autoComplete="off"
            value={satelliteAdd.model}
            onChange={handleInput}
            name="model" id="model"/>
        </div>
        <div className="loginPanelDiv">
          <label htmlFor="sideNumber">Numer boczny</label>
          <input type="text" autoComplete="off"
            value={satelliteAdd.sideNumber}
            onChange={handleInput}
            name="sideNumber" id="sideNumber"/>
        </div>
        <div className="loginPanelDiv">
          <label htmlFor="producer">Producent</label>
          <input type="text" autoComplete="off"
            value={satelliteAdd.producer}
            onChange={handleInput}
            name="producer" id="producer"/>
        </div>
        <div className="loginPanelDiv">
          <label htmlFor="softwareVersion">Oprogramowanie</label>
          <input type="text" autoComplete="off"
            value={satelliteAdd.softwareVersion}
            onChange={handleInput}
            name="softwareVersion" id="softwareVersion"/>
        </div>
        <div className="loginPanelDiv">
          <label htmlFor="modelYear">Rocznik modelu</label>
            <select
              className={"formSelect"}
              value={satelliteAdd.modelYear}
              name={"modelYear"}
              onChange={handleInput}
            >
              {options}
            </select>
        </div>
        <div className="loginPanelDiv">
          <label htmlFor="dateOfLaunching">Data wystrzelenia</label>
          <input type="date" autoComplete="off"
            value={satelliteAdd.dateOfLaunching}
            min={"1970-01-01"}
            max={currentDate}
            onChange={handleInput}
            name="dateOfLaunching" id="dateOfLaunching"/>
        </div>
        <div className="loginPanelDiv">
          <label htmlFor="amountOfAmmunition">Ilość amunicji</label>
          <input type="number" autoComplete="off"
            className={"selectNumber"}
            value={satelliteAdd.amountOfAmmunition}
            min={1} max={10}
            onChange={handleInput}
            name="amountOfAmmunition" id="amountOfAmmunition"/>szt
        </div>
        <div className="loginPanelDiv">
          <label htmlFor="altitudeInOrbit">Wysokość</label>
          <input type="number" autoComplete="off"
            className={"selectNumber"}
            value={satelliteAdd.altitudeInOrbit}
            min={200} max={2000}
            onChange={handleInput}
            name="altitudeInOrbit" id="altitudeInOrbit"/>km
        </div>
        <div className="loginPanelDiv">
          <label htmlFor="hasAI">Sztuczna Inteligencja</label>
          <input type="checkbox" autoComplete="off"
            className={"checkboxInput"}
            value={satelliteAdd.hasAI}
            onChange={handleInput}
            name="hasAI" id="hasAI"/>
        </div>

        <button className={"submitBtn"} type="submit">DODAJ</button>
      </form>
    {errors.length===0? null:<ErrorsList errorsList={errors}/>}
    {message?<h3>{message}</h3>:null}
  </div>)

const showFormBtn = (<div className={"showFormBtn"} onClick={toggleIsAddFormActive}><h3>DODAJ NOWEGO SATELITE</h3></div>)
  return (
    <div className={"addSateliteContainer"}>
      {isAddFormActive ? addForm: showFormBtn}
    </div>
  );
};

export default FormAdd;