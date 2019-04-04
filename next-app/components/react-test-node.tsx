import * as React from "react";
import {
  CommandFunction,
  NodeExtension,
  NodeExtensionSpec,
  nodeInputRule,
  SchemaNodeTypeParams
} from "@remirror/core";
import { ReactNodeView } from "@remirror/react";
import { Plugin } from "prosemirror-state";

export const ReactTestComponent = () => {
  return <div>Hello from React!</div>;
};

export class ReactTestNode extends NodeExtension {
  get name(): string {
    return "reactTest";
  }

  get schema(): NodeExtensionSpec {
    return {
      attrs: this.extraAttrs(),
      group: "block",
      atom: false,
      parseDOM: [{ tag: "div[data-react-test]" }],
      toDOM: node => {
        const attrs = {
          "data-react-test": true,
          contenteditable: "false"
        };
        return ["div", attrs];
      }
    };
  }

  public inputRules({ type }: SchemaNodeTypeParams) {
    return [nodeInputRule(/^(?:\:\)\s)$/, type)];
  }

  public plugin({ getPortalContainer, type }: SchemaNodeTypeParams) {
    return createPlugin({
      key: this.pluginKey,
      getPortalContainer
    });
  }
}

export const createPlugin = ({ key, getPortalContainer }) => {
  return new Plugin({
    key,
    props: {
      nodeViews: {
        reactTest: ReactNodeView.createNodeView({
          Component: ReactTestComponent,
          getPortalContainer,
          props: {}
        })
      }
    }
  });
};
