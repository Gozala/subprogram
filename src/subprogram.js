import { fromPath } from "@web-std/file-url"

/**
 *
 * @param {import('./lib').Script} script
 */
export const script = async script => {
  const mainURL = fromPath(process.argv[1])
  if (mainURL.href === script.url) {
    if (script.dotenv) {
      const dotenv = await import("dotenv")
      dotenv.config(script.dotenv === true ? {} : script.dotenv)
    }
  }

  await script.main()
}
