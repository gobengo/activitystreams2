import * as assert from 'assert';
import {jsonLdProfileContentType} from '../core';

if (require.main === module) {
  main().then(() => process.exit()).catch(() => process.exit(1));
}

async function main() {
  assert.equal(typeof jsonLdProfileContentType, 'string');
}
