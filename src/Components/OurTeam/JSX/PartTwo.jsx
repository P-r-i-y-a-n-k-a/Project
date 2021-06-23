import React from "react" ;
import { Fragment } from "react/cjs/react.production.min";
import TeamMember from "../../../images/TeamMember.jpg";

function PartTwo(props){
return(
    <Fragment>
        
        <div class="card" style = {{width : "200px" , marginTop : "50px"  , marginRight : "20px"}}>
              <img src= {TeamMember} class="card-img-top" alt="..." style = {{height : ""}} />
             <div style = {{position : "absolute" , bottom : "0px" , width : "100px" , backgroundColor : "white" , color : "#154e99"}}>
              <h5 style = {{textAlign : "center" , marginTop : "3%"  , fontSize : "0.8rem"}} class="card-title">{props.items.name}</h5>
                   <p style = {{textAlign : "center"  , marginBottom : "3%" , fontSize : "0.8rem"}} class="card-text"> {props.items.title} </p>
              </div>     
       </div>
    </Fragment>
)
}

export default PartTwo ;