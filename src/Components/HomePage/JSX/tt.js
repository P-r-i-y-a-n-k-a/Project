import React from "react" ;
import "../CSS/Timeline.css";
const TimelineItem = (props) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background:"grey" , borderRadius : "10px" }}>
                {props.items.tag}
            </span>
            <time>{props.items.date}</time>
            <p>{props.items.content}</p>
           
            <span className="circle" />
        </div>
    </div>
);

export default TimelineItem ;