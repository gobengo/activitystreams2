/**
 * @file ActivityStreams 2.0 Core
 * @see https://www.w3.org/TR/activitystreams-core/
 *
 * The ActivityStreams 2.0 spec is split up into two parts: core and vocabulary.
 * This file is only for stuff in the core spec.
 */

import {Image} from './vocabulary';

export const jsonLdProfile = 'https://www.w3.org/ns/activitystreams';

// application/ld+json; profile="https://www.w3.org/ns/activitystreams"
export const jsonLdProfileContentType =
    `application/ld+json; profile="${jsonLdProfile}"`;

interface JSONLDContextMapping {
  [key: string]: string|{[key: string]: string};
}
export interface JSONObject {
  [key: string]: string|JSONObject;
}
export interface JSONLDContext {
  '@vocab'?: string;
  '@language'?: string;
}

interface JsonLdObject {
  '@context'?: JSONLDContext&JSONObject;
}

export type LDIdentifier = xsdAnyUri;
export type LDValue<T> = (LDIdentifier|T);
export type LDValues<T> = T|T[];
export type LDObject<T> = {
  [P in keyof T]?: LDValues<T[P]>;
};

type ISO8601 = string;

export type xsdAnyUri = string;

type OneOrMore<T> = T|T[];

/** @todo (bengo.is) string could be more specific, e.g. LDIdentifier */
export type ASValue = string|ASObject|Link;

/** @todo (bengo.is) enumerage lang strings */
type RdfLangString = string;
interface NaturalLanguageValue {
  // @TODO (bengo) this could be more specific about keys than just string
  [key: string]: string;
}

/**
 * Representing value of as:type property that must include a certain value.
 * This is useful because as:type can be a string or array (for multiple types).
 * ASObjectType<"Link"> should allow ["Link", "someOtherTypeUri"]
 */
export type ASObjectType<T> = T|T[];

/**
 * @see https://www.w3.org/TR/activitystreams-core/#object
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-object
 */
export class ASObject {
  attachment?: OneOrMore<ASObject|Link>;
  attributedTo?: LDValue<ASObject>;
  bcc?: LDValue<ASObject>;
  cc?: OneOrMore<LDValue<ASObject>>;
  content?: string;
  generator?: LDValue<ASObject>;
  id?: string;
  image?: OneOrMore<string|Link|Image>;
  inReplyTo?: LDValue<ASObject>;
  location?: ASObject;
  name?: string;
  nameMap?: NaturalLanguageValue;
  preview?: ASValue;
  published?: ISO8601;
  replies?: LDValue<Collection<ASObject>>;
  summary?: string|RdfLangString;
  tag?: ASObject|Link;
  to?: LDValue<ASObject>;
  bto?: LDValue<ASObject>;
  type?: ASObjectType<string>;
  url?: OneOrMore<xsdAnyUri|Link>;
}

/**
 * Test whether an object is an ASObject
 * @param obj - object to test
 * @todo (bengo.is) check way more than this.
 */
export const isASObject = (obj: object): obj is ASObject => {
  return typeof obj === 'object';
};

type LinkRelation = string;

/**
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-link
 */
export class Link {
  type: ASObjectType<'Link'> = 'Link';
  href: xsdAnyUri;
  mediaType?: string;
  rel?: LinkRelation;
  constructor(init: {href: xsdAnyUri}&Partial<Link>) {
    Object.assign(this, init);
    this.href = init.href;
  }
}

/**
 * Test whether an object is an Link
 * @param obj - object to test whether it is an Link
 */
export const isLink = (obj: ASObject): obj is Link => {
  return obj.type === 'Link';
};

/**
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-activity
 */
export class Activity extends ASObject {
  type: ASObjectType<'Activity'|ActivitySubtype>;
  actor?: ASValue;
  object?: LDValue<ASObject>;
  target?: ASValue;
  constructor(props: object) {
    super();
    this.type = this.constructor.name;
    Object.assign(this, props);
  }
}

// https://www.w3.org/TR/activitystreams-vocabulary/#activity-types
export const activitySubtypes = [
  'Accept',
  'Add',
  'Announce',
  'Arrive',
  'Block',
  'Create',
  'Delete',
  'Dislike',
  'Flag',
  'Follow',
  'Ignore',
  'Invite',
  'Join',
  'Leave',
  'Like',
  'Listen',
  'Move',
  'Offer',
  'Question',
  'Reject',
  'Read',
  'Remove',
  'TentativeReject',
  'TentativeAccept',
  'Travel',
  'Undo',
  'Update',
  'View',
];

const strEnum = <T extends string>(o: T[]): {[K in T]: K} => {
  return o.reduce((res, key) => {
    res[key] = key;
    return res;
  }, Object.create(null));
};

export const activitySubtypesEnumMap = strEnum(activitySubtypes);
export type ActivitySubtype = keyof typeof activitySubtypesEnumMap;

/**
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-intransitiveactivity
 * @todo (bengo.is) implement this
 */

/**
 * @see https://www.w3.org/TR/activitystreams-core/#collections
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-collection
 */
export class Collection<T> extends ASObject {
  items?: T[];
  totalItems?: number;
}

/**
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-orderedcollection
 * @todo (bengo.is) implement this
 */

/**
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-collectionpage
 * @todo (bengo.is) implement this
 */

/**
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-orderedcollectionpage
 * @todo (bengo.is) implement this
 */
