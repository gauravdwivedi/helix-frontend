import React, { Component } from "react";

export default class AddCourse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courseTitle: "",
      courseDescription: "",
      courseDuration: "",
    };
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: [e.target.value],
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    console.log(this.state.courseTitle);
    console.log(this.state.courseDuration);
    fetch("http://127.0.0.1:5000/api/v1/course/add", {
      method: "POST",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title: this.state.courseTitle,
        description: this.state.courseDescription,
        duration: this.state.courseDuration,
      }),
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.onSubmit(e)}>
          <input
            placeholder="Enter course title"
            type="text"
            name="courseTitle"
            onChange={this.handleOnChange}
            value={this.state.courseTitle}
          />
          <input
            type="text"
            placeholder="Enter course description "
            name="courseDescription"
            onChange={this.handleOnChange}
            value={this.state.courseDescription}
          />
          <input
            type="number"
            placeholder="Enter course Duration"
            name="courseDuration"
            onChange={this.handleOnChange}
            value={this.state.courseDuration}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
