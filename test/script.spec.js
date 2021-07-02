import child from "child_process"
import { assert } from "./test.js"
import { fileURLToPath } from "url"

/**
 * @param {import('./test').Test} test
 */
export const test = test => {
  test("script", async () => {
    const output = child.execSync("node test/fixtures/hello-script.js")
    assert.equal(output.toString(), "Hello world\n")
  })

  const cwd = fileURLToPath(new URL("./fixtures/env/", import.meta.url))

  test(".env is ignored", async () => {
    const output = child.execSync("node noenv-script.js", {
      cwd,
    })

    assert.equal(output.toString(), "FOO=undefined\n")
  })

  test(".env is included", async () => {
    const output = child.execSync("node env-script.js", {
      cwd,
    })

    assert.equal(output.toString(), "FOO=bar\n")
  })

  test("run when main module", async () => {
    const output = child.execSync("node test/fixtures/submodule.js")
    assert.equal(output.toString(), "Hello submodule\n")
  })
  test("do not run when not main", async () => {
    const output = child.execSync("node test/fixtures/module-script.js")
    assert.equal(output.toString(), "Hello script\n")
  })
}
