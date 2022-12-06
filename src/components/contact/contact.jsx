import { Component } from "react";
import "./contact.css";
import Aos from "aos";
import "aos/dist/aos.css";

export class Contact extends Component{
    componentDidMount(){
        Aos.init({duration:2000});
    }
    render(){
        return(
             <section id="contact">
                <form >
                <div className="head_contact">
                    <h1>LET’S START A PROJECT TOGETHER,FEEL FREE TO CONTACT ME</h1><hr />
                </div>
                
                <div  className="inputs" data-aos="fade-up">
                    
                    <input placeholder="Name" type="text" />
                    <input placeholder="E-mail" type="text" />
                    <input placeholder="Message" className="textzone" type="text" />
                    
                    <button type="submit" onSubmit={""}>SEND</button>
                </div>
                </form>
                
             </section>

        )
    }
}