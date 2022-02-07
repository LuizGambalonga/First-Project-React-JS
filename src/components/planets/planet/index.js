import React, {Fragment} from "react";  
import './style.css';
import GrayImg from '../../shared/gray_img';
import DescriptionLink from "../../shared/DescriptionWithLink";
const Planet = (props) =>{
    return(
        <Fragment>
        <DescriptionLink 
            nome = {props.nome}
            link = {props.link}
            descricaoLink = {props.descricaoLink}
        />
        <GrayImg img_url={props.img_url}/>  
        </Fragment>
    );
}

export default Planet;