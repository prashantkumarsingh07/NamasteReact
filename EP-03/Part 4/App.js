import React from "react";
import ReactDOM from "react-dom/client";
//  React Element => 

// const heading = (<h1 className="head" tabIndex="5">Namaste React using JSX</h1>);


//   REACT FUNCTIONAL COMPONENT

//  const HeadingComponent =()=>(
//   <div id="container">
//   <h1 className="heading">NAMASTE REACT FUNCTIONAL COMPONENT</h1>
//   </div> );

//  const root =ReactDOM.createRoot(document.getElementById("root"));

//  root.render(<HeadingComponent/>);


// COMPONENT COMPOSITION

const Title  = ()=>(<h1 className="head" tabIndex="5">Namaste React using JSX</h1>);

 const HeadingComponent =()=>(
  <div id="container">
  <Title/>
  <h1 className="heading">NAMASTE REACT FUNCTIONAL COMPONENT</h1>
 </div> );

  const root =ReactDOM.createRoot(document.getElementById("root"));

 root.render(<HeadingComponent/>);
