# Vue Component Template

> A fog.haus project template

## Dev

### [yarn](https://yarnpkg.com) - recommend
``` bash
# Install dependencies
yarn install

# Server with hot reload at localhost:8080
yarn run dev

# Build for production with minification
yarn run build
```

### [npm](https://www.npmjs.com/)
``` bash
# Install dependencies
npm install

# Server with hot reload at localhost:8080
npm run dev

# Build for production with minification
npm run build
```

## Build

TODO. Need to explore and test different output targets for the build
(`commonjs`, `umd`, `esmodule`, etc).

### Notes

You may run into an issue with `node-sass` (a `ENOENT` error). If so, just run
`npm rebuild node-sass`.

This build defaults to using `pug` and `sass`/`scss` for the html and css
aspects of the component. If you don't care to use these tools, see the `lang`
attribute present in the example `Stub.vue`. Remove the `lang` attribute or set
it to your preference and add the consummate transpiler tool to the build.

## Reference

- For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## License

MIT © enlore <n.e.lorenson@gmail.com>
