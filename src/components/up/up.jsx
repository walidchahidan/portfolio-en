import { Component } from "react";
import "./up.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export class Up extends Component{
    render(){
        return(
            <a id="up" href="#"><FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon></a>
        )
    }
}