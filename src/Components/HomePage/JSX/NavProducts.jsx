import React , {useState} from "react";

function NavProducts(){
    const [ one  , setOne ] = useState(false) ;
const [  two , setTwo ] = useState(false) ;
const [  three , setThree ] = useState(false) ;

function one1(){
    setOne(true)
}
function    two2(){
setTwo(true);
}

function three3(){
setThree(true);
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



    return(
        <ul style = {{listStyle : "none" , position : "absolute" , left : "325px" ,top : "100px" , color : "#a9b7c2" , fontSize : "0.9rem" }}>
            <li onMouseOver = {one1} onMouseOut = {one11} style = {{color : one ? "#154e99" : "#a9b7c2"}}>Lorem Ipsum</li>
            <li onMouseOver = {two2} onMouseOut = {two22} style = {{color : two ? "#154e99" : "#a9b7c2"}}>Lorem Ipsum</li>
            <li onMouseOver = {three3} onMouseOut = {three33} style = {{color : three ? "#154e99" : "#a9b7c2"}}>Lorem Ipsum</li>
        </ul>
    )
}

export default NavProducts ;