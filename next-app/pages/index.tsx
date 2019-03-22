import { Rectangle } from "some-es6-package";

class Square extends Rectangle {}

console.log("Rectangle: ", Rectangle); // is an ES6 `class` during SSR
console.log("Square: ", Square); // is a function class

// const a = new Square();
// gives => TypeError: Class constructor Rectangle cannot be invoked without 'new'

const Index = () => (
  <div>
    <p>Hello Next.js</p>
  </div>
);

export default Index;
