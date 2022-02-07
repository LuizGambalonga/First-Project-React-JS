import React, { Fragment } from "react";

const DescriptionLink = (props) =>{
    return (
        <Fragment>
            <p>{props.nome}</p>
            <a href={props.link}>
                    {props.descricaoLink}
            </a>
        </Fragment>
    );
}
export default DescriptionLink;