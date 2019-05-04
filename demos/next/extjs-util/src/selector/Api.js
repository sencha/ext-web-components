export const Operators = {
    '=' (a, v) {
        // noinspection EqualityComparisonWithCoercionJS
        return a == v;  // eslint-disable-line eqeqeq
    },

    '!=' (a, v) {
        // noinspection EqualityComparisonWithCoercionJS
        return a != v;  // eslint-disable-line eqeqeq
    },

    '^=' (a, v) {
        return a && a.substr(0, v.length) === v;
    },

    '$=' (a, v) {
        return a && a.substr(a.length - v.length) === v;
    },

    '*=' (a, v) {
        return a && a.indexOf(v) !== -1;
    },

    '%=' (a, v) {
        return (a % v) === 0;
    },

    '|=' (a, v) {
        // noinspection EqualityComparisonWithCoercionJS
        return a && (a == v || a.substr(0, v.length + 1) === v + '-'); // eslint-disable-line eqeqeq
    },

    '~=' (a, v) {
        return a && (' ' + a + ' ').indexOf(' ' + v + ' ') > -1;
    }
};

let splitRe = {};

export function splitAndUnescape (origin, delimiter) {
    if (!origin) {
        return [];
    }
    else if (!delimiter) {
        return [origin];
    }

    // eslint-disable-next-line vars-on-top
    let replaceRe = splitRe[delimiter] || (
        splitRe[delimiter] = new RegExp('\\\\' + delimiter, 'g')
    );
    let parts = origin.split(delimiter);
    let result = [];
    let part;

    while (parts.length) {
        part = parts.shift();
        
        // If any of the parts ends with the delimiter that means
        // the delimiter was escaped and the split was invalid. Roll back.
        while (part.charAt(part.length - 1) === '\\' && parts.length > 0) {
            part = part + delimiter + parts.shift();
        }

        // Now that we have split the parts, unescape the delimiter char
        part = part.replace(replaceRe, delimiter);

        result.push(part);
    }

    return result;
}
