const heading = React.createElement("h1", {id:"head", className:"head"}, "Hello World from React!");

const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"}, [
        React.createElement("h2", {id:"head_two"}, "this is inside child div which is inside parent div"),
        React.createElement("h2", {id:"head_three"}, "this is sibling of the prior heading")
    ])
)

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);
//render replaces , it does not append
// so any render done before or already existing code in the root will be replaced the object in the new render