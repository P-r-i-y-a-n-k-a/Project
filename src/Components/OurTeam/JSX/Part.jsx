import React , {Fragment} from "react" ;
import Nav from "../../HomePage/JSX/Nav";
import PartTwo from "./PartTwo";

function Part(){
    const TeamMembers = [
        {
            name : "Name One" , 
            title : "Title one"
        },
        {
            name : "Name Two" , 
            title : "Title Two"
        },
        {
            name : "Name Three" , 
            title : "Title Three"
        },
        {
            name : "Name Four" , 
            title : "Title Four"
        },
    ]

    return(
       <Fragment>
           <Nav />
           <h1 style = {{marginTop : "50px" , color : "#154e99" , textAlign : "center"}}>Our Team</h1>
           <div className = "container">
               <div className = "row" >
                   <div className = "col-lg-3" >
                       <PartTwo items = {TeamMembers[0]} />
                   </div>
                   <div className = "col-lg-3">
                       <PartTwo items = {TeamMembers[1]} />
                   </div>
                   <div className = "col-lg-3">
                       <PartTwo items = {TeamMembers[2]} />
                   </div>
                   <div className = "col-lg-3" >
                       <PartTwo items = {TeamMembers[3]} />
                   </div>
               </div>
           </div>
           
       </Fragment>
    )
}

export default Part ;