import React, {Fragment} from "react";  
import './style.css';
import GrayImg from '../../shared/gray_img';
import DescriptionLink from "../../shared/DescriptionWithLink";
const Planet = (props) =>{
    let mensagem;
    if(props.teste){
        mensagem = <h1><u>{props.nome}</u></h1>
    }else{
        mensagem = <h5>{props.nome}</h5>
    }
    return(
        <Fragment>
            {mensagem}  
            <div onClick={ () =>props.MostreMensagem(props.nome)}>
                <DescriptionLink 
                // nome = {props.nome}
                link = {props.link}
                descricaoLink = {props.descricaoLink}
            />
            <GrayImg img_url={props.img_url}/>  
          
            </div>
        
        </Fragment>
    );
}

export default Planet;