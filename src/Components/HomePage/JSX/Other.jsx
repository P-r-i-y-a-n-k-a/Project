import React, { Fragment } from "react" ;
import dp from "../../../images/dp.jpg";
import "../CSS/Other.css";

function Other(){

    return(
        <Fragment >
            <div className = "tx" style = {{backgroundColor : "#154e99" , color : "#ffffff" , height : "250px" , paddingTop : "40px" , paddingBottom : "30px" }}>
            <img src = {dp} alt = "reference picture" className ="img"></img>
            <p className="t"> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          
            </div>
        </Fragment>
    )
}

export default Other ;
