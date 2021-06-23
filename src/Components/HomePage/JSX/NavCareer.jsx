import React , {useState} from "react";

function NavCareer(){
    const [ one  , setOne ] = useState(false) ;
const [  two , setTwo ] = useState(false) ;
const [  three , setThree ] = useState(false) ;
const [   four, setFour ] = useState(false) ;

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



 return(
     <ul style = {{listStyle : "none" , color : "#a9b7c2" , fontSize : "0.9rem" , position : "absolute" , left : "950px"}}>
         <li onMouseOver = {one1} onMouseOut = {one11} style = {{color : one ? "#154e99": "#a9b7c2" }}>Overview</li>
         <li onMouseOver = {two2} onMouseOut = {two22} style = {{color : two ? "#154e99": "#a9b7c2" }}>Key Benefits</li>
         <li onMouseOver = {three3} onMouseOut = {three33} style = {{color : three ? "#154e99": "#a9b7c2" }}>Culture</li>
         <li onMouseOver = {four4} onMouseOut = {four44} style = {{color : four ? "#154e99": "#a9b7c2" }}>Apply Now</li>
     </ul>
 )
}

export default NavCareer ;