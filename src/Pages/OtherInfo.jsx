import React from "react" ;
import { Fragment } from "react/cjs/react.production.min";
import CmpOne from "../Components/OtherInfo/CmpOne";
import CmpTwo from "../Components/OtherInfo/CmpTwo";
import CmpThree from "../Components/OtherInfo/CmpThree";
import CmpFour from "../Components/OtherInfo/CmpFour";
import Nav from "../Components/HomePage/JSX/Nav";
import {Route} from "react-router-dom";

function OtherInfo(){
    const items = 
    [
        {title : "Vision"},
        {title : "Mission"},
        {title : "Values"},
        {title : "Corporate Profile"}
    ]
 return(
     <Fragment>
         <Nav/>
         <div id = "vision"> <CmpOne items = {items[0]}/></div>
         <div id = "mission"> <CmpTwo items = {items[1]}/></div>
         <div id = "values"><CmpThree items = {items[2]}/></div>
         <div id = "corporate"><CmpFour items = {items[3]}/></div> 
     </Fragment>
 )
}

export default OtherInfo ;