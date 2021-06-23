import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function NavExpand(){
const [ one  , setOne ] = useState(false) ;
const [  two , setTwo ] = useState(false) ;
const [  three , setThree ] = useState(false) ;
const [   four, setFour ] = useState(false) ;
const [   five, setFive ] = useState(false) ;
const [  six , setSix ] = useState(false) ;


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

function    six6(){
    setSix(true);
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

function    six66(){
setSix(false);
}



 
 return(
     <nav >
         <ul style = {{listStyle : "none"  , position : "absolute" , left : "195px" , top : "100px" , fontSize : "0.9rem" }}  >
             <li onMouseOver = {one1}  onMouseOut = {one11} > <Link to = "./we" style = {{color :  one ? "#154e99" : "#a9b7c2" , textDecoration : "none"}}>Who we are</Link> </li>
             <li onMouseOver = {two2} onMouseOut = {two22} style = {{color :   two ? "#154e99" : "#a9b7c2"}}> <Link to = "./team"  style = {{color :  two ? "#154e99" : "#a9b7c2" , textDecoration : "none"}}>   Team   </Link>  </li>
             <li onMouseOver = {three3}  onMouseOut = {three33}style = {{color :  three ? "#154e99" : "#a9b7c2"}}> <HashLink to = "/mission#mission"  style = {{color :  three ? "#154e99" : "#a9b7c2" , textDecoration : "none"}}>  Mission  </HashLink> </li>
             <li onMouseOver = {four4} onMouseOut = {four44} style = {{color : four  ? "#154e99" : "#a9b7c2"}}> <HashLink to = "/vision#vision"  style = {{color :  four ? "#154e99" : "#a9b7c2" , textDecoration : "none"}}>   Vision  </HashLink> </li>
             <li onMouseOver = {five5}  onMouseOut = {five55}style = {{color :  five ? "#154e99" : "#a9b7c2"}}> <HashLink to =  "/values#values"  style = {{color :  five ? "#154e99" : "#a9b7c2" , textDecoration : "none"}}>   Values  </HashLink> </li>
             <li onMouseOver = {six6} onMouseOut = {six66} style = {{color :  six ? "#154e99" : "#a9b7c2"}}> <HashLink to = "/corporate#corporate"  style = {{color :  six ? "#154e99" : "#a9b7c2" , textDecoration : "none"}}>  Corporate Profile  </HashLink> </li>
         </ul>
     </nav>
 )
}

export default NavExpand ;