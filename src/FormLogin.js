import {  useState } from 'react';
import ErrorsList from './ErrorList';

const API ="https://nuclearsatellite-api.herokuapp.com"

const FormLogin = (props) => {
    const [userLogin, setUserLogin]=useState({
        email:"",
        password:"",
    });

    const [errors, setErrors]=useState([]);
    const [message, setMessage]=useState("");

    const handleInput = (e) => {
        const name=e.target.name;
        const value =e.target.value;
   

        setUserLogin({...userLogin, [name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = userLogin;
        fetch(`${API}/login`, {
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: password,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
              if (data.isLogged) {
                localStorage.setItem("accessToken", data.accessToken);
                localStorage.setItem("isLogged", data.isLogged);
                localStorage.setItem("user", JSON.stringify(data.user));
                setUserLogin({
                    email: "",
                    password: "",})
                setErrors("");
                setMessage("");
                
                setTimeout(props.toggleIsUserLoggedIn,1500)
                return
              }
                setErrors(data.errors)
            });
            
        };
    

    return (
        <>
            <div className={"formContainer"}>
                <h2>Logowanie</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className="loginPanelDiv">
                        <label htmlFor="email">Email</label>
                        <input type="email" autoComplete="off"
                        value={userLogin.email}
                        onChange={handleInput}
                        name="email" id="email"/>
                    </div>
                    <div className="loginPanelDiv">
                        <label htmlFor="password">Hasło</label>
                        <input type="password" autoComplete="off"
                        value={userLogin.password}
                        onChange={handleInput}
                        name="password" id="password"/>
                    </div>
                    <button className={"submitBtn"} onClick={handleSubmit}>Zaloguj</button>
                </form>
                {errors.length===0? null:<ErrorsList errorsList={errors}/>}
                {message?<h3>{message}</h3>:null}
            </div>
        </>
    )
}

export default FormLogin;