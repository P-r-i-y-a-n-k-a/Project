import TimelineItem  from "./tt";

const Timeline = () =>
{
    const items = [
        {  tag : "ghjkd",
           date : "Feb 2001" ,
            title : "chduvh s",
            content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        { tag : "ghjkd",
            date : "Feb 2001" ,
             title : "chduvh s",
             content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
         },
         { tag : "ghjkd",
            date : "Feb 2001" ,
             title : "chduvh s",
             content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
         },
         { tag : "ghjkd",
            date : "Feb 2001" ,
             title : "chduvh s",
             content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
         },
         { tag : "ghjkd",
            date : "Feb 2001" ,
             title : "chduvh s",
             content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
         },
         { tag : "ghjkd",
            date : "Feb 2001" ,
             title : "chduvh s",
             content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
         },
    ]
    return(
        <div className="timeline-container pr">
           {items.map((data) => (
                <TimelineItem  items = {data}/>
            ))}
        </div>) 
}

export default Timeline ;