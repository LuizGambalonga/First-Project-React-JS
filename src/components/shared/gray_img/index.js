import React from "react";
import './style.css';
const GrayImg = (props) =>{
    return (
        <div className="img">
            <img src={props.img_url}></img>
        </div>
        
     
    );
}
export default GrayImg;