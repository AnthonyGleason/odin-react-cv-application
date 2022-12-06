import React from "react";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import './styles/App.css';

function App() {
  return (
    <>
    <Navbar className='Nav' />
    <Content className='Content' />
    </>
  );
}

export default App;