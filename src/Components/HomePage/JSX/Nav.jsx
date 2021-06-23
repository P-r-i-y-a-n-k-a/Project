import React from "react";
import "../CSS/Nav.css" ;
import Logo from "../../../images/FinalLogo.png";
import { useState } from "react";
import NavExpand  from "./NavExpand";
import NavProducts from "./NavProducts";
import NavSustain from "./NavSustainability";
import NavCSR from "./NavCSR";
import NavNews from "./NavNews";
import NavContact from "./NavContact";
import NavCareer from "./NavCareer";
import {Link} from "react-router-dom";


function Nav(){
  const [na , setNa] = useState(false)  ;

  function mouseOverHandler(){
    setNa(true);
  }
  function mouseOutHandler(){
    setNa(false);
  }
  function mg(){
  setNa(true);

  }

return(
  
   
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm  p-2 mb-1 "  style = {{height : na ? "270px" : ""}} onMouseEnter = {mouseOverHandler}  onMouseLeave = {mouseOutHandler}>
   
  <div class="container-fluid m" style = {{backgroundColor : "#f6f6f6" , height : na ? "270px" : "" }} >
    <div style = {{backgroundColor : "white" , boxShadow: "0px 0px 30px 0px rgb(0 0 0 / 18%" , width: "110px" ,
    height: na ? "270px" : "120px" ,position : "absolute" , top : "0px" , left : "50px" , zIndex : "20" , borderRadius : "10px"}} >
  <Link to = "/" > <img  src = {Logo} alt = "Logo" style = {{ position : "absolute" , top : "10px" , left : "12px" , zIndex : "10" , height :  "100px" }} /> </Link>
  </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav" >
      <ul class="navbar-nav ms-auto  mb-2 mb-lg-0"   >
        <li class="nav-item mar">
          <a class="nav-link active" aria-current="page" style = {{color : "#154e99" , fontSize : "larger" , position : na ? "absolute" : "" , left : na ? "220px" : "" }} >About Us </a>
          {na ? <NavExpand  /> : "" }
          
        </li>
        <li class="nav-item mar">
          <a class="nav-link" style = {{color : "#154e99" , marginRight : "0px" ,fontSize : "larger" , position : na ? "absolute" : "" , left : na ? "350px" : ""}} >Products</a>
          {na ? <NavProducts /> : " "}
        </li>
        <li class="nav-item mar">
          <a class="nav-link" style = {{color : "#154e99" , fontSize : "larger" , marginLeft : na ? "20px" : ""  ,  }} >Sustainability</a>
          {na ? <NavSustain/>  : ""}
        </li>
        <li class="nav-item mar ">
          <a class="nav-link disabled" style = {{color : "#154e99" , fontSize : "larger" }}>CSR</a>
          {na ? <NavCSR />  : ""}
        </li>
        <li class="nav-item mar">
          <a class="nav-link active" aria-current="page" style = {{color : "#154e99" , fontSize : "larger" , marginLeft : na ? "25px" : ""}}>News & Media</a>
          {na ? <NavNews/>  : ""}
        </li>
        <li class="nav-item mar">
          <a class="nav-link active" aria-current="page" style = {{color : "#154e99" , fontSize : "larger"}}>Contact Us</a>
          {na ? <NavContact/>  : ""}
        </li>
        <li class="nav-item mar mar-lf">
          <a class="nav-link active" aria-current="page" style = {{color : "#154e99" , fontSize : "larger" }}>Careers</a>
           {na ? <NavCareer/>  : ""}         
        </li>
      </ul>
    </div>
  </div>
</nav>

)
}

export default Nav ;