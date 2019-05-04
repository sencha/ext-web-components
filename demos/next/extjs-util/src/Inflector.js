import { capitalize } from '../../extjs-core/src';

/**
 * @class Inflector
 * @singleton
 * 
 * General purpose singleton that {@link #pluralize pluralizes},
 * {@link #singularize singularizes} and {@link #ordinalize ordinalizes} words. Sample usage:
 *
 *     //turning singular words into plurals
 *     Inflector.pluralize('word'); //'words'
 *     Inflector.pluralize('person'); //'people'
 *     Inflector.pluralize('sheep'); //'sheep'
 *
 *     //turning plurals into singulars
 *     Inflector.singularize('words'); //'word'
 *     Inflector.singularize('people'); //'person'
 *     Inflector.singularize('sheep'); //'sheep'
 *
 *     //ordinalizing numbers
 *     Inflector.ordinalize(11); //"11th"
 *     Inflector.ordinalize(21); //"21st"
 *     Inflector.ordinalize(1043); //"1043rd"
 *
 * # Customization
 *
 * The Inflector comes with a default set of US English pluralization rules. These can be augmented
 * with additional rules if the default rules do not meet your application's requirements,
 * or swapped out entirely for other languages. Here is how we might add a rule that pluralizes
 * "ox" to "oxen":
 *
 *     Inflector.plural(/^(ox)$/i, "$1en");
 *
 * Each rule consists of two items - a regular expression that matches one or more rules,
 * and a replacement string. In this case, the regular expression will only match the string "ox",
 * and will replace that match with "oxen". Here's how we could add the inverse rule:
 *
 *     Inflector.singular(/^(ox)en$/i, "$1");
 *
 * Note that the ox/oxen rules are present by default.
 */
