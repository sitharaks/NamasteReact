/**
 * <div id="parent">  
 *      <div id="child1">  
 *          <h1 id="heading1">Hello World from React1</h1>
 *          <h1 id="heading2">Hello World from React2</h1>
 *      </div>
 *      <div id="child2">  
 *          <h1 id="heading1">Hello World from React3</h1>
 *          <h1 id="heading2">Hello World from React</h1>
 *      </div>
 * </div>
 */


const heading = React.createElement("div",{ id: "parent" },
    [React.createElement('div', { id: "child1" },
         [  React.createElement('h1', { id: "heading1" }, "Hello World from React1"),
            React.createElement('h1', { id: "heading2" }, "Hello World from React2"),
         ]),
    React.createElement('div', { id: "child2" },  [  
        React.createElement('h1', { id: "heading1" }, "Hello World from React3"),
        React.createElement('h1', { id: "heading2" }, "Hello World from React4"),
     ])],
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);