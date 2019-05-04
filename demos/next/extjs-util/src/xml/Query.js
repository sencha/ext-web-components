import {
    // Ext,
    arrayify, assert, chain, is, prototype
} from '../../../extjs-core/src';

import { Operators, splitAndUnescape } from '../selector/Api';
import { Cache } from '../collection';

import { ident } from '../ident';
import { Xml } from './Api';

/**
 * @class Query
 * Provides high performance selector/xpath processing by compiling queries into reusable
 * functions. New pseudo classes and matchers can be plugged. It works on HTML and XML
 * documents (if a content node is passed in).
 *
 * DomQuery supports most of the [CSS3 selectors spec][1], along with some custom selectors
 * and basic XPath.
 *
 * All selectors, attribute filters and pseudos below can be combined infinitely in any
 * order. For example `div.foo:nth-child(odd)[@foo=bar].bar:first` would be a perfectly
 * valid selector. Node filters are processed in the order in which they appear, which
 * allows you to optimize your queries for your document structure.
 * 
 * ## Simple Selectors
 * 
 * For performance reasons, some query methods accept selectors that are termed as
 * **simple selectors**. A simple selector is a selector that does not include contextual
 * information about any parent/sibling elements.
 * 
 * Some examples of valid simple selectors:
 * 
 *     var simple = '.foo'; // Only asking for the class name on the element
 *     var simple = 'div.bar'; // Only asking for the tag/class name on the element
 *     var simple = '[href];' // Asking for an attribute on the element.
 *     var simple = ':not(.foo)'; // Only asking for the non-matches against the class name
 *     var simple = 'span:first-child'; // Doesn't contain parent node criteria
 * 
 * Simple examples of invalid simple selectors:
 * 
 *     var notSimple = 'div.foo div.bar'; // Requires matching a parent node by class name
 *     var notSimple = 'span + div'; //  Requires matching a sibling by tag name
 *
 * ## Element Selectors:
 *
 *  - **`*`** any element
 *  - **`E`** an element with the tag E
 *  - **`E F`** All descendent elements of E that have the tag F
 *  - **`E > F`** or **E/F** all direct children elements of E that have the tag F
 *  - **`E + F`** all elements with the tag F that are immediately preceded by an element
 *   with the tag E.
 *  - **`E ~ F`** all elements with the tag F that are preceded by a sibling element with
 *   the tag E.
 *
 * ## Attribute Selectors:
 *
 * The use of `@` and quotes are optional. For example, `div[@foo='bar']` is also a valid
 * attribute selector.
 *
 *   - **`E[foo]`** has an attribute "foo"
 *   - **`E[foo=bar]`** has an attribute "foo" that equals "bar"
 *   - **`E[foo^=bar]`** has an attribute "foo" that starts with "bar"
 *   - **`E[foo$=bar]`** has an attribute "foo" that ends with "bar"
 *   - **`E[foo*=bar]`** has an attribute "foo" that contains the substring "bar"
 *   - **`E[foo%=2]`** has an attribute "foo" that is evenly divisible by 2
 *   - **`E[foo!=bar]`** attribute "foo" does not equal "bar"
 *
 * ## Pseudo Classes:
 *
 *  - **`E:first-child`** E is the first child of its parent
 *  - **`E:last-child`** E is the last child of its parent
 *  - **`E:nth-child(_n_)`** E is the _n_th child of its parent (1 based as per the spec)
 *  - **`E:nth-child(odd)`** E is an odd child of its parent
 *  - **`E:nth-child(even)`** E is an even child of its parent
 *  - **`E:only-child`** E is the only child of its parent
 *  - **`E:checked`** E is an element that is has a checked attribute that is true (e.g.
 *   a radio or checkbox).
 *  - **`E:first`** the first E in the resultset
 *  - **`E:last`** the last E in the resultset
 *  - **`E:nth(_n_)`** the _n_th E in the resultset (1 based)
 *  - **`E:odd`** shortcut for :nth-child(odd)
 *  - **`E:even`** shortcut for :nth-child(even)
 *  - **`E:contains(foo)`** E's innerHTML contains the substring "foo"
 *  - **`E:nodeValue(foo)`** E contains a textNode with a nodeValue that equals "foo"
 *  - **`E:not(S)`** an E element that does not match simple selector S
 *  - **`E:has(S)`** an E element that has a descendent that matches simple selector S
 *  - **`E:next(S)`** an E element whose next sibling matches simple selector S
 *  - **`E:prev(S)`** an E element whose previous sibling matches simple selector S
 *  - **`E:any(S1|S2|S2)`** an E element which matches any of the simple selectors S1, S2
 *   or S3.
 *  - **`E:visible(true)`** an E element which is deeply visible according to
 *   {@link Ext.dom.Element#isVisible}.
 *
 * ## CSS Value Selectors:
 *
 *   - **`E{display=none}`** css value "display" that equals "none"
 *   - **`E{display^=none}`** css value "display" that starts with "none"
 *   - **`E{display$=none}`** css value "display" that ends with "none"
 *   - **`E{display*=none}`** css value "display" that contains the substring "none"
 *   - **`E{display%=2}`** css value "display" that is evenly divisible by 2
 *   - **`E{display!=none}`** css value "display" that does not equal "none"
 * 
 * ## XML Namespaces:
 *   - **`ns|E`** an element with tag E and namespace prefix ns
 *
 * [1]: http://www.w3.org/TR/2005/WD-css3-selectors-20051215/#selectors
 */

