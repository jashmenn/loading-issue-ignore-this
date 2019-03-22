import { Rectangle } from "some-es6-package";
console.log("Rectangle: ", Rectangle); // is an ES6 `class` during SSR

// class Square extends Rectangle {}
// console.log("Square: ", Square); // is a function class
// const a = new Square();
// gives => TypeError: Class constructor Rectangle cannot be invoked without 'new'

// import { NodeExtension } from "@remirror/core/lib/node-extension";
// import NodeExtension from "@remirror/core/lib/node-extension";
// console.log("NodeExtension: ", NodeExtension);

const Index = () => (
  <div>
    <p>Hello Next.js</p>
  </div>
);

export default Index;
