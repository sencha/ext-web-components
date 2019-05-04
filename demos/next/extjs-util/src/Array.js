import { Empty, is } from '../../extjs-core/src';

export function arrayEquals (array1, array2) {
    let ret = array1 === array2;
    let i, len;

    if (!ret && array1 && array2 && (len = array1.length) === array2.length) {
        ret = !ret;  // flip to true

        for (i = 0; i < len; ++i) {
            if (array1[i] !== array2[i]) {
                ret = !ret;  // back to false
                break;
            }
        }
    }

    return ret;
}

/**
 * This method returns the index that a given item would be inserted into the
 * given (sorted) `array`. Note that the given `item` may or may not be in the
 * array. This method will return the index of where the item *should* be.
 *
 * For example:
 *
 *      var array = [ 'A', 'D', 'G', 'K', 'O', 'R', 'X' ];
 *      var index = Ext.Array.binarySearch(array, 'E');
 *
 *      console.log('index: ' + index);
 *      // logs "index: 2"
 *
 *      array.splice(index, 0, 'E');
 *
 *      console.log('array : ' + array.join(''));
 *      // logs "array: ADEGKORX"
 *
 * @param {Object[]} array The array to search.
 * @param {Object} item The item that you want to insert into the `array`.
 * @param {Number} [begin=0] The first index in the `array` to consider.
 * @param {Number} [end=array.length] The index that marks the end of the range
 * to consider. The item at this index is *not* considered.
 * @param {Function} [compareFn] The comparison function that matches the sort
 * order of the `array`. The default `compareFn` compares items using less-than
 * and greater-than operators.
 * @return {Number} The index for the given item in the given array based on
 * the current sorters.
 */
export function binarySearch (array, item, begin, end, compareFn) {
    let length = array.length;
    let middle, comparison;

    if (typeof begin === 'function') {
        compareFn = begin;
        begin = 0;
        end = length;
    }
    else if (typeof end === 'function') {
        compareFn = end;
        end = length;
    }
    else {
        if (begin === undefined) {
            begin = 0;
        }
        
        if (end === undefined) {
            end = length;
        }
        
        compareFn = compareFn || lexicalCompare;
    }

    --end;

    while (begin <= end) {
        middle = (begin + end) >> 1;
        comparison = compareFn(item, array[middle]);
        
        if (comparison >= 0) {
            begin = middle + 1;
        }
        else if (comparison < 0) {
            end = middle - 1;
        }
    }

    return begin;
}

export function binarySearchNumbers (array, value, begin, end) {
    let middle, midVal;

    if (begin === undefined) {
        begin = 0;
    }
    
    if (end === undefined) {
        end = array.length;
    }

    --end;

    while (begin <= end) {
        middle = (begin + end) >>> 1; // unsigned right shift = Math.floor(x/2)
        midVal = array[middle];

        if (value === midVal) {
            return middle;
        }
        
        if (midVal < value) {
            begin = middle + 1;
        }
        else {
            end = middle - 1;
        }
    }

    return begin;
}

export function defaultCompare (lhs, rhs) {
    return (lhs < rhs) ? -1 : ((lhs > rhs) ? 1 : 0);
}

// Default comparator to use when no comparator is specified for the sort method.
// Javascript sort does LEXICAL comparison.
export function lexicalCompare (lhs, rhs) {
    lhs = String(lhs);
    rhs = String(rhs);

    return (lhs < rhs) ? -1 : ((lhs > rhs) ? 1 : 0);
}

/*
 * Calculates the the insertion index of a passed object into the passed Array according
 * to the passed comparator function. Note that the passed Array *MUST* already be ordered.
 * @param {Object} item The item to calculate the insertion index for.
 * @param {Array} The array into which the item is to be inserted.
 * @param {Function} comparatorFn The comparison function. Must return -1 or 0 or 1.
 * @param {Object} comparatorFn.lhs The left object to compare.
 * @param {Object} comparatorFn.rhs The right object to compare.
 * @param {Number} index The possible correct index to try first before a binary
 * search is instigated.
 */
