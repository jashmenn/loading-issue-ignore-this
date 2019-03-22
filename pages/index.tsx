import { NodeExtension } from "@remirror/core"; // loads two different modules

class TitlePlaceholder extends NodeExtension {}

console.log("NodeExtension: ", NodeExtension);
console.log("TitlePlaceholder: ", TitlePlaceholder);

const a = new TitlePlaceholder();

const Index = () => (
  <div>
    <p>Hello Next.js</p>
  </div>
);

export default Index;
