import { useEffect, useState } from 'react';

import AppContent from './AppContent';
import Footer from './Footer';
import LoginPanel from './LoginPanel';
import './App.css';

// const API ="https://nuclearsatellite-api.herokuapp.com"

const App = () => {
  //zalogowany/ wylogowany
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const toggleIsUserLoggedIn = () => setIsUserLoggedIn(prevValue => !prevValue);

//sprawdza czy zalogowany
const checkIsLoggedIn=()=>{
  let isLogged = JSON.parse(localStorage.getItem("isLogged"));
  if(isLogged){
    toggleIsUserLoggedIn();
  }
}
 
  useEffect(() => {
    setTimeout(checkIsLoggedIn,1000)
    
  }, []);
 
  return (

    <div className={"App"}>
    {
      isUserLoggedIn?
      <AppContent toggleIsUserLoggedIn={toggleIsUserLoggedIn}/>: 
      <LoginPanel  toggleIsUserLoggedIn={toggleIsUserLoggedIn} />
    }
    <Footer/>
    </div>
    
  );
};



export default App;
