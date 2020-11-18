import React from "react";
import TopicItem from "./TopicItem";

export default function ViewTopics(props) {
  const { topics } = props;
  console.log(topics);
  return (
    <div>
      {topics.map((item) => (
        <TopicItem topic={item} />
      ))}
    </div>
  );
}
