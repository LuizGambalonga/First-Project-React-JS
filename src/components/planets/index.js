import React, {Fragment} from "react";  
import Planet from "./planet";
const Planets = () =>{
    return(
        <Fragment>
             <Planet 
                nome ="Mercurio"  
                descricaoLink ="Clique aqui para visualizar informações sobre o planteta"
                link ="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
                img_url= "https://www.infoescola.com/wp-content/uploads/2008/04/planeta-merc%C3%BArio_60584068.jpg"
             />
            
        </Fragment>
       
        
    );
}

export default Planets;