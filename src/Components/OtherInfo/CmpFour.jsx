import React , {Fragment} from "react";
import "../HomePage/CSS/Other.css";
import Work from "../../images/Work.jpg";

function CmpOne(props){
    return(
    <Fragment >
        <h1 style ={{textAlign : "center" , color : "#154e99" , marginTop : "50px"}}>{props.items.title}</h1>
    <div className = "tx" style = {{ height : "250px" , paddingTop : "40px" , paddingBottom : "30px" }}>
    <img src = {Work} alt = "reference picture" className ="img" ></img>
    <p className="t"> 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  
    </div>
</Fragment>
    )
}

export default CmpOne ;