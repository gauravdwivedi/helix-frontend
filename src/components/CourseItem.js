import React from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

export default function CourseItem(props) {
  const { course, handleAddTopic, handleViewTopics } = props;

  return (
    <div>
      <div>
        Course Title : {course.title}
        <Router>
        <button onClick={() => handleAddTopic(course._id)}>Add Topic</button>
        <button onClick={() => handleViewTopics(course._id)}>
         <Link to="/viewtopics">view topics</Link> 
        </button>
        
        </Router>
        
      </div>
    </div>
  );
}
