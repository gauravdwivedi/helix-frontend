import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Course from "./components/Course";
import AddCourse from "./components/AddCourse";
import ViewTopics from "./components/ViewTopics";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [],
      topics: [],
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:5000/api/v1/course/all-courses")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.message[0]._id);
        this.setState({ courses: data.message });
      });
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: [e.target.value],
    });
  };

  handleSubmit = (e) => {
    console.log("Submit");
  };

  handleViewTopics = (course_id) => {
    console.log("View topic", course_id);

    fetch(`http://127.0.0.1:5000/api/v1/topic/${course_id}/all-topics`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        this.setState({ topics: data, istopic: !this.state.istopic });
        console.log("Topic State", this.state.topics);
      });
  };

  handleAddTopic = (course_id) => {
    console.log("Add topic", course_id);
  };

  render() {
    const { courses, topics } = this.state;
    return (
      <Router>
        <div>
          Online Training Classes Teachers Course Manipulation Section
          <div>
            <Link to="/">Home</Link>
            <Link to="/addcourse">Add New Course</Link>
            <Switch>
              <Route
                path="/"
                exact
                component={() => (
                  <Course
                    course={courses}
                    handleViewTopics={this.handleViewTopics}
                    handleAddTopic={this.handleAddTopic}
                  />
                )}
              />
              <Route
                path="/viewtopics"
                component={() => <ViewTopics topics={topics} />}
              />
              <Route path="/addcourse" component={() => <AddCourse />} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
