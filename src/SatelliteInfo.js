import React, { useState } from 'react';
import EditForm from './EditForm';
import FormDelete from './FormDelete';


const SatelliteInfo = (props) => {
  const [isMoreInfoActive, setIsMoreInfoActive] = useState(false);
  const toggleMoreInfoState = () => 
  {
    setIsMoreInfoActive(prevValue => !prevValue);
    setIsDeletePanelActive(false);
    setIsEditPanelActive(false);
  }
  const [isDeletePanelActive, setIsDeletePanelActive] = useState(false);
  const toggleDeletePanelState = () => 
  {
    setIsMoreInfoActive(false);
    setIsDeletePanelActive(prevValue => !prevValue);
    setIsEditPanelActive(false);
  }
  const [isEditPanelActive, setIsEditPanelActive] = useState(false);
  const toggleEditPanelState = () => {
    setIsMoreInfoActive(false);
    setIsDeletePanelActive(false);
    setIsEditPanelActive(prevValue => !prevValue);
  }
  
  

  const moreInfo = (
    <> 
      <p>{`Numer boczny: ${props.sideNumber}`}</p>
      <p>{`Wyskość nad orbitą: ${props.altitudeInOrbit} km`}</p>
      <p>{`Sztuczna Intelogencja: ${props.hasIE?"posiada":"nie posiada"}` }</p>
      <p>{`Ilość amunicji: ${props.amountOfAmmunition} szt.`}</p>
      <p>{`Data wystrzelenia: ${props.dateOfLaunching}`}</p>
      <p>{`Data dodania: ${props.creationDate}`}</p>

    </>
  )
 
  return (
    <div className={"satelliteInfo"} >
      <h3 >{`${props.producer} ${props.model} ${props.modelYear} ` }</h3>
      <div className={"btnContainer"}>
        <div onClick={toggleMoreInfoState} className={"moreInfoBtn"}></div>
        <div onClick={toggleEditPanelState} className={"editBtn"}></div>
        <div onClick={toggleDeletePanelState} className={"deleteBtn"}></div>
      </div>
       {isMoreInfoActive&&moreInfo} 
       {isDeletePanelActive&&<FormDelete updateSatelliteList={props.updateSatelliteList} id={props._id} toggleDeletePanelState={toggleDeletePanelState}/>}
       {isEditPanelActive&&<EditForm updateSatelliteList={props.updateSatelliteList} {...props} toggleEditPanelState={toggleEditPanelState}/>}
    </div>
  );
};

export default SatelliteInfo;
