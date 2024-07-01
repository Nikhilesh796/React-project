/*

const heading = React.createElement("h1", { id: "heading" }, "Hello  world! from react"); // creating object for h1 tag

const root = ReactDOM.createRoot(document.getElementById("root")); //to place the object  in the dom we need to create a place

root.render(heading); //rendering the object into the dom


const parent = React.createElement("div", { id: "parent" }, //creating a React element using core react.
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", { id: "heading1" }, "React Nested elements"),
        React.createElement("h2", { id: "heading2" }, "React Nested elements two"),
    ]));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

*/
import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement(after creating it,it becomes) => object => (when we render it,it becomes) HTML element.
// This is how we create react element using JSX
// The jsx code is transpiled before it reaches js Engine.Parcel will make the transpilation happen through babel.
// JSX =>Babel transpiles it to React.createElement => Babel transpiles it to  Reactelement- JS object => HTML  element
const heading = ( <h1 className = "Hello" >
        Hello </h1>);    

        console.log(heading);
        const root = ReactDOM.createRoot(document.getElementById("root")); root.render(heading);