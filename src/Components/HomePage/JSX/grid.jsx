import React, { useState } from "react" ;
import CardA from "./CardA";
import CardB from "./CardB";

function Grid(){
  
  const [isHover1 , setIsHover1] = useState(false);
  const [isHover2 , setIsHover2] = useState(false);
  const [isHover3 , setIsHover3] = useState(false);
  const [isHover4 , setIsHover4] = useState(false);
  const [isHover5 , setIsHover5] = useState(false);
  const [isHover6 , setIsHover6] = useState(false);

  const heading = [
    {
      txt1 : "heading1"
    },
    {
      txt2 : "heading2"
    },
    {
      txt3 : "heading3"
    },
    {
      txt4: "heading4"
    },
    {
      txt5 : "heading5"
    },
    {
      txt6 : "heading6"
    }
  ]
  const data = [
    
    {
      title1 : "head1" ,
      subtitle1 : "subtitle1",
      content1 : "Lorem ipsum dolor sit amet tempor incididun ali"
    },
    {
      title2 : "head2" ,
      subtitle2 : "subtitle2",
      content2 : "Lorem ipsum dolor sit amet tempor incididu ali"
    },
    {
      title3 : "head3" ,
      subtitle3 : "subtitle3",
      content3 : "Lorem ipsum dolor sit amet, cmpor incididunt ut ali"
    },
    {
      title4 : "head4" ,
      subtitle4 : "subtitle4",
      content4 : "Lorem ipsum dolor sit amet,tempor incididunt na ali"
    },
    {
      title5 : "head5" ,
      subtitle5 : "subtitle5",
      content5 : "Lorem ipsum dolor sit amet,tempor incididunt na ali"
    },
    {
      title6 : "head6" ,
      subtitle6 : "subtitle6",
      content6 : "Lorem ipsum dolor sit amet,empor incididunt ua ali"
    }
  ]

  function mouseOverHandler1(){
    setIsHover1(true)
  }
  function mouseOverHandler2(){
    setIsHover2(true)
  }
  function mouseOverHandler3(){
    setIsHover3(true)
  }
  function mouseOverHandler4(){
    setIsHover4(true)
  }
  function mouseOverHandler5(){
    setIsHover5(true)
  }
  function mouseOverHandler6(){
    setIsHover6(true)
  }
  function mouseOutHandler1(){
    setIsHover1(false);
  }function mouseOutHandler2(){
    setIsHover2(false);
  }function mouseOutHandler3(){
    setIsHover3(false);
  }function mouseOutHandler4(){
    setIsHover4(false);
  }function mouseOutHandler6(){
    setIsHover6(false);
  }function mouseOutHandler5(){
    setIsHover5(false);
  }


return(
  <div className = "container" style ={{marginTop : "60px"}}>
  <div className = "row">
    <div className = "col-lg-4 col-md-6" onMouseOver = {mouseOverHandler1} onMouseOut = {mouseOutHandler1}>
    {isHover1 ? <CardB title = {data[0].title1} subtitle = {data[0].subtitle1} content = {data[0].content1}/> : <CardA items = {heading[0].txt1} />}

    </div>
    <div className = "col-lg-4 col-md-6" onMouseOver = {mouseOverHandler2} onMouseOut = {mouseOutHandler2}>
    {isHover2 ? <CardB title = {data[1].title2} subtitle = {data[1].subtitle2} content = {data[1].content2}/> : <CardA items = {heading[1].txt2} />}

    </div>
    <div className = "col-lg-4 col-md-6" onMouseOver = {mouseOverHandler3} onMouseOut = {mouseOutHandler3}>
    {isHover3 ? <CardB title = {data[2].title3} subtitle = {data[2].subtitle3} content = {data[2].content3}/> : <CardA items = {heading[2].txt3} />}
    </div>
    <div className = "col-lg-4 col-md-6" onMouseOver = {mouseOverHandler4} onMouseOut = {mouseOutHandler4}>
    {isHover4 ? <CardB title = {data[3].title4} subtitle = {data[3].subtitle4} content = {data[3].content4}/> : <CardA items = {heading[3].txt4} />}

    </div> <div className = "col-lg-4 col-md-6" onMouseOver = {mouseOverHandler5} onMouseOut = {mouseOutHandler5}>
    {isHover5 ? <CardB title = {data[4].title5} subtitle = {data[4].subtitle5} content = {data[4].content5}/> : <CardA items = {heading[4].txt5} />}

    </div> <div className = "col-lg-4  col-md-6" onMouseOver = {mouseOverHandler6} onMouseOut = {mouseOutHandler6}>
    {isHover6 ? <CardB title = {data[5].title6} subtitle = {data[5].subtitle6} content = {data[5].content6}/> : <CardA items = {heading[5].txt6} />}

    </div>
  </div>
  </div>
)
    }

export default Grid ;