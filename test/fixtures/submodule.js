import { script } from "subprogram"
export const main = () => hello("submodule")

/**
 * @param {string} name
 */
export const hello = name => {
  console.log(`Hello ${name}`)
}

script({ ...import.meta, main })
