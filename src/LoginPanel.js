import {  useState } from 'react';
import FormLogin from './FormLogin'
import FormRegistration from './FormRegistration'

import globe from './assets/globe.png'
import satellite from './assets/satellite.png'

const LoginPanel = (props)=>{

const [isLoginFormActive, setIsLoginFormActive] = useState(false);
const [isRegistrationFormActive, setIsRegistrationFormActive] = useState(false);
const showLoginForm = () => {
  setIsLoginFormActive(true);
  setIsRegistrationFormActive(false)}

  const showRegistrationForm = () => {
    setIsLoginFormActive(false);
    setIsRegistrationFormActive(true)}


return(
    <>
    <h1 className={"headerTitle"}>Witaj w satellite APP</h1>
    
    <button className="smallBtn" onClick={showLoginForm}>Logowanie</button>
    <button className="smallBtn" onClick={showRegistrationForm}>Rejestracja</button>
    {isLoginFormActive&&<FormLogin toggleIsUserLoggedIn={props.toggleIsUserLoggedIn} />}
    {isRegistrationFormActive&&<FormRegistration showLoginForm={showLoginForm} />}
    <div className="logoContainer">
      <img src={satellite} className="satelliteImg" alt="satellite" />
      <img src={globe} className="globeImg" alt="globe" />
    </div>
   
    </>
)
}

export default LoginPanel;


