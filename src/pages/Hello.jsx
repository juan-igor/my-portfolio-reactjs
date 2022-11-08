// React Imports
import React from "react";
import { Helmet } from "react-helmet";

// Component and Helpers Imports
import TypingAnimation from "../utils/TypingAnimation";
import { ChevronDoubleRight } from "react-bootstrap-icons";

// Style Imports
import "../styles/Hello.css";

class Hello extends React.Component {
    constructor(props) {
        super(props);

        this.subtitleTyping = React.createRef();
    }

    render() {
        return (
            <section id="hello-section" className="hello-section">
                <Helmet>
                    <title>Olá, Bem-Vindo !</title>
                </Helmet>
                <TypingAnimation className="p-4 mx-0 -mt-28 mb-28 hello-section-text z-1 w-screen" animationDelay={80} commaDelay={true} delayBetweenChildren={true}>
                    <p className="hello-title text-4xl">Olá, eu sou um Portfolio Digital.</p>
                    <p className="hello-subtitle text-3xl">Aqui guardo um pouco sobre meu criador!</p>
                </TypingAnimation>
                <button type="button" className="action-button btn btn-dark text-4xl btn-lg text-nowrap">
                    Quero Conhecer 
                    <ChevronDoubleRight size={28} className="inline-block ml-3 animate__animated animate__flash animate__infinite animate__slower" />
                </button>
            </section>
        );
    }
}

export default Hello;