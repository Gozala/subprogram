import child from "child_process"
import { assert } from "./test.js"

/**
 * @param {import('./test').Test} test
 */
export const test = test => {
  test("script", async () => {
    const output = child.execSync("node test/fixtures/hello-script.js")
    assert.equal(output.toString(), "Hello world\n")
  })

  const baseURL = new URL("./fixtures/env/", import.meta.url)
  console.log(baseURL.pathname)
  test(".env is ignored", async () => {
    const output = child.execSync("node noenv-script.js", {
      cwd: baseURL.pathname,
    })

    assert.equal(output.toString(), "FOO=undefined\n")
  })

  test(".env is included", async () => {
    const output = child.execSync("node env-script.js", {
      cwd: baseURL.pathname,
    })

    assert.equal(output.toString(), "FOO=bar\n")
  })
}
