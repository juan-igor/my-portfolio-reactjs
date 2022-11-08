// React Imports
import React from "react";
// import styled from 'styled-components';

// Style Imports
import "./styles/App.css";

// Component Imports
import SquareAnimationBG from "./utils/SquareAnimationBG";

// Page Imports
import Hello from "./pages/Hello";

class App extends React.Component {
  render() {
    return (
      <div id="main">
        <SquareAnimationBG className="bg-gradient-to-l from-violet-500 to-violet-700" />
        <Hello />
      </div>
    );
  }
}

export default App;
