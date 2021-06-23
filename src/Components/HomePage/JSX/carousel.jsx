import React from "react" ;
import download from "../../../images/download.jpg";
import download1 from "../../../images/dp.jpg";
import download2 from "../../../images/download2.jpg";
import "../CSS/Carousel.css";

function Carousel(){
return(
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src= {download} class="d-block w-100 ht" alt="hello"/>
      <div class="carousel-caption d-none d-md-block">
        <h5 style = {{color : "#fffff" , marginBottom : "20%" , fontSize : "5rem"}}>First slide label</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src={download1} class="d-block w-100 ht" alt="hii"/>
      <div class="carousel-caption d-none d-md-block">
        <h5 style = {{color : "#fffff" , marginBottom : "20%" , fontSize : "5rem"}}>Second slide label</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src={download2} class="d-block w-100 ht" alt="hey"/>
      <div class="carousel-caption d-none d-md-block">
        <h5 style = {{color : "#fffff" , marginBottom : "20%" , fontSize : "5rem"}}>Third slide label</h5>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" ></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
) 
}

export default Carousel;