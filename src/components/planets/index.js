import React, {Fragment} from "react";  
import Planet from "./planet";
const Planets = () =>{
    
    const MostreMensagem = (name)=>{
        console.log("O planeta "+ name +"Foi Clicado")
    }
    return(
        
        <Fragment>
             <Planet 
                nome="Mercurio"
                descricaoLink ="Clique aqui para visualizar informações sobre o planteta"
                link ="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
                img_url= "https://www.infoescola.com/wp-content/uploads/2008/04/planeta-merc%C3%BArio_60584068.jpg"
                MostreMensagem = {MostreMensagem}
                teste = {false}
             />
              <Planet 
                nome ="Plutao"  
                descricaoLink ="Clique aqui para visualizar informações sobre o planteta"
                link ="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
                img_url= "https://www.infoescola.com/wp-content/uploads/2008/04/planeta-merc%C3%BArio_60584068.jpg"
                MostreMensagem = {MostreMensagem}
                teste = {true}
             />
            <button onClick={MostreMensagem}>Clique Me</button>
        </Fragment>
       
        
    );
}

export default Planets;