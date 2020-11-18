import React from "react";
import CourseItem from "./CourseItem";

export default function Course(props) {
  const { course,handleViewTopics,handleAddTopic } = props;
  console.log(course);
  return (
    <div>
      {course.map((item) => (
        <CourseItem course={item} handleViewTopics={handleViewTopics} handleAddTopic={handleAddTopic} />
      ))}
    </div>
  );
}
