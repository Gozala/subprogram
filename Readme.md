# subprogram

Utility to turn individual ES modules into programs that can be run.

### Usage

You can turn ES module into runnable node program. This is an ES alternative to `if (require.main === module) { ... }` pattern.

```js
import { script } from "subprogram"

export const main () => {
  console.log("Hello world")
}

script({ ...import.meta, main })
```

When above program is run as `node script.js` it will run a `main` function of the module, if module is imported no action will take place.
