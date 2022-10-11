import { Component } from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub,faLinkedin,faTwitter } from "@fortawesome/free-brands-svg-icons";

export class Footer extends Component{
    render(){
        return(
            <section className="foot">
                <div className="icons">
                    <a href="https://github.com/walidchahidan" target={"_blank"} ><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                    <a href="https://www.linkedin.com/in/walid-chahidane/" target={"_blank"} ><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
                    <a href="#" ><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                   
                </div>
                <p>© 2022 Walid Chahidane, Tous droits réservés.</p>
            </section>
        )
    }
    
}