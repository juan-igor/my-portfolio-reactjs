import React from "react";
import "./styles/SquareAnimationBG.css";

class SquareAnimationBG extends React.Component {
  render() {
    return (
        <div className={`area ${this.props.className}`}>
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div >
    );
  }
}

export default SquareAnimationBG;