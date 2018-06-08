import {
  ASObject,
  ASObjectType,
  ASValue,
  LDValue,
  xsdAnyUri,
} from "./core"

export const jsonLdProfile = "https://www.w3.org/ns/activitystreams"
// application/ld+json; profile="https://www.w3.org/ns/activitystreams"
export const ASJsonLdProfileContentType = `application/ld+json; profile="${jsonLdProfile}"`

export class JSONLD {
  public "@id": string;
}
