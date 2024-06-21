/*

const heading = React.createElement("h1", { id: "heading" }, "Hello  world! from react"); // creating object for h1 tag

const root = ReactDOM.createRoot(document.getElementById("root")); //to place the object  in the dom we need to create a place

root.render(heading); //rendering the object into the dom

*/ const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {
        id: "heading1"
    }, "React Nested elements"),
    React.createElement("h2", {
        id: "heading2"
    }, "React Nested elements two")
]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
