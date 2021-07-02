# subprogram

Utility to turn individual ES modules into programs that can be run.

### Usage

You can turn ES module into runnable node program. Better ES alternative to `if (require.main === module) { ... }` pattern.

```js
import subprogram from "subprogram"

export main = async () => {
  console.log('Hello world')
}

subprogram(module.meta)
```

When above program is run as `node script.js` it will run a `main` function of the module, if module is imported no action will take place.
