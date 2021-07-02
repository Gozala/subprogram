import { script } from "subprogram"
import { hello } from "./submodule.js"
export const main = () => hello("script")

script({ ...import.meta, main })
