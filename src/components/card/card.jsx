import { Component } from "react";
import "./card.css";
import Aos from "aos";
import "aos/dist/aos.css";

export class Card extends Component {
  componentDidMount(){
    Aos.init({duration:2000});
}
  render() {
    return (
      // <div class="container">
      //   <img src={this.props.image}  />
      //   <div class="overlay">
      //     <div class="text">{this.props.text}</div>
      //   </div>
      // </div>
      <div className="card col-md-4 col-6 col-lg-3 " data-aos="zoom-in" >
        <img src={this.props.image} alt="" />
        <div class="overlay">
          <a href={this.props.lien} target="_blank"><div class="text" >{this.props.text}</div></a>
        </div>
      </div>
    );
  }
}
