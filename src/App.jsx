import React from "react";
import "./styles/App.css";
// import styled from 'styled-components';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="rainbow-transition relative z-0 h-screen w-screen">
          <h1 className="z-1 centered-text absolute top-1/2 left-1/2 m-0 hello-title">
            Olá, eu sou um Portfolio Digital
          </h1>
        </div>
      </>
    );
  }
}

export default App;
