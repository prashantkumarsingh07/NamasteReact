import React from "react";
import ReactDOM from "react-dom/client";

// Putting react element inside react element  
const elem= <span>React element</span>
const Title  =   (<h1 className="head" tabIndex="5">
{elem}Namaste React using JSX</h1>);
// Putting React element inside Component

 const HeadingComponent =()=>(
  <div id="container">
   {/* <h1>{ 100 + 200}</h1>   */ Title}
  <h1 className="heading">NAMASTE REACT FUNCTIONAL COMPONENT</h1>
 </div> );

  const root =ReactDOM.createRoot(document.getElementById("root"));

 root.render(<HeadingComponent/>);
