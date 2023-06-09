import React from "react";
import timelineElements from "./Timeline";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";


function WorkAndEducation() {
    return (
    <div className="ml-28 mr-28 mb-28 rounded-full bg-yellow-50">
        <p className="font-Allura text-7xl text-center font-bold tracking-wider pt-4 pb-4">Work and Education</p>
        <VerticalTimeline>
            {
                timelineElements.map(element => {
                    let isWorkIcon = element.icon === "work";
                    return (
                        <VerticalTimelineElement
                          key={element.key}
                          date={element.date}
                          dateClassName="date"
                          icon={ <img src={element.iconImg} />}
                        >
                          <h3 className="vertical-timeline-element-title">
                            {element.title}
                          </h3>
                          <p className="vertical-timeline-element-subtitle">
                            {element.location}
                          </p>
                          <p id="description" style={{ whiteSpace: "pre-line" }}>{element.description}</p>
                        </VerticalTimelineElement>
                      );            
                })
            }
        </VerticalTimeline>
    </div>
    )

}
export default WorkAndEducation;