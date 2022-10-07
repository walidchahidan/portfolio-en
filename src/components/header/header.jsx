import { Component } from "react";
import ParticlesBackground from "../ParticlesBackground";
import "./header.css";
import cvpdf from "./CV de Walid Chahidane.pdf";
import { TypeAnimation } from "react-type-animation";
import logo from "../../images/logoportfolio.png";

import Aos from "aos";
import "aos/dist/aos.css";

export class Header extends Component{
  componentDidMount(){
    Aos.init({duration:2000});
}
    render(){
        return(
           <section className="head" >
            <img id="logo" data-aos="zoom-in" src={logo} alt="" />
            <ParticlesBackground />
            <div className="titre" data-aos="fade-up">
            
            <h1>Hi! I'm Walid </h1>
            
            <TypeAnimation
            sequence={[
              "Welcome to my portfolio", // Types 'One'
              1000, // Waits 1s
               "I'am a Full stack Developper", // Deletes 'One' and types 'Two'
              3000, // Waits 2s
              /* "to my world", // Types 'Three' without deleting 'Two'
              6000, */
            ]}
            wrapper="b"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "3em",color:"wheat"}}
          />
          
            </div>
            <a href="#presentation" className="btn" data-aos="fade-up">About me</a>
            <a href={cvpdf} download className="btn" id="downloadbtn" data-aos="fade-up" data-aos-delay="2000">Download CV</a>
           </section>
        )
    }
}