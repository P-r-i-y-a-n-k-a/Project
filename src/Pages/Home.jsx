import React, { Fragment } from "react" ;
import Nav from "../Components/HomePage/JSX/Nav";
import Carousel from "../Components/HomePage/JSX/carousel";
import Grid from "../Components/HomePage/JSX/grid";
import Other from "../Components/HomePage/JSX/Other";
import Timeline from "../Components/HomePage/JSX/Timeline";
import Text from "../Components/HomePage/JSX/Text";
import Images from "../Components/HomePage/JSX/Images";
import Footer from "../Components/HomePage/JSX/Footer";
import dp from "../images/dp.jpg";
import download from "../images/download.jpg";
import download2 from "../images/download2.jpg";



function Home(){
    const arr = [
        {
            src : dp,
            alt : "img1"
        },
      {  
        src : download,
        alt : "img1"
    },
   { 
    src : download2 ,
    alt : "img1"
},
{
src : dp,
alt : "img1"
}
    ]
    
return(
    <Fragment>
        <Nav />
        <Carousel/>
        <Grid />
        <Other />
        <Timeline/>
        <Text />
        {arr.map(ar => {
            return(
                <Images src = {ar.src} alt = {ar.alt} />
            )
        })}
        <Footer />
    </Fragment>
)
}

export default Home ;

