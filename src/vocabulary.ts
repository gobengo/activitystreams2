/**
 * @file ActivityStreams 2.0 Vocabulary
 * @see https://www.w3.org/TR/activitystreams-vocabulary/
 *
 * The ActivityStreams 2.0 spec is split up into two parts: core and vocabulary.
 * This file is only for stuff in the vocabulary spec.
 */
import {Activity, ASObject, ASObjectType, xsdAnyUri,} from './core';

// https://www.w3.org/TR/activitystreams-vocabulary/#activity-types

/**
 * Indicates that the actor accepts the object.
 * The target property can be used in certain circumstances to indicate the
 * context into which the object has been accepted.
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-accept
 */
export class Accept extends Activity {
  type = 'Accept';
}

/**
 * A specialization of Accept indicating that the acceptance is tentative.
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-tentativeaccept
 */
export class TentativeAccept extends Accept {
  type = 'TentativeAccept';
}

/**
 * Indicates that the actor has added the object to the target. If the target
 * property is not explicitly specified, the target would need to be determined
 * implicitly by context. The origin can be used to identify the context from
 * which the object originated.
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-add
 */
export class Add extends Activity {
  type = 'Add';
}

/**
 * Indicates that the actor is calling the target's attention the object.
 * The origin typically has no defined meaning.
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-announce
 */
export class Announce extends Activity {
  type = 'Announce';
}

export class Arrive extends Activity {
  type = 'Arrive';
}

export class Create extends Activity {
  type = 'Create';
}

export class Delete extends Activity {
  type = 'Delete';
}

export class Follow extends Activity {
  type = 'Follow';
}

export class Ignore extends Activity {
  type = 'Ignore';
}

export class Join extends Activity {
  type = 'Join';
}

export class Leave extends Activity {
  type = 'Leave';
}

export class Like extends Activity {
  type = 'Like';
}

export class Offer extends Activity {
  type = 'Offer';
}

export class Invite extends Activity {
  type = 'Invite';
}

export class Reject extends Activity {
  type = 'Reject';
}

export class TentativeReject extends Activity {
  type = 'TentativeReject';
}

export class Remove extends Activity {
  type = 'Remove';
}

export class Undo extends Activity {
  type = 'Undo';
}

export class Update extends Activity {
  type = 'Update';
}

export class View extends Activity {
  type = 'View';
}

export class Listen extends Activity {
  type = 'Listen';
}

export class Read extends Activity {
  type = 'Read';
}

export class Move extends Activity {
  type = 'Move';
}

export class Travel extends Activity {
  type = 'Travel';
}

export class Block extends Activity {
  type = 'Block';
}

export class Flag extends Activity {
  type = 'Flag';
}

export class Dislike extends Activity {
  type = 'Dislike';
}

export class Question extends Activity {
  type = 'Question';
}

/**
 *
 */

/** @todo https://www.w3.org/TR/activitystreams-vocabulary/#actor-types */

// https://www.w3.org/TR/activitystreams-vocabulary/#object-types

/**
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-image
 */
export class Image extends ASObject {
  type: ASObjectType = 'Image';
}

/**
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-note
 */
export class Note extends ASObject {
  type: ASObjectType = 'Note';
}

/**
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-place
 */
export class Place extends ASObject {
  accuracy?: number;
  latitude?: number;
  longitude?: number;
  altitude?: number;
  radius?: number;
  units?: 'cm'|'feet'|'inches'|'km'|'m'|'miles'|xsdAnyUri;
}
