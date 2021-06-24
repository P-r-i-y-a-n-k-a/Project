import React , {Fragment} from "react";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import OurTeam from "./Pages/OurTeam";
import OtherInfo from "./Pages/OtherInfo";
import {Route , Switch , } from "react-router-dom";
import CmpOne from "./Components/OtherInfo/CmpOne";


function App(){
 return(
   <Fragment>
     <Switch>
     <Route path = "/" exact>
       <Home/>
     </Route>
     <Route path = "/we" exact>
       <AboutUs/>
     </Route>
     <Route path = "/team" exact>
       <OurTeam/>
     </Route>
     
     <Route><OtherInfo/></Route>
     </Switch>
    
   {/* <Home/> */}
   {/* <AboutUs /> */}
   {/* <OurTeam /> */}
   {/* <OtherInfo /> */}
   </Fragment>
 )
}

export default App; 