import React, { Fragment } from "react";

const DescriptionLink = (props) =>{
   
    if(props.link){
        return (
            <Fragment>
                <p>{props.nome}</p>
                <a href={props.link}>
                        {props.descricaoLink}
                </a>
            </Fragment>
        );
    }else{
        return (
       
            <Fragment>
               <p> Infelizmente não há um link informado</p>
            </Fragment>
        );
    }
    
}
export default DescriptionLink;