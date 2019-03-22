import { NodeExtension } from "@remirror/core"; // loads two different modules

class TitlePlaceholder extends NodeExtension {}

console.log("NodeExtension: ", NodeExtension); // is an ES6 `class` during SSR
console.log("TitlePlaceholder: ", TitlePlaceholder); // is a function class

// const a = new TitlePlaceholder();
// gives => TypeError: Class constructor NodeExtension cannot be invoked without 'new'

const Index = () => (
  <div>
    <p>Hello Next.js</p>
  </div>
);

export default Index;
