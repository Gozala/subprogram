import { fromPath } from "@web-std/file-url"

/**
 * Tells you if it's main module.
 *
 * @param {ImportMeta} meta
 * @returns {boolean}
 */
export const isMain = meta => fromPath(process.argv[1]).href === meta.url

/**
 *
 * @param {import('./lib').Script} script
 */
export const script = async script => {
  if (isMain(script)) {
    if (script.dotenv) {
      const dotenv = await import("dotenv")
      dotenv.config(script.dotenv === true ? {} : script.dotenv)
    }

    await script.main()
  }
}
