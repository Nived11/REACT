import React from "react";
import "./App.css"
import Card from "./components/Card";
import Nav from "./components/Nav";
class App extends React.Component{
  Cards=[
    { name: "Apple", content: "Apple is a nutritious fruit, rich in vitamins." },
    { name: "Orange", content: "Oranges are known for their high Vitamin C content." },
    { name: "Mango", content: "Mangoes are sweet, juicy, and tropical fruits." },
    { name: "Grapes", content: "Grapes can be eaten fresh or dried to make raisins." }]

  // data={backgroundColor:"green" ,color:"white"}
  render(){
    return(
      // <div>
      //   <h1 style={this.data}>hello world</h1>
      // </div>
      <div className="main">
        <nav>
          <Nav/>
        </nav>
        <div className="container">
          {this.Cards.map((card, index) => (
            <Card key={index} name={card.name} content={card.content} />
          ))}
        </div>
      </div>
    )
  }
}

export default App;