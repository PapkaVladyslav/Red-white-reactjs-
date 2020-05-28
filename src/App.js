import React from 'react';
import './App.scss';
import {Header} from "../src/Components/Header/Header";
import {Banner} from "../src/Components/Banner/Banner";
import {Content} from "./Components/Content/Content";
import {Curabitur} from "./Components/Curabitur/Curabitur";
import {Wrapper} from "./Components/Wrapper/Wrapper";
import {Footer} from "./Components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Content></Content>
      <Curabitur></Curabitur>
      <Wrapper></Wrapper>
      <Footer></Footer>
    </div>
  );
}

export default App;
