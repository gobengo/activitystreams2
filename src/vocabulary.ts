/**
 * @file ActivityStreams 2.0 Vocabulary
 * @see https://www.w3.org/TR/activitystreams-vocabulary/
 *
 * The ActivityStreams 2.0 spec is split up into two parts: core and vocabulary.
 * This file is only for stuff in the vocabulary spec.
 */
import {
    ASObject,
    ASObjectType,
    xsdAnyUri,
} from "./core"

/** @todo https://www.w3.org/TR/activitystreams-vocabulary/#activity-types */
/** @todo https://www.w3.org/TR/activitystreams-vocabulary/#actor-types */

// https://www.w3.org/TR/activitystreams-vocabulary/#object-types

/**
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-image
 */
export class ASImage extends ASObject { }

/**
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-note
 */
export class Note extends ASObject {
    public type: ASObjectType<"Note">
}

/**
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-place
 */
export class Place extends ASObject {
    public accuracy?: number
    public latitude?: number
    public longitude?: number
    public altitude?: number
    public radius?: number
    public units?: "cm" | "feet" | "inches" | "km" | "m" | "miles" | xsdAnyUri
}
