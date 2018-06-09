import * as assert from 'assert';
import {jsonLdProfileContentType} from '../core';
import * as vocab from "../vocabulary";
import { scrapeVocabulary } from "activitystreams2-spec-scraped";

if (require.main === module) {
  main()
  .then(() => process.exit())
  .catch((error) => {
    console.error(error)
    process.exit(1)
  });
}

async function main() {
  assert.equal(typeof jsonLdProfileContentType, 'string');
  const scrapedVocab = await scrapeVocabulary()
  console.log(scrapedVocab)
  for (const activityType of scrapedVocab.activityTypes) {
    assert.equal(activityType.name in vocab, true, `vocab exports activityType ${activityType.name}`)
  }
}
