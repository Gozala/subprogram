export * from "./subprogram.js"
import type { DotenvConfigOptions } from "dotenv"

export interface Script extends ImportMeta {
  dotenv?: DotenvConfigOptions | true
  main: () => Promise<void> | void
}
