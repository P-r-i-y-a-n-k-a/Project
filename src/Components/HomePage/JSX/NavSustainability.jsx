import React, { useState } from "react";

function NavSustain(){
    const [ one  , setOne ] = useState(false) ;
const [  two , setTwo ] = useState(false) ;
const [  three , setThree ] = useState(false) ;
const [   four, setFour ] = useState(false) ;
const [five , setFive] = useState(false);
    
    function one1(){
        setOne(true)
    }
function    two2(){
    setTwo(true);
}

function three3(){
    setThree(true);
}

function    four4(){
    setFour(true);
}

function    five5(){
    setFive(true);
}
function one11(){
    setOne(false)
}
function    two22(){
setTwo(false);
}

function three33(){
setThree(false);
}

function    four44(){
setFour(false);
}

function    five55(){
setFive(false);
}


 return(
     <ul style = {{listStyle : "none" , color : "#a9b7c2" , fontSize : "0.9rem" }}>
         <li onMouseOver = {one1} onMouseOut = {one11} style = {{color : one ? "#154e99" : "#a9b7c2"}}>Gallery</li>
         <li onMouseOver = {two2} onMouseOut = {two22} style = {{color : two ? "#154e99" : "#a9b7c2"}}>Practices</li>
         <li onMouseOver = {three3} onMouseOut = {three33} style = {{color : three ? "#154e99" : "#a9b7c2"}}> Outcome</li>
         <li onMouseOver = {four4} onMouseOut = {four44} style = {{color : four ? "#154e99" : "#a9b7c2"}}> Report</li>
         <li onMouseOver = {five5} onMouseOut = {five55} style = {{color : five ? "#154e99" : "#a9b7c2"}}>Blogs</li>
     </ul>
 )
}

export default NavSustain ;