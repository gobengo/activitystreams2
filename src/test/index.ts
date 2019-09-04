import * as assert from 'assert';

import {ParsedClass, scrapeVocabulary} from '../../../activitystreams2-spec-scraped';
import {jsonLdProfileContentType} from '../core';
import * as vocab from '../vocabulary';

if (require.main === module) {
  main().then(() => process.exit()).catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

function testActivityType(activityType: ParsedClass) {
  assert.equal(
      activityType.name in vocab, true,
      `vocab exports activityType ${activityType.name}`);
}

async function main() {
  assert.equal(typeof jsonLdProfileContentType, 'string');
  const scrapedVocab = await scrapeVocabulary();
  for (const activityType of scrapedVocab.sections.activityTypes.members) {
    testActivityType(activityType);
  }
}
