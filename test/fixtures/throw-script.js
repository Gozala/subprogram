import { script } from "subprogram"
export const main = async () => {
  throw new Error("Boom")
}

script({ ...import.meta, main })
