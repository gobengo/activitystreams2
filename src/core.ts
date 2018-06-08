/**
 * @file ActivityStreams 2.0 Core
 * @see https://www.w3.org/TR/activitystreams-core/
 *
 * The ActivityStreams 2.0 spec is split up into two parts: core and vocabulary.
 * This file is only for stuff in the core spec.
 */

import { ASImage } from "./vocabulary"

export type JSONLDContext = OneOrMore<string | {
    "@vocab"?: string
    "@language"?: string
    [key: string]: string | { [key: string]: string },
}>;

interface IJsonldObject {
    "@context"?: JSONLDContext;
}

export type LDIdentifier = xsdAnyUri;
export type LDValue<T> = (LDIdentifier | T);
export type LDValues<T> = T | T[];
export type LDObject<T> = {
    [P in keyof T]?: LDValues<T[P]>;
};

type ISO8601 = string;

export type xsdAnyUri = string;

type OneOrMore<T> = T | T[];

/** @todo (bengo.is) string could be more specific, e.g. LDIdentifier */
export type ASValue = string | ASObject | ASLink

/** @todo (bengo.is) enumerage lang strings */
type RdfLangString = string
interface INaturalLanguageValue {
    // @TODO (bengo) this could be more specific about keys than just string
    [key: string]: string
}

/**
 * Representing value of as:type property that must include a certain value.
 * This is useful because as:type can be a string or array (for multiple types).
 * ASObjectType<"Link"> should allow ["Link", "someOtherTypeUri"]
 */
export type ASObjectType<T> = T | T[]

/**
 * @see https://www.w3.org/TR/activitystreams-core/#object
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-object
 */
export class ASObject implements IJsonldObject {
    public "@context": JSONLDContext
    public attachment?: OneOrMore<ASObject | ASLink>
    public attributedTo?: LDValue<ASObject>
    public bcc?: LDValue<ASObject>
    public cc?: OneOrMore<LDValue<ASObject>>
    public content?: string
    public generator?: LDValue<ASObject>
    public id?: string
    public image?: OneOrMore<string | ASLink | ASImage>
    public inReplyTo?: LDValue<ASObject>
    public location?: ASObject
    public name?: string
    public nameMap?: INaturalLanguageValue
    public preview?: ASValue
    public published?: ISO8601
    public replies?: LDValue<Collection<ASObject>>
    public summary?: string | RdfLangString
    public tag?: ASObject | ASLink
    public to?: LDValue<ASObject>
    public bto?: LDValue<ASObject>
    public type?: ASObjectType<string>
    public url?: OneOrMore<xsdAnyUri | ASLink>
}

/**
 * Test whether an object is an ASObject
 * @param obj - object to test
 */
export const isASObject = (obj: any): obj is ASObject => {
    return typeof obj === "object"
}

type LinkRelation = string;

/**
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-link
 */
export class ASLink {
    public type: ASObjectType<"Link">;
    public href: string;
    public mediaType?: string;
    public rel?: LinkRelation;
}

/**
 * Test whether an object is an ASLink
 * @param obj - object to test whether it is an ASLink
 */
export const isASLink = (obj: any): obj is ASLink => {
    return obj.type === "Link";
}

/**
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-activity
 */
export class Activity extends ASObject {
    public type: ASObjectType<"Activity" | ActivitySubtype>
    public actor?: ASValue
    public object?: LDValue<ASObject>
    public target?: ASValue
    constructor(props: any) {
        super()
        this.type = this.constructor.name
        Object.assign(this, props)
    }
}

// https://www.w3.org/TR/activitystreams-vocabulary/#activity-types
export const activitySubtypes = [
    "Accept", "Add", "Announce", "Arrive", "Block", "Create", "Delete",
    "Dislike", "Flag", "Follow", "Ignore", "Invite", "Join", "Leave", "Like",
    "Listen", "Move", "Offer", "Question", "Reject", "Read", "Remove",
    "TentativeReject", "TentativeAccept", "Travel", "Undo", "Update", "View",
]

const strEnum = <T extends string>(o: T[]): { [K in T]: K } => {
    return o.reduce((res, key) => {
        res[key] = key
        return res
    }, Object.create(null))
}

export const ActivitySubtypes = strEnum(activitySubtypes)
export type ActivitySubtype = keyof typeof ActivitySubtypes

export const isActivity = (activity: any): activity is Activity => {
    if (typeof activity === "object") {
        return activitySubtypes.includes(activity.type)
    }
    return false
}

/**
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-intransitiveactivity
 * @todo (bengo.is) implement this
 */

/**
 * @see https://www.w3.org/TR/activitystreams-core/#collections
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-collection
 */
export class Collection<T> extends ASObject {
    public items?: T[]
    public totalItems?: number
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
