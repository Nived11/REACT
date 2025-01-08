import React from "react";

class App extends React.Component{
  state={name:"",des:"",salary:""}
  
  handleChange=(e)=>{
    this.setState((pre)=>({...pre,[e.target.name]:e.target.value}))
  }
  handleSubmit=(e)=>{
    e.preventDefault()
    console.log(this.state);
    this.setState({
      name:"",des:"",salary:""
    })
    
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.name}
          type="text"  name="name"  placeholder="name" />
          <input onChange={this.handleChange} value={this.state.des}
          type="text" name="des" placeholder="designation" />
          <input onChange={this.handleChange} value={this.state.salary}
          type="text" name="salary" placeholder="salary" />
          <input type="submit" />
        </form>
      </div>
    )
  }
}
export default App;