const nonSpace = /\S/;
const trimRe = /^\s+|\s+$/g;
const modeRe = /^(\s?[/>+~]\s?|\s|$)/;
const tagTokenRe = /^(#)?([\w\-*|\\]+)/;
const nthRe = /(\d*)n\+?(\d*)/;
const nthRe2 = /\D/;
const startIdRe = /^\s*#/;

export const escapes = {
    longHex: /\\([0-9a-fA-F]{6})/g,
    shortHex: /\\([0-9a-fA-F]{1,6})\s{0,1}/g,
    nonHex: /\\([^0-9a-fA-F]{1})/g,

    // replaces a long hex regex match group with the appropriate ascii value
    // $args indicate regex match pos
    longHexToChar ($0, $1) {
        return String.fromCharCode(parseInt($1, 16));
    },

    // converts a shortHex regex match to the long form
    shortToLongHex ($0, $1) {
        while ($1.length < 6) {
            $1 = '0' + $1;
        }
    
        return '\\' + $1;
    },
    
    // converts a single char escape to long escape form
    charToLongHex ($0, $1) {
        let num = $1.charCodeAt(0).toString(16);
    
        if (num.length === 1) {
            num = '0' + num;
        }
    
        return '\\0000' + num;
    },

    // checks if the path has escaping & does any appropriate replacements
    normalize (sel) {
        if (sel && sel.indexOf('\\') > -1) {
            sel = sel.replace(escapes.shortHex, escapes.shortToLongHex);
            sel = sel.replace(escapes.nonHex, escapes.charToLongHex);
        }
        
        return sel;
    },
    
    // Un-escapes an input selector string.  Assumes all escape sequences have been
    // normalized to the css '\\0000##' 6-hex-digit style escape sequence :
    // will not handle any other escape formats
    unescape (sel) {
        if (sel && sel.indexOf('\\') > -1) {
            sel = sel.replace(escapes.longHex, escapes.longHexToChar);
        }

        return sel;
    }
};

const nthMapping = {
    even: nthRe.exec('2n'),
    odd: nthRe.exec('2n+1')
};

const pseudos = {
    'first-child' (c) {
        let r = [];
        let ri = -1;
        let n, i, ci;
        
        for (i = 0; (ci = n = c[i]); i++) {
            while ((n = n.previousSibling) && n.nodeType !== 1) {
                // This block is intentionally left blank
            }
            
            if (!n) {
                r[++ri] = ci;
            }
        }
        
        return r;
    },

    'last-child' (c) {
        let r = [];
        let ri = -1;
        let n, i, ci;
        
        for (i = 0; (ci = n = c[i]); i++) {
            while ((n = n.nextSibling) && n.nodeType !== 1) {
                // This block is intentionally left blank
            }
            
            if (!n) {
                r[++ri] = ci;
            }
        }
        
        return r;
    },

    'nth-child' (c, a) {
        let batch = this.batchKey;
        let r = [];
        let ri = -1;
        let m = nthMapping[a] || (nthMapping[a] = nthRe.exec(nthRe2.test(a) ? a : ('n+' + a)));
        let f = (m[1] || 1) - 0;
        let l = m[2] - 0;
        let i, n, j, cn, pn;
        
        for (i = 0; (n = c[i]); i++) {
            pn = n.parentNode;
            
            if (batch !== pn._batch) {
                j = 0;
                
                for (cn = pn.firstChild; cn; cn = cn.nextSibling) {
                    if (cn.nodeType === 1) {
                        cn.nodeIndex = ++j;
                    }
                }
                
                pn._batch = batch;
            }
            
            if (f === 1) {
                if (l === 0 || n.nodeIndex === l) {
                    r[++ri] = n;
                }
            }
            else if ((n.nodeIndex + l) % f === 0) {
                r[++ri] = n;
            }
        }

        return r;
    },

    'only-child' (c) {
        let r = [];
        let ri = -1;
        let i, ci;
        
        for (i = 0; (ci = c[i]); i++) {
            if (!this.pseudo('prev', ci) && !this.pseudo('next', ci)) {
                r[++ri] = ci;
            }
        }
        
        return r;
    },

    empty (c) {
        let r = [];
        let ri = -1;
        let i, ci, cns, j, cn, empty;
        
        for (i = 0; (ci = c[i]); i++) {
            cns = ci.childNodes;
            j = 0;
            empty = true;
            
            while ((cn = cns[j])) {
                ++j;
                
                if (cn.nodeType === 1 || cn.nodeType === 3) {
                    empty = false;
                    
                    break;
                }
            }
            
            if (empty) {
                r[++ri] = ci;
            }
        }
        
        return r;
    },

    contains (c, v) {
        let r = [];
        let ri = -1;
        let i, ci;
        
        for (i = 0; (ci = c[i]); i++) {
            if ((ci.textContent || ci.innerText || ci.text || '').indexOf(v) > -1) {
                r[++ri] = ci;
            }
        }
        
        return r;
    },

    nodeValue (c, v) {
        let r = [];
        let ri = -1;
        let i, ci;
        
        for (i = 0; (ci = c[i]); i++) {
            // noinspection EqualityComparisonWithCoercionJS
            if (ci.firstChild && ci.firstChild.nodeValue == v) { // eslint-disable-line eqeqeq
                r[++ri] = ci;
            }
        }
        
        return r;
    },

    checked (c) {
        let r = [];
        let ri = -1;
        let i, ci;
        
        for (i = 0; (ci = c[i]); i++) {
            if (ci.checked === true) {
                r[++ri] = ci;
            }
        }
        
        return r;
    },

    not (c, ss) {
        return this.filter(c, ss, true);
    },

    any (c, selectors) {
        let ss = selectors.split('|');
        let r = [];
        let ri = -1;
        let s, i, ci, j;
        
        for (i = 0; (ci = c[i]); i++) {
            for (j = 0; (s = ss[j]); j++) {
                if (this.is(ci, s)) {
                    r[++ri] = ci;
                    
                    break;
                }
            }
        }
        
        return r;
    },

    odd (c) {
        return this.pseudo('nth-child', c, 'odd');
    },

    even (c) {
        return this.pseudo('nth-child', c, 'even');
    },

    nth (c, a) {
        return c[a - 1] || [];
    },

    first (c) {
        return c[0] || [];
    },

    last (c) {
        return c[c.length - 1] || [];
    },

    has (c, ss) {
        let Q = this.constructor;
        let r = [];
        let ri = -1;
        let i, ci;
        
        for (i = 0; (ci = c[i]); i++) {
            if (Q.select(ss, ci).length > 0) {
                r[++ri] = ci;
            }
        }
        
        return r;
    },

    next (c, ss) {
        let Q = this.constructor;
        let r = [];
        let ri = -1;
        let i, ci, n;
        
        for (i = 0; (ci = c[i]); i++) {
            n = this.pseudo('next', ci);
            
            if (n && Q.is(n, ss)) {
                r[++ri] = ci;
            }
        }
        
        return r;
    },

    prev (c, ss) {
        let Q = this.constructor;
        let r = [];
        let ri = -1;
        let i, ci, n;
        
        for (i = 0; (ci = c[i]); i++) {
            n = this.pseudo('prev', ci);
            
            if (n && Q.is(n, ss)) {
                r[++ri] = ci;
            }
        }
        
        return r;
    }

    // focusable (candidates) {
    //     let results = [];
    //     let c;
    //
    //     for (c of candidates) {
    //         if (Ext.fly(c, '_DomQuery').isFocusable()) {
    //             results.push(c);
    //         }
    //     }
    //
    //     return results;
    // },
    //
    // visible (candidates, deep) {
    //     let results = [];
    //     let c;
    //
    //     for (c of candidates) {
    //         if (Ext.fly(c, '_DomQuery').isVisible(deep)) {
    //             results.push(c);
    //         }
    //     }
    //
    //     return results;
    // },
    //
    // isScrolled (c) {
    //     let r = [];
    //     let ri = -1;
    //     let i, ci, s;
    //    
    //     for (i = 0; (ci = c[i]); i++) {
    //         s = Ext.fly(ci, '_DomQuery').getScroll();
    //        
    //         if (s.top > 0 || s.left > 0) {
    //             r[++ri] = ci;
    //         }
    //     }
    //    
    //     return r;
    // }
};

//--------------------------------------------------------------------------------

@prototype({
    xml: Xml,

    /**
     * @property {Object[]} matchers
     * Collection of matching regular expressions and code snippets.
     * Each capture group within `()` will be replace the `{}` in the select
     * statement as specified by their index.
     * @static
     * @private
     */
    matchers: [{
        re: /^\.([\w\-\\]+)/,
        fn (match, nodeSet /* , mode, root */) {
            return this.byClassName(nodeSet, match[1]);
        }
    }, {
        re: /^:([\w-]+)(?:\(((?:[^\s>/]*|.*?))\))?/,
        fn (match, nodeSet /* , mode, root */) {
            return this.byPseudo(nodeSet, match[1], match[2]);
        }
    }, {
        re: /^(?:([[{])(?:@)?([\w-]+)\s?(?:(=|.=)\s?['"]?(.*?)["']?)?[\]}])/,
        fn (match, nodeSet /* , mode, root */) {
            return this.byAttribute(nodeSet, match[2], match[4], match[3], match[1]);
        }
    }, {
        re: /^#([\w\-\\]+)/,
        fn (match, nodeSet, mode, root) {
            return this.byId(nodeSet, mode, root, match[1]);
        }
    }, {
        final: true,
        re: /^@([\w\-.]+)/,
        fn (match, node /* , mode, root */) {
            return [{
                firstChild: {
                    nodeValue: this.attrValue(node, match[1])
                }
            }];
        }
    }],

    /**
     * @property {Object} pseudos
     * This object contains pseudo class filter functions which are used when filtering
     * selections. Each function is passed two parameters:
     *
     * - **c** : Array
     *     An Array of DOM elements to filter.
     *
     * - **v** : String
     *     The argument (if any) supplied in the selector.
     *
     * A filter function returns an Array of DOM elements which conform to the pseudo class.
     * In addition to the provided pseudo classes listed above such as `first-child` and
     * `nth-child`, developers may add additional, custom psuedo class filters to select
     * elements according to application-specific requirements.
     *
     * For example, to filter `a` elements to only return links to __external__ resources:
     *
     *     Ext.DomQuery.pseudos.external = function (c, v) {
     *         var r = [], ri = -1;
     *         for(var i = 0, ci; ci = c[i]; i++) {
     *             // Include in result set only if it's a link to an external resource
     *             if (ci.hostname != location.hostname) {
     *                 r[++ri] = ci;
     *             }
     *         }
     *         return r;
     *     };
     *
     * Then external links could be gathered with the following statement:
     *
     *     var externalLinks = Ext.select('a:external');
     */
    pseudos,
    
    /**
     * @property {Object} operators
     * Collection of operator comparison functions.
     * The default operators are `=`, `!=`, `^=`, `$=`, `*=`, `%=`, `|=` and `~=`.
     *
     * New operators can be added as long as the match the format *c*`=` where *c*
     * is any character other than space, `>`, or `<`.
     *
     * Operator functions are passed the following parameters:
     *
     * * `propValue` : The property value to test.
     * * `compareTo` : The value to compare to.
     */
    operators: chain(Operators)
})
class Query {
    /**
     * @property {Number} batchKey
     * @static
     * @private
     */
    static batchKey = 30803;

    static dedupKey = 30803;

    static cache = new Cache({
        maxSize: 200,

        miss (sel, type) {
            return new Query(sel, type);
        }
    });
    
    static simpleCache = new Cache({
        maxSize: 200,
        
        miss (sel) {
            return new Query(sel, 'simple');
        }
    });
    
    static valueCache = new Cache({
        maxSize: 200,
        
        miss (sel) {
            return new Query(sel, 'select');
        }
    });

    /**
     * @property {Array} ops
     * This array holds the pieces of the parse selector. Each element will be one of the
     * following forms:
     * 
     *  - A string: these entries adjust the match mode.
     *  - An array of two elements:
     *    - `[0]`: A string of the method name to call (e.g., `byTag`) or the entry from
     *      the `matchers` array.
     *    - `[1]`: The text fragment passed to the function defined in `[0]`.
     *  
     * For details see the `exec` method that interprets these op-codes and the constructor
     * that produces them.
     * @private
     */

    /**
     * Compiles a selector/xpath query into a reusable function. The returned function
     * takes one parameter "root" (optional), which is the context node from where the
     * query should start.
     * @param {String} path The selector/xpath query
     * @param {'select'/'simple'} [type='select'] Pass 'simple' for a simple selector match.
     */
    constructor (path, type) {
        let me = this;
        let lmode = path.match(modeRe);  // accept leading mode switch
        let matchers = me.matchers;
        let ops = me.ops = [];
        let final, i, lastPath, modeMatch, tokenMatch, t, m;

        type = type || 'select';
        path = escapes.normalize(path);

        if (lmode && lmode[1]) {
            ops.push(lmode[1].replace(trimRe, ''));

            path = path.replace(lmode[1], '');
        }

        // strip leading slashes
        for (i = 0; i < path.length && path[i] === '/'; ++i) {
            // empty
        }

        if (i) {
            path = path.substr(i);
        }

        while (path && lastPath !== path) {
            //<debug>
            assert(!final,
                   'Invalid selector "{0}" beyond finalizing token "{1}"', path, final);
            //</debug>

            lastPath = path;
            tokenMatch = path.match(tagTokenRe);

            if (type === 'select') {
                if (tokenMatch) {
                    // ID Selector
                    if (tokenMatch[1] === '#') {
                        ops.push([ 'byIdQuick', tokenMatch[2] ]);
                    }
                    else {
                        ops.push([ 'getNodes', tokenMatch[2] ]);
                    }

                    path = path.replace(tokenMatch[0], '');
                }
                else if (path.substr(0, 1) !== '@') {
                    ops.push([ 'getNodes', '*' ]);
                }
                // type of 'simple'
            }
            else {
                if (tokenMatch) {
                    if (tokenMatch[1] === '#') {
                        ops.push([ 'byId', tokenMatch[2] ]);
                    }
                    else {
                        ops.push([ 'byTag', tokenMatch[2] ]);
                    }

                    path = path.replace(tokenMatch[0], '');
                }
            }

            while (!(modeMatch = path.match(modeRe))) {
                for (t of matchers) {
                    m = path.match(t.re);

                    if (m) {
                        ops.push([ t, m ]);
                        
                        if (t.final) {
                            final = m[0];
                        }

                        path = path.replace(m[0], '');
                        break;
                    }
                }

                // prevent infinite loop on bad selector
                assert(m, 'Invalid selector at "{0}"', path);
            }

            if (modeMatch[1]) {
                ops.push(modeMatch[1].replace(trimRe, ''));

                path = path.replace(modeMatch[1], '');
            }
        }
    }
    
    exec (root) {
        let me = this;
        let nodeSet = [root || me.xml.defaultRoot];
        let fn, mode, op;
        
        me.batchKey = ++Query.batchKey;
        
        for (op of me.ops) {
            if (op.charAt) {
                mode = op;
            }
            else {
                fn = op[0];
                
                if (fn.charAt) {
                    // A named method on our instance:
                    nodeSet = me[fn](nodeSet, mode, root, op[1]);
                }
                else {
                    // One of the matcher fn's:
                    nodeSet = fn.fn.call(me, op[1], nodeSet, mode, root);
                    
                    if (fn.final) {
                        return nodeSet;
                    }
                }
            }
        }
        
        return me.constructor.dedup(nodeSet);
    }
    
    //---------------------------------------------------------------------------

    /**
     * Selects an array of DOM nodes using JavaScript-only implementation.
     *
     * Use {@link #select} to take advantage of browsers built-in support for CSS selectors.
     * @param {String} path The selector/xpath query (can be a comma separated list
     * of selectors)
     * @param {HTMLElement/String} [root=document] The start of the query.
     * @param type
     * @return {HTMLElement[]} An Array of DOM elements which match the selector. If there are
     * no matches, and empty Array is returned.
     */
    static jsSelect (path, root, type) {
        // set root to doc if not specified.
        let Q = this;
        let proto = Q.prototype;
        let defaultRoot = proto.xml.defaultRoot;
        let paths = splitAndUnescape(path, ',');
        let results = [];
        let query, i, len, subPath, result;
        
        if (!root) {
            root = defaultRoot;
        }
        else if (typeof root === 'string') {
            root = defaultRoot.getElementById(root);
        }

        // loop over each selector
        for (i = 0, len = paths.length; i < len; i++) {
            subPath = paths[i].replace(trimRe, '');

            // compile and place in cache
            query = Q.cache.get(subPath, type);
            
            result = query.exec(root);
            
            if (result && result !== defaultRoot) {
                results.push(...result);
            }
        }

        if (paths.length > 1) {
            return Q.dedup(results);
        }
        
        return results;
    }

    static isXml (el) {
        var docEl = (el ? el.ownerDocument || el : 0).documentElement;
        
        return docEl ? docEl.nodeName !== 'HTML' : false;
    }

    /**
     * Selects an array of DOM nodes by CSS/XPath selector and returns an array of DOM
     * elements (not a NodeList as returned by `querySelectorAll`).
     *
     * Uses [document.querySelectorAll][0] if browser supports that, otherwise falls back
     * to {@link Query#jsSelect} to do the work.
     *
     * [0]: https://developer.mozilla.org/en/DOM/document.querySelectorAll
     *
     * @param {String} path The selector/xpath query
     * @param {HTMLElement} [root=document] The start of the query.
     * @param {String} [type='select'] Either 'select' or 'simple' for a simple selector match
     * (only valid when used when the call is deferred to the jsSelect method)
     * @param {Boolean} [single] Pass `true` to select only the first matching node using
     * `document.querySelector` (where available)
     * @return {HTMLElement[]/Element[]}
     */
    static select (path, root, type, single) {
        let me = this;
        
        root = root || me.prototype.xml.defaultRoot;
        
        if (root.querySelectorAll && !me.isXml(root)) {
            try {
                /*
                 * This checking here is to 'fix' the behaviour of querySelectorAll
                 * for non root document queries. The way qsa works is intentional,
                 * however it's definitely not the expected way it should work.
                 * When descendant selectors are used, only the lowest selector must be
                 * inside the root!
                 * More info: http://ejohn.org/blog/thoughts-on-queryselectorall/
                 * So we create a descendant selector by prepending the root's ID,
                 * and query the parent node.
                 * UNLESS the root has no parent in which qsa will work perfectly.
                 *
                 * We only modify the path for single selectors (ie, no multiples),
                 * without a full parser it makes it difficult to do this correctly.
                 */
                if (root.parentNode && root.nodeType !== 9) {
                    if (path.indexOf(',') < 0 && !startIdRe.test(path)) {
                        path = ident.makeSelector(ident.id(root)) + ' ' + path;
                        root = root.parentNode;
                    }
                }
                
                return single
                    ? [ root.querySelector(path) ]
                    : arrayify(root.querySelectorAll(path));
            }
            catch (e) {
                // This block is intentionally left blank
            }
        }

        return me.jsSelect(path, root, type);
    }

    /**
     * Selects a single element.
     * @param {String} path The selector/xpath query
     * @param {HTMLElement} [root=document] The start of the query.
     * @return {HTMLElement} The DOM element which matched the selector.
     */
    static selectNode (path, root) {
        return this.select(path, root, null, true)[0];
    }

    /**
     * Selects the value of a node, optionally replacing null with the defaultValue.
     * @param {String} path The selector/xpath query
     * @param {HTMLElement} [root=document] The start of the query.
     * @param [defaultValue] When specified, this is return as empty value.
     * @return {String}
     */
    static selectValue (path, root, defaultValue) {
        let n, query;
        
        path = path.replace(trimRe, '');

        query = this.valueCache.get(path);

        n = query.exec(root);
        
        return this.getNodeValue(n[0] || n, defaultValue);
    }

    /**
     * Get the text value for a node, optionally replacing null with the defaultValue.
     * @param {Object} node The node
     * @param {String} [defaultValue] When specified, this is return as empty value.
     * @return {String} The value
     */
    static getNodeValue (node, defaultValue) {
        // overcome a limitation of maximum textnode size
        // Rumored to potentially crash IE6 but has not been confirmed.
        // http://reference.sitepoint.com/javascript/Node/normalize
        // https://developer.mozilla.org/En/DOM/Node.normalize
        if (typeof node.normalize === 'function') {
            node.normalize();
        }

        let firstChild = node && node.firstChild;
        let v = firstChild ? firstChild.nodeValue : null;

        // If we have a defaultValue, and v is null, undefined or '', use that
        // value instead.
        //
        if (defaultValue !== undefined && (v == null || v === '')) {
            v = defaultValue;
        }

        return v;
    }

    /**
     * Selects the value of a node, parsing integers and floats.
     * Returns the defaultValue, or 0 if none is specified.
     * @param {String} path The selector/xpath query
     * @param {HTMLElement} [root=document] The start of the query.
     * @param {Number} [defaultValue] When specified, this is return as empty value.
     * @return {Number}
     */
    static selectNumber (path, root, defaultValue) {
        let v = this.selectValue(path, root, defaultValue || 0);
        
        return parseFloat(v);
    }

    /**
     * Returns true if the passed element(s) match the passed simple selector
     * @param {String/HTMLElement/HTMLElement[]} el An element id, element or array of
     * elements.
     * @param {String} ss The simple selector to test.
     * @return {Boolean}
     */
    static is (el, ss) {
        let Q = this;
        let isArray = is.array(el);
        let result;

        if (typeof el === 'string') {
            el = Q.prototype.xml.defaultRoot.getElementById(el);
        }
        
        result = Q.filter(isArray ? el : [el], ss);
        
        return isArray ? (result.length === el.length) : (result.length > 0);
    }

    /**
     * Filters an array of elements to only include matches of a simple selector
     * 
     * Returns an array of DOM elements which match the selector. If there are no matches,
     * an empty array is returned.
     * 
     * @param {HTMLElement[]} els An array of elements to filter
     * @param {String} ss The simple selector to test
     * @param {Boolean} [nonMatches] Pass `true` to return the elements that do not match
     * the selector instead of the ones that match.
     * @return {HTMLElement[]}
     */
    static filter (els, ss, nonMatches) {
        let query, result;

        ss = ss.replace(trimRe, '');

        query = this.simpleCache.get(ss);

        result = query.exec(els);
        
        return nonMatches ? this.quickDiff(result, els) : result;
    }

    //---------------------------------------------------------------------------
    // Internals
    
    attrValue (n, attr) {
        // if its an array, use the first node.
        if (!n.tagName && typeof n.length !== 'undefined') {
            n = n[0];
        }
        
        if (!n) {
            return null;
        }
    
        if (attr === 'for') {
            return n.htmlFor;
        }
        
        if (attr === 'class' || attr === 'className') {
            return n.className;
        }
        
        return n.getAttribute(attr) || n[attr];
    }
    
    // operators are =, !=, ^=, $=, *=, %=, |= and ~=
    // custom can be "{"
    byAttribute (cs, attr, value, op, custom) {
        let me = this;
        let Q = me.constructor;
        let result = [];
        let ri = -1;
        let useGetStyle = custom === '{';
        let fn = me.operators[op];
        let a, xml, hasXml, i, ci;
    
        value = escapes.unescape(value);
    
        for (i = 0; (ci = cs[i]); i++) {
            // skip non-element nodes.
            if (ci.nodeType === 1) {
                // only need to do this for the first node
                if (!hasXml) {
                    xml = Q.isXml(ci);
                    hasXml = true;
                }
    
                // we only need to change the property names if we're dealing with html nodes,
                // not XML
                if (!xml) {
                    if (useGetStyle) {
                        a = me.getStyle(ci, attr);
                    }
                    else if (attr === 'class' || attr === 'className') {
                        a = ci.className;
                    }
                    else if (attr === 'for') {
                        a = ci.htmlFor;
                    }
                    else if (attr === 'href') {
                        /*
                            getAttribute href bug
                            http://www.glennjones.net/Post/809/getAttributehrefbug.htm
                            https://web.archive.org/web/20100118173334/http://www.glennjones.net/Post/809/getAttributehrefbug.htm

                            Some browsers return the text of the attribute and others
                            return the derived absolute URL. The results also differ by
                            the method you use to retrieve the href attribute. There are
                            three common ways to access an attribute:

                                link.href;
                                link[‘href’];
                                link.getAttribute(‘href’);
                                
                            The link.href and link[‘href’]; methods of accessing the
                            attribute consistently return the derived absolute URL.

                            Microsoft has tried to address this by adding a second
                            parameter to the getAttribute method. The second parameter
                            can be set to 0,1 or 2. If the parameter is set to 2 the
                            method returns the attribute text. Any other setting will
                            return the derived absolute URL.                        
                         */
                        a = ci.getAttribute('href', 2);
                    }
                    else {
                        a = ci.getAttribute(attr);
                    }
                }
                else {
                    a = ci.getAttribute(attr);
                }
                
                if ((fn && fn(a, value)) || (!fn && a)) {
                    result[++ri] = ci;
                }
            }
        }
        
        return result;
    }
    
    // nodeSet - array of nodes
    // cls - CSS Class
    // Use classList API where available: http://jsperf.com/classlist-vs-old-school-check/
    byClassName (nodeSet, cls) {
        cls = escapes.unescape(cls);
        
        if (!cls) {
            return nodeSet;
        }
        
        let result = [];
        let ri = -1;
        let i, ci, classList;
    
        for (i = 0; (ci = nodeSet[i]); i++) {
            classList = ci.classList;
            
            if (classList) {
                if (classList.contains(cls)) {
                    result[++ri] = ci;
                }
            }
            else if ((' ' + ci.className + ' ').indexOf(cls) !== -1) {
                // Some elements types (SVG) may not always have a classList
                // in some browsers, so fallback to the old style here
                result[++ri] = ci;
            }
        }
        
        return result;
    }
    
    byId (nodeSet, mode, root, id) {
        let ri = -1;
        let i, ci, result;

        id = escapes.unescape(id);
        
        // if (nodeSet.tagName || nodeSet === this.defaultRoot) {
        //     nodeSet = [nodeSet];
        // }
        
        if (!id) {
            result = nodeSet;
        }
        else {
            result = [];

            for (i = 0; (ci = nodeSet[i]); i++) {
                if (ci && ci.id === id) {
                    result[++ri] = ci;

                    return result;
                }
            }
        }
        
        return result;
    }
    
    byIdQuick (nodeSet, mode, root, id) {
        let me = this;
        let d, ret;
        
        if (nodeSet === root) {
            id = escapes.unescape(id);
            d = root.ownerDocument || root;
            
            ret = d.getElementById(id);
        }
        else {
            nodeSet = me.getNodes(nodeSet, mode, root, '*');

            ret = me.byId(nodeSet, mode, root, id);
        }
        
        return ret;
    }
    
    byPseudo (nodeSet, name, value) {
        value = escapes.unescape(value);
        
        return pseudos[name].call(this, nodeSet, value);
    }

    byTag (nodeSet, mode, root, tagName) {
        let ri = -1;
        let i, ci, result;
        
        // if (cs.tagName || cs === doc) {
        //     cs = [cs];
        // }
        
        if (!tagName) {
            result = nodeSet;
        }
        else {
            result = [];

            tagName = tagName.toLowerCase();

            for (i = 0; (ci = nodeSet[i]); i++) {
                if (ci.nodeType === 1 && ci.tagName.toLowerCase() === tagName) {
                    result[++ri] = ci;
                }
            }
        }
        
        return result;
    }
    
    // Retrieve the child node from a particular parent at the specified index.
    child (parent, index) {
        let children = parent.children;
        let i, n;
        
        if (children && typeof children.length === 'number') {
            return children[index];
        }

        for (i = 0, n = parent.firstChild; n; n = n.nextSibling) {
            if (n.nodeType === 1) {
                if (++i === index) {
                    return n;
                }
            }
        }
        
        return null;
    }
    
    // Mark each child node with a nodeIndex skipping and
    // removing empty text nodes.
    children (parent) {
        let n = parent.firstChild;
        let nodeIndex = -1;
        let nextNode;
    
        while (n) {
            nextNode = n.nextSibling;
            
            // clean worthless empty nodes.
            if (n.nodeType === 3 && !nonSpace.test(n.nodeValue)) {
                parent.removeChild(n);
            }
            else {
                // add an expando nodeIndex
                n.nodeIndex = ++nodeIndex;
            }
            
            n = nextNode;
        }
        
        return this;
    }

    static dedup (nodeSet) {
        if (!nodeSet) {
            return [];
        }

        let len = nodeSet.length;
        let r = nodeSet;
        let ri = -1;
        let c, cj, i, dedupKey, j;

        if (!len || typeof nodeSet.nodeType !== 'undefined' || len === 1) {
            return nodeSet;
        }

        nodeSet[0]._dedupKey = dedupKey = ++this.dedupKey;

        for (i = 1; (c = nodeSet[i]); i++) {
            if (c._dedupKey !== dedupKey) {
                c._dedupKey = dedupKey;
            }
            else {
                r = [];

                for (j = 0; j < i; j++) {
                    r[++ri] = nodeSet[j];
                }

                for (j = i + 1; (cj = nodeSet[j]); j++) {
                    if (cj._dedupKey !== dedupKey) {
                        cj._dedupKey = dedupKey;
                        r[++ri] = cj;
                    }
                }

                return r;
            }
        }

        return r;
    }

    // ns - nodes
    // mode - false, /, >, +, ~
    // tagName - defaults to "*"
    getNodes (nodeSet, mode, root, tagName) {
        let me = this;
        let Q = me.constructor;
        let result = [];
        let ri = -1;
        let cs, i, ni, j, ci, cn, utag, n, cj;
        
        if (!nodeSet) {
            return result;
        }
        
        tagName = tagName.replace('|', ':') || '*';
        
        // convert to array
        if (typeof nodeSet.getElementsByTagName !== 'undefined') {
            nodeSet = [nodeSet];
        }
    
        // no mode specified, grab all elements by tagName
        // at any depth
        if (!mode) {
            tagName = escapes.unescape(tagName);
            
            if (!Xml.supportsColonNsSeparator && Q.isXml(nodeSet[0]) && tagName.indexOf(':') > -1) {
                // Some browsers (e.g. WebKit and Opera do not support the following syntax
                // in xml documents: getElementsByTagName('ns:tagName'). To work around
                // this, we remove the namespace prefix from the tagName, get the elements
                // by tag name only, and then compare each element's tagName property to
                // the tagName with namespace prefix attached to ensure that the tag is in
                // the proper namespace.
                for (i = 0; (ni = nodeSet[i]); i++) {
                    cs = ni.getElementsByTagName(tagName.split(':').pop());
                    
                    for (j = 0; (ci = cs[j]); j++) {
                        if (ci.tagName === tagName) {
                            result[++ri] = ci;
                        }
                    }
                }
            }
            else {
                for (i = 0; (ni = nodeSet[i]); i++) {
                    cs = ni.getElementsByTagName(tagName);
                    
                    for (j = 0; (ci = cs[j]); j++) {
                        result[++ri] = ci;
                    }
                }
            }
            // Direct Child mode (/ or >)
            // E > F or E/F all direct children elements of E that have the tag
        }
        else if (mode === '/' || mode === '>') {
            utag = tagName.toUpperCase();
            
            for (i = 0; (ni = nodeSet[i]); i++) {
                cn = ni.childNodes;
                
                for (j = 0; (cj = cn[j]); j++) {
                    if (cj.nodeName === utag || cj.nodeName === tagName || tagName === '*') {
                        result[++ri] = cj;
                    }
                }
            }
            // Immediately Preceding mode (+)
            // E + F all elements with the tag F that are immediately preceded by an element
            // with the tag E
        }
        else if (mode === '+') {
            utag = tagName.toUpperCase();
            
            for (i = 0; (n = nodeSet[i]); i++) {
                while ((n = n.nextSibling) && n.nodeType !== 1) {
                    // This block is intentionally left blank
                }
                
                if (n && (n.nodeName === utag || n.nodeName === tagName || tagName === '*')) {
                    result[++ri] = n;
                }
            }
            // Sibling mode (~)
            // E ~ F all elements with the tag F that are preceded by a sibling element
            // with the tag E
        }
        else if (mode === '~') {
            utag = tagName.toUpperCase();
            
            for (i = 0; (n = nodeSet[i]); i++) {
                while ((n = n.nextSibling)) {
                    if (n.nodeName === utag || n.nodeName === tagName || tagName === '*') {
                        result[++ri] = n;
                    }
                }
            }
        }
        
        return result;
    }

    getStyle (el, name) {
        return ''; // TODO Ext.fly(el, '_DomQuery').getStyle(name);
    }

    // retrieve the next element node
    next (n) {
        if (n.hasOwnProperty('nextElementSibling')) {
            return n.nextElementSibling;
        }
            
        while ((n = n.nextSibling) && n.nodeType !== 1) {
            // This block is intentionally left blank
        }
        
        return n;
    }
    
    // retrieve the previous element node
    prev (n) {
        if (n.hasOwnProperty('previousElementSibling')) {
            return n.previousElementSibling;
        }
        
        while ((n = n.previousSibling) && n.nodeType !== 1) {
            // This block is intentionally left blank
        }
        
        return n;
    }
    
    pseudo (ps, a, b) {
        return pseudos[ps].call(this, a, b);
    }

    static quickDiff (c1, c2) {
        let len1 = c1.length;
        let dedupKey = ++this.dedupKey;
        let r = [];
        let i, len;
        
        if (!len1) {
            return c2;
        }
        
        for (i = 0; i < len1; i++) {
            c1[i]._qdiff = dedupKey;
        }
        
        for (i = 0, len = c2.length; i < len; i++) {
            if (c2[i]._qdiff !== dedupKey) {
                r[r.length] = c2[i];
            }
        }
        
        return r;
    }
}

export { Query };
