import React from "react" ;
import { Fragment } from "react/cjs/react.production.min";
import Team from "../../../images/Team.png";

function PartOne(){
return(
    <Fragment>
        <h1 style = {{textAlign : "center" , color : "#154e99" , marginTop : "50px"}}>Who we are</h1>
        <div class="container">
           <div class="row">
               <div class="col" style = {{marginTop : "30px"}}>
                  <div class="card" style = {{width : "300px" , height : "100%" }}>
                       <img src = {Team}  class="card-img-top" alt="..." style = {{height : "100%"}} />
  
                  </div>
               </div>
               <div class="col">
                   <div class="card" style = {{marginTop : "30px"}}>
                       <div class="card-body" style = {{width : "600px" }}>
                           <p style = {{textAlign : "justify"}}>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique risus nec feugiat in. Suscipit tellus mauris a diam maecenas sed. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. Vestibulum sed arcu non odio euismod lacinia at. Nunc pulvinar sapien et ligula ullamcorper malesuada. Sagittis nisl rhoncus mattis rhoncus urna. Et netus et malesuada fames ac turpis. Lectus magna fringilla urna porttitor rhoncus. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. In vitae turpis massa sed elementum. Vivamus at augue eget arcu dictum varius duis at consectetur. Viverra vitae congue eu consequat ac felis donec et.Consequat id porta nibh venenatis cras sed felis eget. Luctus
                           </p>
                         </div>
                   </div>
               </div>    
            </div>
       </div>
    </Fragment>
)
}

export default PartOne ;