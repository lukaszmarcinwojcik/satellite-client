import React, { useState } from 'react';

import ErrorsList from './ErrorList';

const API ="https://nuclearsatellite-api.herokuapp.com"

const DeleteForm = (props) => {
    const [errors, setErrors]=useState([]);
    const [message, setMessage]=useState("");

    const handleDelete=()=>{

        
        let id =props.id
    
    
        let url =`${API}/satellite/delete/${id}`
        fetch(url, {
          method: "DELETE",
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
                setTimeout(props.updateSatelliteList, 1500 )
            }
      })
    }

    return(
        <div className={"deletePanel"}>
        <p>Czy na pewno chcesz usunąć tego satelite?</p>
        <button className={"smallBtn"} onClick={handleDelete}>TAK</button><button className={"smallBtn"} onClick={props.toggleDeletePanelState}>NIE</button>
        {errors.length===0? null:<ErrorsList errorsList={errors}/>}
        {message?<h3>{message}</h3>:null}
        </div>
    )
}


export default DeleteForm;