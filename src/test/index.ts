import * as assert from "assert"
import * as activitystreams2 from "../"

if (require.main === module) {
    main()
        .then(() => process.exit())
        .catch(() => process.exit(1))
}

async function main() {
    assert.equal(typeof activitystreams2.ASJsonLdProfileContentType, "string")
}
