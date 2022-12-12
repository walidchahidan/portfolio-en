import { Component } from "react";
import "./present.css";
import Aos from "aos";
import "aos/dist/aos.css";

export class Presentation extends Component {
  componentDidMount(){
    Aos.init({duration:2000});
}
  render() {
    return (
      <section id="presentation">
        <div className="div_pres ">
          
          <h1 className="pres_h">PRESENTATION</h1>
          <hr />
          <p data-aos="fade-up">
            I am  <b style={{ color: "#dcc9b6" }}> Walid Chahidane </b>I am 22 years old, I am passionate about programming and 
            <b style={{ color: "#dcc9b6" }}> Web Development</b>
            
          </p>
          <p data-aos="fade-up">
          I design and create websites from the specifications to the online release. I also develop in <b style={{ color: "#dcc9b6" }}>PHP/LARAVEL</b>, which allows me to develop complete websites.
          </p>
          <p data-aos="fade-up">I have some interesting projects to see. <a href="#projects">here</a></p>
        </div>

      </section>
    );
  }
}
