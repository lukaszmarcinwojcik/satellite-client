import { useState } from 'react';

const Header = (props) => {
  let user =JSON.parse(localStorage.getItem("user")).fullname;

const [isLogoutPanelActive, setIsLogoutPanelActive] = useState(false);
const toggleLogoutPanelState = () => setIsLogoutPanelActive(prevValue => !prevValue);
const handleLogout=()=>{
  localStorage.clear();
  props.toggleIsUserLoggedIn()
}

const LogoutPanel=(<div className={"logoutPanel"}>
  <p>{`Jestes zalogowany jako: ${user}`}</p>
  <p>Czy na pewno chce się wylogować?</p>
  <button className={"smallBtn"} onClick={handleLogout}>Tak</button><button className={"smallBtn"} onClick={toggleLogoutPanelState}>Nie</button>
</div>)

  return (
    <header>
    <h1>Satellite APP</h1><div className={"logoutBtn"} onClick={toggleLogoutPanelState}></div>
    {isLogoutPanelActive? LogoutPanel:null}
    </header>
  );
}

export default Header;