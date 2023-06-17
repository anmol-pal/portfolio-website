import React from "react";
import timelineElements from "./Timeline";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import { FaUserGraduate } from "react-icons/fa";
import { CgWorkAlt } from 'react-icons/cg';

function WorkAndEducation() {
  const workIconStyles = { background: "#20b2aa" };
  const schoolIconStyles = { background: "#f9c74f" };

    return (
    <>
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
                          iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                          icon={isWorkIcon ? <CgWorkAlt /> : <FaUserGraduate />}
                        >
                          <h3 className="vertical-timeline-element-title">
                            {element.title}
                          </h3>
                          <img src={element.iconImg}></img>

                          <p className="vertical-timeline-element-subtitle">
                            {element.location}
                          </p>
                          {/* <p id="description" style={{ whiteSpace: "pre-line" }}>{element.description}</p> */}
                          <p> {element.buttonText}</p>
                        </VerticalTimelineElement>
                      );            
                })
            }
        </VerticalTimeline>
    </div>
    </>
    )

}
export default WorkAndEducation;