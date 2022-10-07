import { Component } from "react";
import { Card } from "../card/card";
import "./projects.css";
import green from "../../images/Capture green office.png";
import fish from "../../images/Capture fish.png";
import squad from "../../images/Capture squad.png";
import appvilla from "../../images/Capture Appvilla.png";
import cv from "../../images/cv.png";
import sommeup from "../../images/somme up.png";
import quotes from "../../images/quotes.png";
import devinette from "../../images/devinette.png";
import calcul from "../../images/calcul.png";
import Aos from "aos";
import "aos/dist/aos.css";

export class Projects extends Component{
    componentDidMount(){
        Aos.init({duration:2000});
    }
    render(){
        return(
            <section id="projects">
                <div className="projects_head">
                <h1>PROJECTS</h1><hr />
                </div>
                <div className="cards " >
                  <Card lien="https://walidchahidan.github.io/Green-Office/" image={green} text="Green Office" />
                  <Card lien="https://walidchahidan.github.io/fish-and-chips/" image={fish} text="Fish and ships"/>
                  <Card lien="https://walidchahidan.github.io/Squad/" image={squad} text="Squad Free"/>
                  <Card lien="https://walidchahidan.github.io/hackathon/" image={appvilla} text="Appvilla"/>
                  <Card lien="https://walidchahidan.github.io/cv_walid/" image={cv} text="Mon CV"/>
                  <Card lien="https://walidchahidan.github.io/Somme/" image={sommeup} text="Jeu Somme"/>
                  <Card lien="https://walidchahidan.github.io/quotes/" image={quotes} text="Quotes generator"/>
                  <Card lien="https://walidchahidan.github.io/devinette/" image={devinette} text="Devinette jeu"/>
                  <Card lien="https://walidchahidan.github.io/my-calcul/" image={calcul} text="Calculatrice"/>
                  
            </div>
            <a  id="more" href="https://github.com/walidchahidan?tab=repositories" target="_blank" className="animate__animated animate__shakeX animate__slower animate__infinite">More Projects</a>

            </section>
            
        )
    }
}