import React from "react";

function CardB(props){
return(
  <div class="card" style ={{width : "90%" , height : "150px" , marginTop : "20px" , borderRadius : "20px"}}>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
    <p class="card-text" style ={{fontSize : "10px"}}>{props.content}</p>
    <button href="#" class="card-link btn btn-dark" style = {{height : "30px" , fontSize : "small",  marginBottom : "6px"}}>Take me</button>
   
  </div>
</div>
)
}

export default CardB ;