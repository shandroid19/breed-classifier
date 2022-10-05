import logo from './logo.svg';
import React,{ Component,useReducer,useState,useRef } from 'react';
import Header from './components/Header.js'
import Top from './components/Top';
import Footer from './components/Footer.js'
import Body from './components/Body.js'
import './App.css'


function App() {
  return (
    <React.Fragment>
      <Top/>
      <Body/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
// {showImage && <img src={imageURL} alt="upload-preview" ref={imageRef} />}
// <input
//   type="file"
//   accept="image/*"
//   capture="camera"
//   onChange={handleUpload}
//   ref={inputRef}
// />
// {showResults && (
//   <ul>
//     {results.map(({ className, probability }) => (
//       <li key={className}>{`${className}: %${(probability * 100).toFixed(
//         2
//       )}`}</li>
//     ))}
//   </ul>
// )}
/* <button onClick={actionButton[appState].action || (() => {})}>
{actionButton[appState].text}
</button> */