import React from "react";
import ReactDOM from "react-dom/client";

//REACT components

//Arrow function ' () => {} '
//Functional component
const Title = () => ( <
    h1 className = "title" >
    This is react <
    /h1>
);

const HeadingComponent = () => ( <
    div id = "container" >

    <
    Title / >

    <
    h2 className = "heading" > Hello world < /h2>  <
    /div>
);


{ /* we can avoid writing return keyword.If it is a single line code. */ } { /* const HeadingComponent2 = () => < h1 className = "heading" > Hello </h1>;  */ }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( < HeadingComponent / > );