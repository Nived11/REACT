import React from "react";
import "./App.css"

class App extends React.Component{
  state={
    count:0
  }

  counter=()=>{
    this.setState({count:this.state.count+1})
    
  }
  render(){
    return(
      <div>
        <button onClick={this.counter}>Count {this.state.count}</button>
      </div>
    )
  }
}

export default App;