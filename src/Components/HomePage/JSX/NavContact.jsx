import React , {useState} from "react";

function NavContact(){
    const [ one  , setOne ] = useState(false) ;
const [  two , setTwo ] = useState(false) ;


    function one1(){
        setOne(true)
    }
function    two2(){
    setTwo(true);
}


function one11(){
    setOne(false)
}
function    two22(){
setTwo(false);
}




 return(
     <ul style = {{listStyle : "none" , position : "absolute" , left : "830px" , color : "#a9b7c2" , fontSize : "0.9rem"}}>
         <li onMouseOver = {one1} onMouseOut = {one11} style = {{ color :one  ? "#154e99" : "#a9b7c2"}}>Follow Us</li>
         <li onMouseOver = {two2} onMouseOut = {two22} style = {{ color :two  ? "#154e99" : "#a9b7c2"}}>Contact From</li>
     </ul>
 )
}

export default NavContact ;