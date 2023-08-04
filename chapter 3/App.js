import React from "react";
import ReactDOM from "react-dom/client";
// React.createElement => ReactElement-Js Object=HTMLELEment(render)
const heading =React.createElement("h1",{id:"heading"},"Namaste React");
console.log(heading);

// JSX HTML -like or XML -like syntax
// JSX(transpiled before it reaches the JS engine) - PARCEL - BABEL

// JSX => React.createElement => ReactElement - JS Object => HTMLElement(render)

 const jsxHeading=<h1 id="heading" tabIndex="5">Namaste React using JSX</h1>;
 
 
 
 const root =ReactDOM.createRoot(document.getElementById("root"));

 root.render(jsxHeading);



