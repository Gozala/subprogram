import { script } from "subprogram"
export const main = () => {
  console.log("Hello world")
}

script({ ...import.meta, main })