export function findInsertionIndex (item, items, comparatorFn, index) {
    let len = items.length;
    let beforeCheck, afterCheck;

    comparatorFn = comparatorFn || lexicalCompare;

    if (index < len) {
        beforeCheck = index > 0 ? comparatorFn(items[index - 1], item) : 0;
        afterCheck = index < len - 1 ? comparatorFn(item, items[index]) : 0;
        
        if (beforeCheck < 1 && afterCheck < 1) {
            return index;
        }
    }

    return binarySearch(items, item, comparatorFn);
}

// /**
//  * Converts any iterable (numeric indices and a length property) into a true array.
//  *
//  *     function test() {
//  *         var args = Ext.Array.toArray(arguments),
//  *             fromSecondToLastArgs = Ext.Array.toArray(arguments, 1);
//  *
//  *         alert(args.join(' '));
//  *         alert(fromSecondToLastArgs.join(' '));
//  *     }
//  *
//  *     test('just', 'testing', 'here'); // alerts 'just testing here';
//  *                                      // alerts 'testing here';
//  *
//  *     // will convert the NodeList into an array
//  *     Ext.Array.toArray(document.getElementsByTagName('div'));
//  *     Ext.Array.toArray('splitted'); // returns ['s', 'p', 'l', 'i', 't', 't', 'e', 'd']
//  *     Ext.Array.toArray('splitted', 0, 3); // returns ['s', 'p', 'l']
//  *
//  * {@link Ext#toArray Ext.toArray} is alias for {@link Ext.Array#toArray Ext.Array.toArray}
//  *
//  * @param {Object} iterable the iterable object to be turned into a true Array.
//  * @param {Number} [start=0] a zero-based index that specifies the start of extraction.
//  * @param {Number} [end=-1] a 1-based index that specifies the end of extraction.
//  * @return {Array}
//  */
// export function toArray (iterable, start, end) {
//     var array = [],
//         i;
//
//     if (!iterable || !iterable.length) {
//         return array;
//     }
//
//     if (typeof iterable === 'string') {
//         iterable = iterable.split('');
//     }
//
//     if (supportsSliceOnNodeList) {
//         return slice.call(iterable, start || 0, end || iterable.length);
//     }
//
//     start = start || 0;
//     end = end ? ((end < 0) ? iterable.length + end : end) : iterable.length;
//
//     for (i = start; i < end; i++) {
//         array.push(iterable[i]);
//     }
//
//     return array;
// },

/**
 * Plucks the value of a property from each item in the Array. Example:
 *
 *     let classes = pluck(document.querySelectorAll('p'), 'className');
 *     
 *     // classes = [ el1.className, el2.className, ..., elN.className ]
 *
 * @param {Array/NodeList} array The Array of items to pluck the value from.
 * @param {String} propertyName The property name to pluck from each element.
 * @return {Array}
 */
export function pluck (array, propertyName) {
    let ret = [];
    let item;

    for (item of array) {
        ret.push(item[propertyName]);
    }

    return ret;
}

//
// /**
//  * Converts a value to an array if it's not already an array; returns:
//  *
//  * - An empty array if given value is `undefined` or `null`
//  * - Itself if given value is already an array
//  * - An array copy if given value is {@link Ext#isIterable iterable} (arguments, NodeList
//  * and alike)
//  * - An array with one item which is the given value, otherwise
//  *
//  * @param {Object} value The value to convert to an array if it's not already is an array.
//  * @param {Boolean} [newReference] `true` to clone the given array and return a new
//  * reference if necessary.
//  * @return {Array} array
//  */
// from: function (value, newReference) {
//     var type;
//    
//     if (value === undefined || value === null) {
//         return [];
//     }
//
//     if (is.array(value)) {
//         return (newReference) ? slice.call(value) : value;
//     }
//
//     type = typeof value;
//    
//     // Both strings and functions will have a length property. In phantomJS, NodeList
//     // instances report typeof=='function' but don't have an apply method...
//     if (value && value.length !== undefined && type !== 'string' &&
//         (type !== 'function' || !value.apply)) {
//         return ExtArray.toArray(value);
//     }
//
//     return [value];
// },

export function flattenTo (array, out, filter) {
    let filt = filter && ((typeof filter === 'function') ? filter : a => a.hasOwnProperty(filter));

    out = out || [];

    for (let item of array) {
        if (is.array(item) && (!filt || filt(item))) {
            flattenTo(item, out, filt);
        }
        else {
            out.push(item);
        }
    }

    return out;
}

