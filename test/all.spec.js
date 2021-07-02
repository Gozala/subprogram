import { test } from "./test.js"
import { test as scriptTest } from "./script.spec.js"

scriptTest(test)
test.run()
