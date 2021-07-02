import { script } from "subprogram"

script({
  ...import.meta,
  main() {
    const foo = process.env["FOO"]
    console.log(`FOO=${foo}`)
  },
})
