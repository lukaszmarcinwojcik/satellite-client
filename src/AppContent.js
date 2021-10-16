import { useEffect, useState } from 'react';

import Header from './Header';
import SatelliteInfo from './SatelliteInfo.js';
import FormAdd from './FormAdd.js';

import './App.css';


const API ="https://nuclearsatellite-api.herokuapp.com"

const AppContent=(props)=>{

    const [satelliteList, setSatelliteList] = useState([]);
    const [message, setMessage]=useState([]);
    

    const getData=()=>{
        let id =JSON.parse(localStorage.getItem("user"))._id;
        let url =`${API}/satellite/get/${id}`
        fetch(url, {
          method: "GET",
          headers: {
            "x-access-token": localStorage.getItem("accessToken"),
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
          },
        })
          .then((response) => response.json())
          .then((data) => {
            if(Array.isArray(data)){
            setSatelliteList([...data])
            setMessage("");
            return;
            }
            else if(data.message){
                setMessage(data.message);
            }else {
                setMessage("cos poszlo nie tak :(")
            }
          });
      }

      useEffect(() => {
        getData()
      }, []);
     


const satelliteElement = satelliteList.map(satellite => ( <SatelliteInfo key={satellite._id} updateSatelliteList={getData} {...satellite}/>))
const title =(<h2>Lista satelitów:</h2>)
    return(
    <>
    <Header toggleIsUserLoggedIn={props.toggleIsUserLoggedIn} />
    <FormAdd updateSatelliteList={getData} />
    
    {satelliteElement.length===0?(<h3>Aktualnie nie posiadasz żadnego satelity</h3>):(title,satelliteElement)}
    {message?<h3>{message}</h3>:null}
    </>
    )
}




export default AppContent;