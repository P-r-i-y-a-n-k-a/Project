import React from "react";

function CardA(props){
return(
  <div class="card" style ={{width : "90%" , height : "150px" ,backgroundColor : "#154e99" , marginTop : "20px" , color : "white" , borderRadius : "20px"}}>
  <div class="card-body">
    
    <p class="card-text">{props.items}</p>
    
   
  </div>
</div>
)
}

export default CardA ;