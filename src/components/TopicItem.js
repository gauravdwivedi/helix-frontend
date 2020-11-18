import React from "react";

export default function TopicItem(props) {
  const { topic } = props;

  return (
      <div>Topic Title : {topic.title}</div>
   
  );
}
