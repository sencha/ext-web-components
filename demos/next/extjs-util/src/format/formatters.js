import { capitalize, decapitalize } from '../../../extjs-core/src';

import { leftPad } from '../string';

import {
    bytes,
    currency,
    date,
    defaultValue,
    ellipsis,
    hex,
    lessThanElse,
    lower,
    lowercase,
    nbsp,
    nl2br,
    number,
    or,
    percent,
    pick,
    plural,
    repeat,
    round,
    sign,
    slice,
    stripScripts,
    stripTags,
    toggle,
    undef,
    upper,
    uppercase,
    uri,
    uriCmp,
    usMoney,
    word
} from './Format';

export const formatters = {
    bytes,
    capitalize,
    currency,
    date,
    decapitalize,
    defaultValue,
    ellipsis,
    hex,
    leftPad,
    lessThanElse,
    lower,
    lowercase,
    nbsp,
    nl2br,
    number,
    or,
    percent,
    pick,
    plural,
    repeat,
    round,
    sign,
    slice,
    stripScripts,
    stripTags,
    toggle,
    uncapitalize: decapitalize,
    undef,
    upper,
    uppercase,
    uri,
    uriCmp,
    usMoney,
    word
};

// /**
//  * @method ellipsis
//  * @inheritdoc Ext.String#method!ellipsis
//  * Alias for {@link Ext.String#ellipsis}.
//  */
// ellipsis: Ext.String.ellipsis,
//
// /**
//  * @method escape
//  * @inheritdoc Ext.String#method!escape
//  * Alias for {@link Ext.String#escape}.
//  */
// escape: Ext.String.escape,
//
// /**
//  * @method escapeRegex
//  * @inheritdoc Ext.String#method!escapeRegex
//  * Alias for {@link Ext.String#escapeRegex}.
//  */
// escapeRegex: Ext.String.escapeRegex,
//
// /**
//  * @method htmlDecode
//  * @inheritdoc Ext.String#method!htmlDecode
//  * Alias for {@link Ext.String#htmlDecode}.
//  */
// htmlDecode: Ext.String.htmlDecode,
//
// /**
//  * @method htmlEncode
//  * @inheritdoc Ext.String#method!htmlEncode
//  * Alias for {@link Ext.String#htmlEncode}.
//  */
// htmlEncode: Ext.String.htmlEncode,
//
// /**
//  * @method leftPad
//  * @inheritdoc Ext.String#method!leftPad
//  * Alias for {@link Ext.String#leftPad}.
//  */
// leftPad: Ext.String.leftPad,
//
// /**
//  * @method toggle
//  * @inheritdoc Ext.String#method!toggle
//  * Alias for {@link Ext.String#toggle}.
//  */
// toggle: Ext.String.toggle,
//
// /**
//  * @method trim
//  * @inheritdoc Ext.String#method!trim
//  * Alias for {@link Ext.String#trim}.
//  */
// trim: Ext.String.trim,
