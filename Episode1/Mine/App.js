/*
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from React"
);

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
*/

/* parent -> child, we need to pass cild as third argument. If its a sibling like h1 and h2 then pass it as array.
 *
 *<div id="parent">
 *   <div id="child">
 *        <h1></h1>
 *        <h2></h2>
 *   </div>
 *</div>
 *
 */

/*
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
   [React.createElement("h1", {}, "I am h1 tag"),React.createElement("h2", {}, "I am h2 tag")] 
  )
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
*/

/*
*<div id="parent">
*   <div id="child1">
*        <h1></h1>
*        <h2></h2>
*   </div>
<div id="child2">
*        <h1></h1>
*        <h2></h2>
*   </div>
*</div>
*
*/

const parent = React.createElement(
  "div",
  { id: "parent" },
 [ React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]), React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ])]
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
