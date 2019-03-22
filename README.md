# Next.js problem

```
cd some-es6-package/
npm link

cd ..

cd next-app/
npm link some-es6-package
```

Some progress w/ withTM

It seems like what they do differently is set:

- `externals` in main webpack config and
- `ignores` in dev webpack config

So withTM works when we do regular es6 classes w/ `export class`.

_However_

`remirror` appears to be using rollup _and_ a `modules` field in the `package.json`

What we're seeing is somehow (node?) is loading the `.js` file directly during SSR, but then later loading the babel version.

What we need to do next is use rollup / module settings such as `remirror` and have both things: a "raw" version and "esm" version.
