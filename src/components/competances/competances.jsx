import { Component } from "react";
import "./competances.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import {
    faPhp,
    faLaravel,
    faJs,
    faReact,
    faBootstrap,
    faHtml5,
    faCss3
  } from "@fortawesome/free-brands-svg-icons";
  import img from "../../images/ver.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

export class Competances extends Component{
    componentDidMount(){
        Aos.init({duration:2000});
    }
    render(){
        return(
            <section id="competances" >
                <div className="all">
                    <div className="div_image col-5" data-aos="fade-right"><img src={img} alt="" /></div>
                    <div className="bars_side col-6" data-aos="fade-left">
                        <div className="head_div"><h1>Skills</h1><hr /></div>
                            <div className="bars">
                                <div className="container cssbar"><div className="icon_name"><FontAwesomeIcon icon={faCss3} style={{color:"white" ,fontSize:"1.8em"}}></FontAwesomeIcon>CSS</div>
                                    <div className="bar ">70%</div>
                                </div>
                                <div className="container htmlbar"><div className="icon_name"><FontAwesomeIcon icon={faHtml5} style={{color:"white" ,fontSize:"1.8em"}}></FontAwesomeIcon>HTML</div>
                                    <div className="bar ">75%</div>
                                </div>
                                <div className="container bootstrapbar"><div className="icon_name"><FontAwesomeIcon icon={faBootstrap} style={{color:"white" ,fontSize:"1.8em"}}></FontAwesomeIcon>BOOTSTRAP</div>
                                    <div className="bar ">70%</div>
                                </div>
                                <div className="container jsbar"><div className="icon_name"><FontAwesomeIcon icon={faJs} style={{color:"white" ,fontSize:"1.8em"}}></FontAwesomeIcon>JAVA SCRIPT</div>
                                    <div className="bar ">70%</div>
                                </div>
                                <div className="container reactbar"><div className="icon_name"><FontAwesomeIcon icon={faReact} style={{color:"white" ,fontSize:"1.8em"}}></FontAwesomeIcon>REACT JS</div>
                                    <div className="bar ">75%</div>
                                </div>
                                <div className="container phpbar"><div className="icon_name"><FontAwesomeIcon icon={faPhp} style={{color:"white" ,fontSize:"1.8em"}}></FontAwesomeIcon>PHP</div>
                                    <div className="bar ">75%</div>
                                </div>
                                <div className="container laravelbar"><div className="icon_name"><FontAwesomeIcon icon={faLaravel} style={{color:"white" ,fontSize:"1.8em"}}></FontAwesomeIcon>LARAVEL</div>
                                    <div className="bar ">70%</div>
                                </div>
                                <div className="container mysqlbar"><div className="icon_name"><FontAwesomeIcon icon={faDatabase} style={{color:"white" ,fontSize:"1.8em"}}></FontAwesomeIcon>MY SQL</div>
                                    <div className="bar ">77%</div>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
        )
    }
}