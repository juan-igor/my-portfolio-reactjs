// React Imports
import React from "react";

// Style Imports
import "./styles/TypingAnimation.css";

const sleep = ms => new Promise(
    resolve => setTimeout(resolve, ms)
);

class TypingAnimation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            typing: false,
            typingIsFinished : false
        };

        this.elementsRef = [];

        this.setTyping = this.setTyping.bind(this);
        this.typeWriter = this.typeWriter.bind(this);
    }

    componentDidMount() {
        if(this.state.typing === false){
            if(this.state.typingIsFinished === false){
                this.typeWriter(this.elementsRef, this.props.animationDelay);
                this.setTyping(true);
            }
        }
    }

    componentDidUpdate() {
    }

    setTyping(isTyping, typingIsFinished = false) {
        this.setState(prevState => {
            return ({
                typing: (isTyping === null) ? prevState.typing : isTyping,
                typingIsFinished: typingIsFinished
            });
        });
    }

    async typeWriter(elements, speed = 170){
        if (typeof speed !== "number") speed = 170;

        for (let index = 0; index < elements.length; index++) {
            elements[index].classList.remove('hidden-opacity');
        
            let n = 0;
            let txt = elements[index].innerHTML;
        
            while (n <= txt.length) {
                let slice = txt.slice(0, n + 1);

                elements[index].innerHTML = slice;

                if (this.props.commaDelay === true && slice[n] === ',') await sleep(400);

                n++;

                await sleep(speed);
            }

            if (n > txt.length) {
                if (index < (elements.length - 1)) {
                    if (this.props.delayBetweenChildren === true) await sleep(200);
                    elements[index].classList.add('writer-hidden');
                } else this.setTyping(false, true);
            }
        }
    }

    render() {
        if(typeof this.props.children === "string"){
            return (
                <h1 ref={el => this.elementsRef[0] = el} className={`typewriter hidden-opacity ${this.props.className}`}>
                    {this.props.children}
                </h1>
            );
        } else {
            return (
                <div className={`${this.props.className}`}>
                    {React.Children.map(this.props.children, (child, index) => {
                        const className = `${child.props.className} typewriter hidden-opacity`
                        const props = { ...child.props, className: className, ref: el => this.elementsRef[index] = el }

                        return React.cloneElement(child, props);
                    })}
                </div>
            )
        }
    }
}

export default TypingAnimation;