import { script } from "subprogram"

script({
  ...import.meta,
  dotenv: true,
  main() {
    const foo = process.env["FOO"]
    console.log(`FOO=${foo}`)
  },
})
