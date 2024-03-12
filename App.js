const parent = React.createElement("div", 
{id:"parent"},
React.createElement(
    "div",
    {id:"child"},[
        React.createElement("h1",{}, "This is nested structure"),
        React.createElement("h2",{},"This is sibling")
    ]
));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent) 