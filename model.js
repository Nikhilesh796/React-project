import React from "react";
import ReactDOM from "react-dom/client";
const Title = () => ( < h1 className = "title" >
    This is react < /h1>
);

const nik = "Nikhilesh";
const HeadingComponent = () => ( < div id = "container" >

    <
    Title / > { "Devloper Name is " + nik } <
    h2 className = "heading" > Hello world < /h2>  </div >
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( < HeadingComponent / > );