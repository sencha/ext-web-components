export const digitsStickRe = stickyRegExp(`\\d+`);

export const quotedStringReStr =
    `(?:"(?:[^"\\\\]*(?:\\\\.[^"\\\\]*)*)")|` +
    '(?:`(?:[^`\\\\]*(?:\\\\.[^`\\\\]*)*)`)|' +
    `(?:'(?:[^'\\\\]*(?:\\\\.[^'\\\\]*)*)')`;

export const quotedStringStickyRe =
    stickyRegExp(quotedStringReStr);

/**
 * Escapes the passed string for use in a regular expression.
 * @param {String} string The string to escape.
 * @return {String} The escaped string.
 */
export function escapeRegex (string) {
    return string.replace(escapeRegex.matcher, "\\$1");
}

// eslint-disable-next-line no-useless-escape
escapeRegex.matcher = /([-.*+?\^${}()|\[\]\/\\])/g;

export function escapeString (str) {
    return str.replace(escapeString.matcher, '\\$1');
}

escapeString.matcher = /('|\\)/g;

export const identifierReStr = '[a-zA-Z_$][a-zA-Z0-9_$]*';

export const identifierStickyRe = stickyRegExp(identifierReStr);

/**
 * Pads the left side of a string with a specified character.  This is especially useful
 * for normalizing number and date strings.  Example usage:
 *
 *     var s = Ext.String.leftPad('123', 5, '0');
 *     // s now contains the string: '00123'
 *
 * @param {String} string The original string.
 * @param {Number} size The total length of the output string.
 * @param {String} [character=' '] (optional) The character with which to pad the original
 * string.
 * @return {String} The padded string.
 */
export function leftPad (string, size, character) {
    let result = String(string);

    character = character || ' ';

    while (result.length < size) {
        result = character + result;
    }

    return result;
}

export function quote (s, quote) {
    quote = quote || `'`;
    
    let ret = quote;
    let c;
    
    for (c of s) {
        ret += (c === quote || c === '\\') ? '\\' + c : c;
    }
    
    ret += quote;
    
    return ret;
}

function matchReAt (index, str) {
    this.lastIndex = index;
    
    let m = this.exec(str);

    // Despite asking for a /y re we might only be able to do /g so we
    // have to check the match index:
    return (m && m.index === index) ? m : null;
}

export function stickyRegExp (s, flags) {
    let re;
    
    flags = flags || '';

    try {
        // This feature we cannot polyfill so we feature detect it. Ideally
        // we use /y (sticky) regexp for performance since they won't scan
        // forward and only match at lastIndex.
        re = new RegExp(s, 'y' + flags);
    }
    catch (e) {
        // Otherwise, /g is the best we can do but they will scan forward
        // and we'll have to reject based on match.index value:
        re = new RegExp(s, 'g' + flags);
    }
    
    re.matchAt = matchReAt;
    
    return re;
}

export function unquote (s) {
    let ret = '';
    let c, prev, quote;
    
    for (c of s) {
        if (!quote) {
            quote = c;
        }
        else if (prev === '\\') {
            ret += c;
            prev = '';
        }
        else {
            if (c === quote) {
                break;
            }
            else if (c !== '\\') {
                ret += c;
            }
            
            prev = c;
        }
    }
    
    return ret;
}