export const Inflector = {
    /* eslint-disable no-multi-spaces */

    /**
     * @property {Array} plurals
     * The registered plural tuples. Each item in the array should contain two items - the
     * first must be a regular expression that matchers the singular form of a word, the
     * second must be a String that replaces the matched part of the regular expression.
     * This is managed by the {@link #plural} method.
     * @private
     */
    plurals: [
        [(/(quiz)$/i),                "$1zes"  ],
        [(/^(ox)$/i),                 "$1en"   ],
        [(/([m|l])ouse$/i),           "$1ice"  ],
        [(/(matr|vert|ind)ix|ex$/i),  "$1ices" ],
        [(/(x|ch|ss|sh)$/i),          "$1es"   ],
        [(/([^aeiouy]|qu)y$/i),       "$1ies"  ],
        [(/(hive)$/i),                "$1s"    ],
        [(/(?:([^f])fe|([lr])f)$/i),  "$1$2ves"],
        [(/sis$/i),                   "ses"    ],
        [(/([ti])um$/i),              "$1a"    ],
        [(/(buffal|tomat|potat)o$/i), "$1oes"  ],
        [(/(bu)s$/i),                 "$1ses"  ],
        [(/(alias|status|sex)$/i),    "$1es"   ],
        [(/(octop|vir)us$/i),         "$1i"    ],
        [(/(ax|test)is$/i),           "$1es"   ],
        [(/^(p)erson$/i),             "$1eople"],
        [(/^(m)an$/i),                "$1en"   ],
        [(/(.*)(child)(ren)?$/i),     "$1$2ren"],
        [(/s$/i),                     "s"      ],
        [(/$/),                       "s"      ]
    ],

    /**
     * @property {Array} singulars
     * The set of registered singular matchers. Each item in the array should contain two
     * items - the first must be a regular expression that matches the plural form of a
     * word, the second must be a String that replaces the matched part of the regular
     * expression. This is managed by the {@link #singular} method.
     * @private
     */
    singulars: [
        [(/(address)$/i),                                                    "$1"     ],
        [(/(quiz)zes$/i),                                                    "$1"     ],
        [(/(matr)ices$/i),                                                   "$1ix"   ],
        [(/(vert|ind)ices$/i),                                               "$1ex"   ],
        [(/^(ox)en/i),                                                       "$1"     ],
        [(/(alias|status)es$/i),                                             "$1"     ],
        [(/(octop|vir)i$/i),                                                 "$1us"   ],
        [(/(cris|ax|test)es$/i),                                             "$1is"   ],
        [(/(shoe)s$/i),                                                      "$1"     ],
        [(/(o)es$/i),                                                        "$1"     ],
        [(/(bus)es$/i),                                                      "$1"     ],
        [(/([m|l])ice$/i),                                                   "$1ouse" ],
        [(/(x|ch|ss|sh)es$/i),                                               "$1"     ],
        [(/(m)ovies$/i),                                                     "$1ovie" ],
        [(/(s)eries$/i),                                                     "$1eries"],
        [(/([^aeiouy]|qu)ies$/i),                                            "$1y"    ],
        [(/([lr])ves$/i),                                                    "$1f"    ],
        [(/(tive)s$/i),                                                      "$1"     ],
        [(/(hive)s$/i),                                                      "$1"     ],
        [(/([^f])ves$/i),                                                    "$1fe"   ],
        [(/(^analy)ses$/i),                                                  "$1sis"  ],
        [(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i), "$1$2sis"],
        [(/([ti])a$/i),                                                      "$1um"   ],
        [(/(n)ews$/i),                                                       "$1ews"  ],
        [(/(p)eople$/i),                                                     "$1erson"],
        [(/s$/i),                                                            ""       ]
    ],

    /* eslint-enable no-multi-spaces */
    
    /**
     * @property {Object} uncountable
     * The registered uncountable words
     * @private
     */
    uncountable: {
        sheep: 1,
        fish: 1,
        series: 1,
        species: 1,
        money: 1,
        rice: 1,
        information: 1,
        equipment: 1,
        grass: 1,
        mud: 1,
        offspring: 1,
        deer: 1,
        means: 1
    },

    /**
     * Adds a new singularization rule to the Inflector. See the intro docs for more information
     * @param {RegExp} matcher The matcher regex
     * @param {String} replacer The replacement string, which can reference matches from the matcher
     * argument
     */
    singular (matcher, replacer) {
        this.singulars.unshift([matcher, replacer]);
    },

    /**
     * Adds a new pluralization rule to the Inflector. See the intro docs for more information
     * @param {RegExp} matcher The matcher regex
     * @param {String} replacer The replacement string, which can reference matches from the matcher
     * argument
     */
    plural (matcher, replacer) {
        this.plurals.unshift([matcher, replacer]);
    },

    /**
     * Removes all registered singularization rules
     */
    clearSingulars () {
        this.singulars = [];
    },

    /**
     * Removes all registered pluralization rules
     */
    clearPlurals () {
        this.plurals = [];
    },

    /**
     * Returns true if the given word is transnumeral (the word is its own singular and
     * plural form - e.g. sheep, fish)
     * @param {String} word The word to test
     * @return {Boolean}
     */
    isTransnumeral (word) {
        return !!this.uncountable[word];
    },

    /**
     * Returns the pluralized form of a word (e.g. Inflector.pluralize('word')
     * returns 'words')
     * @param {String} word The word to pluralize
     * @return {String} The pluralized form of the word
     */
    pluralize (word) {
        if (this.isTransnumeral(word)) {
            return word;
        }

        // eslint-disable-next-line vars-on-top
        let plurals = this.plurals;
        let length = plurals.length;
        let tuple, regex, i;

        for (i = 0; i < length; i++) {
            tuple = plurals[i];
            regex = tuple[0];

            // eslint-disable-next-line eqeqeq
            if (regex == word || (regex.test && regex.test(word))) {
                return word.replace(regex, tuple[1]);
            }
        }

        return word;
    },

    /**
     * Returns the singularized form of a word (e.g. Inflector.singularize('words')
     * returns 'word')
     * @param {String} word The word to singularize
     * @return {String} The singularized form of the word
     */
    singularize (word) {
        if (this.isTransnumeral(word)) {
            return word;
        }

        // eslint-disable-next-line vars-on-top
        let singulars = this.singulars;
        let length = singulars.length;
        let tuple, regex, i;

        for (i = 0; i < length; i++) {
            tuple = singulars[i];
            regex = tuple[0];

            // eslint-disable-next-line eqeqeq
            if (regex == word || (regex.test && regex.test(word))) {
                return word.replace(regex, tuple[1]);
            }
        }

        return word;
    },

    /**
     * Returns the correct {@link Model Model} name for a given string. Mostly used
     * internally by the data
     * package
     * @param {String} word The word to classify
     * @return {String} The classified version of the word
     */
    classify (word) {
        return capitalize(this.singularize(word));
    },

    /**
     * Ordinalizes a given number by adding a prefix such as 'st', 'nd', 'rd' or 'th' based on
     * the last digit of the number. 21 -> 21st, 22 -> 22nd, 23 -> 23rd, 24 -> 24th etc
     * @param {Number} number The number to ordinalize
     * @return {String} The ordinalized number
     */
    ordinalize (number) {
        let parsed = parseInt(number, 10);
        let mod10 = parsed % 10;
        let mod100 = parsed % 100;

        // 11 through 13 are a special case
        if (11 <= mod100 && mod100 <= 13) {
            return number + "th";
        }

        switch (mod10) {
            case 1 : return number + "st";
            case 2 : return number + "nd";
            case 3 : return number + "rd";
            default: return number + "th";
        }
    }
};

// Aside from the rules above, there are a number of words that have irregular pluralization
// so we add them here:
Object.entries({
    alumnus: 'alumni',
    cactus: 'cacti',
    focus: 'foci',
    nucleus: 'nuclei',
    radius: 'radii',
    stimulus: 'stimuli',
    ellipsis: 'ellipses',
    paralysis: 'paralyses',
    oasis: 'oases',
    appendix: 'appendices',
    index: 'indexes',
    beau: 'beaux',
    bureau: 'bureaux',
    tableau: 'tableaux',
    woman: 'women',
    child: 'children',
    man: 'men',
    corpus: 'corpora',
    criterion: 'criteria',
    curriculum: 'curricula',
    genus: 'genera',
    memorandum: 'memoranda',
    phenomenon: 'phenomena',
    foot: 'feet',
    goose: 'geese',
    tooth: 'teeth',
    antenna: 'antennae',
    formula: 'formulae',
    nebula: 'nebulae',
    vertebra: 'vertebrae',
    vita: 'vitae'
}).forEach(([singular, plural]) => {
    Inflector.plural(singular, plural);
    Inflector.singular(plural, singular);
});
