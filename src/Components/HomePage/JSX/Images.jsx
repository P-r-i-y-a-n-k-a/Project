import React, { Fragment } from "react";
import "../CSS/Images.css";

function Images(props){

    return(
        <Fragment>
            <div className = "mr">
            <img className = "al" src = {props.src} alt = {props.alt} />
            </div>
        </Fragment>
    )
}

export default Images;