/**
 * Recursively flattens array elements that are themselves arrays into a new array of all
 * non-array elements.
 *
 * @param {Array} array The array to flatten
 * @param {String/Symbol/Function} [filter] A filter to apply to individual arrays. If the
 * array `hasOwnProperty` this named property or Symbol, that array will be flattened out
 * of the result. If this is a function, it must return `true` to flatten a particular
 * array it is passed.
 * @return {Array}
 */
export function flatten (array, filter) {
    return flattenTo(array, [], filter);
}

/**
 * Returns the minimum value in the Array.
 *
 * @param {Array/NodeList} array The Array from which to select the minimum value.
 * @param {Function} comparisonFn (optional) a function to perform the comparison which
 * determines minimization.
 * If omitted the "<" operator will be used.
 * __Note:__ gt = 1; eq = 0; lt = -1
 * @param comparisonFn.min Current minimum value.
 * @param comparisonFn.item The value to compare with the current minimum.
 * @return {Object} minValue The minimum value.
 */
export function min (array, comparisonFn) {
    let smallest = array[0];
    let item;

    for (item of array) {
        if (comparisonFn) {
            if (comparisonFn(smallest, item) > 0) {
                smallest = item;
            }
        }
        else if (item < smallest) {
            smallest = item;
        }
    }

    return smallest;
}

/**
 * Returns the maximum value in the Array.
 *
 * @param {Array/NodeList} array The Array from which to select the maximum value.
 * @param {Function} comparisonFn (optional) a function to perform the comparison which
 * determines maximization.
 * If omitted the ">" operator will be used.
 * __Note:__ gt = 1; eq = 0; lt = -1
 * @param {Mixed} comparisonFn.max Current maximum value.
 * @param {Mixed} comparisonFn.item The value to compare with the current maximum.
 * @return {Object} maxValue The maximum value.
 */
export function max (array, comparisonFn) {
    let largest = array[0];
    let item;

    for (item of array) {
        if (comparisonFn) {
            if (comparisonFn(largest, item) < 0) {
                largest = item;
            }
        }
        else if (item > largest) {
            largest = item;
        }
    }

    return largest;
}

/**
 * Calculates the mean of all items in the array.
 *
 * @param {Array} array The Array to calculate the mean value of.
 * @return {Number} The mean.
 */
export function mean (array) {
    return array.length > 0 ? sum(array) / array.length : undefined;
}

export function push (array, ...items) {
    array.push(...items);  // this returns the new length... useless really

    return array;
}

/**
 * Calculates the sum of all items in the given array.
 *
 * @param {Array} array The Array to calculate the sum value of.
 * @return {Number} The sum.
 */
export function sum (array) {
    let sum = 0;
    let item;

    for (item of array) {
        sum += item;
    }

    return sum;
}

/**
 * Creates a map (object) keyed by the elements of the given array. The values in
 * the map are the index+1 of the array element. For example:
 * 
 *      var map = Ext.Array.toMap(['a','b','c']);
 *
 *      // map = { a: 1, b: 2, c: 3 };
 * 
 * Or a key property can be specified:
 * 
 *      var map = Ext.Array.toMap([
 *              { name: 'a' },
 *              { name: 'b' },
 *              { name: 'c' }
 *          ], 'name');
 *
 *      // map = { a: 1, b: 2, c: 3 };
 * 
 * Lastly, a key extractor can be provided:
 * 
 *      var map = Ext.Array.toMap([
 *              { name: 'a' },
 *              { name: 'b' },
 *              { name: 'c' }
 *          ], function (obj) { return obj.name.toUpperCase(); });
 *
 *      // map = { A: 1, B: 2, C: 3 };
 * 
 * @param {String/String[]} strings The strings from which to create the map.
 * @param {String/Function} [getKey] Name of the object property to use
 * as a key or a function to extract the key.
 * @param {Object} [scope] Value of `this` inside callback specified for `getKey`.
 * @return {Object} The resulting map.
 */
