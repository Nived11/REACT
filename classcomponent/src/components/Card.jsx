import  { Component } from "react";

class Card extends Component{

    render(){
        return(
            <div className="card">
            <div className="heading">
              <h1>{this.props.name}</h1>
            </div>
            <div className="content">
              {this.props.content}
            </div>
            </div>
            
        );
    }
}
export default Card;