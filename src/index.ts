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

export class Note extends ASObject {
  public type: ASObjectType<"Note">
}

export class Place extends ASObject {
  public accuracy?: number
  public latitude?: number
  public longitude?: number
  public altitude?: number
  public radius?: number
  public units?: "cm" | "feet" | "inches" | "km" | "m" | "miles" | xsdAnyUri
}
