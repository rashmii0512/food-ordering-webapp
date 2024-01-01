import React from "react";
import ReactDOM from "react-dom/client";


/* episode 1 code 
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
*/

//react element
const jsxheading = (<h1 id="head">First react element put inside 2nd one</h1>);
const jsxheading2 = (<h1 id="head">{jsxheading}Second element as js inside react component</h1>); 
//here we are putting js code inside html using {}
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading);

//react functional Component
const HeadingComponent = () => {
    return <h1 id="head">Heading using Functional Component!</h1>;
}

const HeadingComponent2 = () => <h1 id="head">Heading using Functional Component!</h1>;
//if you only have one line which is a return statement

// root.render(<HeadingComponent />);

//Component Composition
const HeadingComponent3 = () => (
    <div id="container">
        {jsxheading2}
        <HeadingComponent />  
        {/* or use  <HeadingComponent></HeadingComponent>  */}
        <h1 id="head">Componenet Composition used here</h1>
    </div>
);

root.render(<HeadingComponent3 />);


//Note if you make an api call in js inside jsx an the api is malicious it is known as   Cross Site scripting attack and it is dangerous as one can do may things if they have access to your browser javascript , jsx deals with this , jsx escapes it 