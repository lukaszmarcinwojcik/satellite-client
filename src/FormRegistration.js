import {  useState } from 'react';
import ErrorsList from './ErrorList';

const API ="https://nuclearsatellite-api.herokuapp.com"




const FormRegistration = (props) => {
    const [userRegistration, setUserRegistration]=useState({
        fullname:"",
        country:"",
        email:"",
        password:"",
        password2:"",
        hasAtomicButton:false,
    });
    const [errors, setErrors]=useState([]);
    const [message, setMessage]=useState("");
    

    const handleInput = (e) => {
        const name=e.target.name;
        const value =e.target.value;
        const type= e.target.type;

        if(type==="checkbox"){
            const checked=e.target.checked;
            setUserRegistration({...userRegistration, [name] : checked})
            return;
        }
        setUserRegistration({...userRegistration, [name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
     
        const {fullname, country, email, password, password2, hasAtomicButton} =userRegistration;
        fetch(`${API}/register`, {
            method: "POST",
            body: JSON.stringify({
                fullname: fullname,
                country: country,
                email: email,
                password: password,
                password2: password2,
                hasAtomicButton:hasAtomicButton,
            }),
            headers: {
                "Content-Type": "application/json",
            },
            })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                if(data.errors){
                    
                    setErrors([...data.errors])
                    console.log(errors)
                }
                if(data.message){
                    setMessage(data.message);
                    setErrors([]);
                    setUserRegistration({
                        fullname:"",
                        country:"",
                        email:"",
                        password:"",
                        password2:"",
                        hasAtomicButton:false,
                    })
                    setTimeout(props.showLoginForm, 1500)
                }
            });


    }
    return (
        <>
            <div className={"formContainer"}>
                <h2>Rejestracja</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className="loginPanelDiv">
                        <label htmlFor="fullname">Pełna nazwa</label>
                        <input type="text" autoComplete="off"
                        value={userRegistration.username}
                        onChange={handleInput}
                        name="fullname" id="fullname"/>
                    </div>
                    <div className="loginPanelDiv">
                        <label htmlFor="country">Kraj pochodzenia</label>
                        <input type="text" autoComplete="off"
                        value={userRegistration.country}
                        onChange={handleInput}
                        name="country" id="country"/>
                    </div>
                    <div className="loginPanelDiv">
                        <label htmlFor="email">Email</label>
                        <input type="email" autoComplete="off"
                        value={userRegistration.email}
                        onChange={handleInput}
                        name="email" id="email"/>
                    </div>
                    <div className="loginPanelDiv">
                        <label htmlFor="password">Hasło</label>
                        <input type="password" autoComplete="off"
                        value={userRegistration.password}
                        onChange={handleInput}
                        name="password" id="password"/>
                    </div>
                    <div className="loginPanelDiv">
                        <label htmlFor="password2">Powtórz hasło</label>
                        <input type="password" autoComplete="off"
                        value={userRegistration.password2}
                        onChange={handleInput}
                        name="password2" id="password2"/>
                    </div>
                    <div className="loginPanelDiv">
                        <label htmlFor="hasAtomicButton">Przycisk atomowy</label>
                        <input type="checkbox" autoComplete="off"
                        value={userRegistration.hasAtomicButton}
                        onChange={handleInput}
                        name="hasAtomicButton" id="hasAtomicButton"/>
                    </div>
                    <button className={"submitBtn"} type="submit">Rejestracja</button>
                </form>
                {errors.length===0? null:<ErrorsList errorsList={errors}/>}
                {message?<h3>{message}</h3>:null}
            </div>
        </>
    )
}

export default FormRegistration;