export function toMap (strings, getKey, scope) {
    if (!strings) {
        return null;
    }

    let map = new Empty();
    let i = strings.length;

    if (typeof strings === 'string') {
        map[strings] = 1;
    }
    else if (!getKey) {
        while (i--) {
            map[strings[i]] = i + 1;
        }
    }
    else if (typeof getKey === 'string') {
        while (i--) {
            map[strings[i][getKey]] = i + 1;
        }
    }
    else {
        while (i--) {
            map[getKey.call(scope, strings[i])] = i + 1;
        }
    }

    return map;
}

/**
 * Creates a map (object) keyed by a property of elements of the given array. The values in
 * the map are the array element. For example:
 * 
 *      var map = Ext.Array.toValueMap(['a','b','c']);
 *
 *      // map = { a: 'a', b: 'b', c: 'c' };
 * 
 * Or a key property can be specified:
 * 
 *      var map = Ext.Array.toValueMap([
 *              { name: 'a' },
 *              { name: 'b' },
 *              { name: 'c' }
 *          ], 'name');
 *
 *      // map = { a: {name: 'a'}, b: {name: 'b'}, c: {name: 'c'} };
 * 
 * Lastly, a key extractor can be provided:
 * 
 *      var map = Ext.Array.toValueMap([
 *              { name: 'a' },
 *              { name: 'b' },
 *              { name: 'c' }
 *          ], function (obj) { return obj.name.toUpperCase(); });
 *
 *      // map = { A: {name: 'a'}, B: {name: 'b'}, C: {name: 'c'} };
 *
 * @param {Array} array The Array to create the map from.
 * @param {String/Function} [getKey] Name of the object property to use
 * as a key or a function to extract the key.
 * @param {Object} [scope] Value of this inside callback. This parameter is only
 * passed when `getKey` is a function. If `getKey` is not a function, the 3rd
 * argument is `arrayify`.
 * @param {Number} [arrayify] Pass `1` to create arrays for all map entries
 * or `2` to create arrays for map entries that have 2 or more items with the
 * same key. This only applies when `getKey` is specified. By default the map will
 * hold the last entry with a given key.
 * @return {Object} The resulting map.
 */
export function toValueMap (array, getKey, scope, arrayify) {
    let map = new Empty();
    let i = array.length;
    let autoArray, alwaysArray, entry, fn, key, value;

    if (!getKey) {
        while (i--) {
            value = array[i];
            map[value] = value;
        }
    }
    else {
        if (!(fn = (typeof getKey !== 'string'))) {
            arrayify = scope;
        }

        alwaysArray = arrayify === 1;
        autoArray = arrayify === 2;

        while (i--) {
            value = array[i];
            key = fn ? getKey.call(scope, value) : value[getKey];

            if (alwaysArray) {
                if (key in map) {
                    map[key].push(value);
                }
                else {
                    map[key] = [ value ];
                }
            }
            else if (autoArray && (key in map)) {
                if (is.array(entry = map[key])) {
                    entry.push(value);
                }
                else {
                    map[key] = [ entry, value ];
                }
            }
            else {
                map[key] = value;
            }
        }
    }

    return map;
}

export function move (array, fromIdx, toIdx) {
    if (toIdx === fromIdx) {
        return;
    }

    /* eslint-disable-next-line vars-on-top */
    let item = array[fromIdx];
    let incr = toIdx > fromIdx ? 1 : -1;
    let i;

    for (i = fromIdx; i !== toIdx; i += incr) {
        array[i] = array[i + incr];
    }

    array[toIdx] = item;
}

// Sort an array using the comparator, but if the comparator returns zero, use the objects'
// original indices to tiebreak This results in a stable sort.
export function stableSort (array, comparator) {
    let len = array.length;
    let indices = new Array(len);
    let i;

    comparator = comparator || lexicalCompare;

    // generate 0-n index map from original array
    for (i = 0; i < len; i++) {
        indices[i] = i;
    }

    // Sort indices array using a comparator which compares the original values at the two
    // indices, and uses those indices as a tiebreaker
    indices.sort((index1, index2) =>
        comparator(array[index1], array[index2]) || (index1 - index2)
    );

    // Reconstitute a sorted array using the array of sorted indices:
    for (i = 0; i < len; i++) {
        indices[i] = array[indices[i]];
    }

    // Rebuild the original array
    for (i = 0; i < len; i++) {
        array[i] = indices[i];
    }

    return array;
}
