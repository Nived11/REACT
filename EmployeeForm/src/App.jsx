import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {name: "",email: "",position: "",department: "" ,phone:""};

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);

    // Save the submitted data
    this.setState({
      name: "",email: "",position: "",department: "",phone:""
    });
  };

  render() {
    const { name, email, position, department, phone } = this.state;

    return (
      <div className="app">
        <h1>Employee Detail Form</h1>
        <form className="registration-form" onSubmit={this.handleSubmit}>
          <label>Name:
            <input type="text" name="name" value={name} onChange={this.handleChange}
            placeholder="Enter your name" required/>
          </label>
          <label>
            Email:
            <input type="email" name="email"  value={email} onChange={this.handleChange} 
            placeholder="Enter your email" required/>
          </label>
          <label>
            Position:
            <input type="text" name="position"  value={position} onChange={this.handleChange}
              placeholder="Enter your position" required  />
          </label>
          <label>
            Department:
            <input type="text" name="department" value={department}  onChange={this.handleChange}
              placeholder="Enter your department"  required />
          </label>
          <label>
            Phone:
            <input type="text" name="phone" value={phone}  onChange={this.handleChange}
              placeholder="Enter your number"  required />
          </label>
          <button type="submit">Submit</button>
        </form>

      </div>
    )}
}

export default App;
