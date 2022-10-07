import { Component } from "react";
import "./nav.css";

export class Nav extends Component{
    render(){
        return(
            <nav>
                <ul>
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#presentation">Presentation</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#competances">Competences</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        )
    }
}