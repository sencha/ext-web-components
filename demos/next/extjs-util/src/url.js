import {
    //<debug>
    assert,
    //</debug>

    is
} from '../../extjs-core/src';

const keyRe = /(\[):?([^\]]*)]/g;
const nameRe = /^([^[]+)/;
const plusRe = /\+/g;
const queryRe = /^\?/;

/**
 * Appends content to the query string of a URL, handling logic for whether to place
 * a question mark or ampersand.
 * @param {String} url The URL to append to.
 * @param {String} string The content to append to the URL.
 * @return {String}
 */
export function addQuery (url, string) {
    url = url || '';

    return string ? url + (url.includes('?') ? '&' : '?') + string : url;
}

/**
 * Converts a `name`/`value` pair to an array of objects with support for nested structures.
 * Useful to construct query strings. For example:
 *
 *      let objects = toQueryPairs('hobbies', ['reading', 'cooking', 'swimming']);
 *
 *      // objects then equals:
 *      [
 *          [ 'hobbies', 'reading' ],
 *          [ 'hobbies', 'cooking' ],
 *          [ 'hobbies', 'swimming' ]
 *      ];
 *
 * Recursively:
 * 
 *      let objects = toQueryPairs('dateOfBirth', {
 *          day: 3,
 *          month: 8,
 *          year: 1987,
 *          extra: { hour: 4, minute: 30 }
 *      }, true);
 *
 *      // objects then equals:
 *      [
 *          [ 'dateOfBirth[day]',           3 ],
 *          [ 'dateOfBirth[month]',         8 ],
 *          [ 'dateOfBirth[year]',          1987 ],
 *          [ 'dateOfBirth[extra][hour]',   4 ],
 *          [ 'dateOfBirth[extra][minute]', 30 ]
 *      ];
 *
 * @param {String} name
 * @param {Object/Array} value
 * @param {Boolean} [recursive] Pass `true` to traverse object recursively
 * @return {Object[]}
 */
export function toQueryPairs (name, value, recursive) {
    let pairs = [];
    let i, keys;

    if (is.array(value)) {
        for (i = 0; i < value.length; ++i) {
            if (recursive) {
                pairs.push(...toQueryPairs(`${name}[${i}]`, value[i], recursive));
            }
            else {
                pairs.push([ name, value[i] ]);
            }
        }
    }
    else if (is.object(value)) {
        keys = [];

        for (i in value) {
            keys.push(i);
        }
        
        keys.sort();

        for (i of keys) {
            if (recursive) {
                pairs.push(...toQueryPairs(`${name}[${i}]`, value[i], recursive));
            }
            else {
                pairs.push([ name, value[i] ]);
            }
        }
    }
    else {
        pairs.push([ name, value ]);
    }

    return pairs;
}

/**
 * Takes an object and converts it to an encoded query string.
 *
 * Non-recursive:
 *
 *     console.log(toQueryString({foo: 1, bar: 2})); 
 *     console.log(toQueryString({foo: null, bar: 2})); 
 *     console.log(toQueryString({'some price': '$300'})); 
 *     console.log(toQueryString({date: new Date(2011, 0, 1)})); 
 *     console.log(toQueryString({colors: ['red', 'green', 'blue']})); 
 *     
 *     > "foo=1&bar=2"
 *     > "foo=&bar=2"
 *     > "some%20price=%24300"
 *     > "date=%222011-01-01T00%3A00%3A00%22"
 *     > "colors=red&colors=green&colors=blue"
 *
 * Recursive:
 *
 *     console.log(toQueryString({
 *         username: 'Bob',
 *         dateOfBirth: { day: 1, month: 2, year: 1911 },
 *         hobbies: ['coding', 'eating', 'sleeping', ['nested', 'stuff']]
 *     }, true));
 *     
 *     > username=Bob
 *         &dateOfBirth[day]=1
 *         &dateOfBirth[month]=2
 *         &dateOfBirth[year]=1911
 *         &hobbies[0]=coding
 *         &hobbies[1]=eating
 *         &hobbies[2]=sleeping
 *         &hobbies[3][0]=nested
 *         &hobbies[3][1]=stuff
 *
 * @param {Object} object The object to encode
 * @param {Boolean} [recursive] Pass `true` to interpret the object in recursive format.
 * (for PHP / Ruby on Rails servers and similar).
 * @return {String}
 */
export function toQueryString (object, recursive) {
    let pairs = [];
    let params = [];
    let key, p, v;

    for (key of Object.keys(object)) {
        pairs.push(...toQueryPairs(key, object[key], recursive));
    }

    for (p of pairs) {
        v = p[1];

        if (is.empty(v)) {
            v = '';
        }
        else if (is.date(v)) {
            v = v.toISOString().slice(0, -5);  // trim ".343Z" off "2019-01-27T00:45:37.343Z"
        }

        params.push(`${encodeURIComponent(p[0])}=${encodeURIComponent(String(v))}`);
    }

    return params.join('&');
}

/**
 * Converts a query string back into an object.
 *
 * Non-recursive:
 *
 *     console.log(fromQueryString("foo=1&bar=2"));
 *     console.log(fromQueryString("foo=&bar=2"));
 *     console.log(fromQueryString("some%20price=%24300"));
 *     console.log(fromQueryString("colors=red&colors=green&colors=blue"));
 *     
 *     > {foo: '1', bar: '2'}
 *     > {foo: '', bar: '2'}
 *     > {'some price': '$300'}
 *     > {colors: ['red', 'green', 'blue']}
 *
 * Recursive:
 *
 *     let object = fromQueryString([
 *         'username=Bob',
 *         'dateOfBirth[day]=1',
 *         'dateOfBirth[month]=2',
 *         'dateOfBirth[year]=1911',
 *         'hobbies[0]=coding',
 *         'hobbies[1]=eating',
 *         'hobbies[2]=sleeping',
 *         'hobbies[3][0]=nested',
 *         'hobbies[3][1]=stuff'
 *     ].join('&'), true);
 *
 *     // returns
 *     {
 *         username: 'Bob',
 *         dateOfBirth: { day: '1', month: '2', year: '1911' },
 *         hobbies: ['coding', 'eating', 'sleeping', ['nested', 'stuff']]
 *     }
 *
 * @param {String} queryString The query string to decode
 * @param {Boolean} [recursive] Pass `true` to recursively decode the string. This format
 * is supported by PHP / Ruby on Rails servers and similar.
 * @return {Object}
 */
export function fromQueryString (queryString, recursive) {
    let parts = queryString.replace(queryRe, '').split('&');
    let object = {};
    let temp, components, name, value, part, i, len, matchedKeys, matchedName,
        keys, key, nextKey;

    for (part of parts) {
        if (part.length > 0) {
            components = part.split('=');
            name = components[0];
            name = name.replace(plusRe, '%20');
            name = decodeURIComponent(name);

            value = components[1];
            
            if (value !== undefined) {
                value = value.replace(plusRe, '%20');
                value = decodeURIComponent(value);
            }
            else {
                value = '';
            }

            if (!recursive) {
                if (object.hasOwnProperty(name)) {
                    if (!is.array(object[name])) {
                        object[name] = [object[name]];
                    }

                    object[name].push(value);
                }
                else {
                    object[name] = value;
                }
            }
            else {
                matchedKeys = name.match(keyRe);
                matchedName = name.match(nameRe);

                //<debug>
                assert(matchedName, '[fromQueryString] Invalid query string "{0}"', part);
                //</debug>

                name = matchedName[0];
                keys = [];

                if (matchedKeys === null) {
                    object[name] = value;
                    continue;
                }

                for (key of matchedKeys) {
                    key = (key.length === 2) ? '' : key.substring(1, key.length - 1);
                    keys.push(key);
                }

                keys.unshift(name);

                temp = object;

                for (i = 0, len = keys.length; i < len; ++i) {
                    key = keys[i];

                    if (i === len - 1) {
                        if (is.array(temp) && key === '') {
                            temp.push(value);
                        }
                        else {
                            temp[key] = value;
                        }
                    }
                    else {
                        if (temp[key] === undefined || typeof temp[key] === 'string') {
                            nextKey = keys[i + 1];

                            temp[key] = (is.number(nextKey) || nextKey === '') ? [] : {};
                        }

                        temp = temp[key];
                    }
                }
            }
        }
    }

    return object;
}
