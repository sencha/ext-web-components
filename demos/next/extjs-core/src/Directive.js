import {
    assert, capitalize, comparePrimitive, Empty, is, prototype, raise, statics, toArray
} from './Misc';

/**
 * Directives are helper objects that capture the options of the `directives` mechanism
 * for classes.
 *
 * For example:
 *
 *      @define({
 *          directives: [ 'config' ]
 *      })
 *      class Foo extends Base {
 *          static includeConfig () {
 *          }
 *      }
 *
 * Alternatively:
 *
 *      @define({
 *          directives: {
 *              config: 'mixins'
 *
 *              // Equivalent to:
 *              config: {
 *                  after: 'mixins'
 *              }
 *          }
 *      })
 *      class Foo extends Base {
 *          static includeConfig () {
 *          }
 *      }
 */
@prototype({
    after: null,
    before: null,

    inherited: false,
    sorting: false,
    sorted: false
})
@statics({
    nameMap: new Empty()
})
class Directive {
    constructor (name, options) {
        this.applier = Directive.getApplierName(name);
        this.name = name;

        if (options) {
            let after;

            if (typeof options === 'string' || is.array(options)) {
                after = toArray(options);
            }
            else {
                after = toArray(options.after) || null;
                this.before = toArray(options.before) || null;
            }

            this.after = after;
        }
    }

    clone () {
        let after = this.after;
        let before = this.before;
        let options = after ? { after: after } : null;

        if (before) {
            (options || (options = {})).before = before;
        }

        return new Directive(this.name, options);
    }

    sort (state) {
        if (this.sorted) {
            return;
        }

        let name = this.name;
        let path = state.path;
        let a, after, i, pred;

        path.push(name);

        if (this.sorting) {
            raise(`Circular directive dependencies: ${path.join(" --> ")}`);
        }

        this.sorting = true;

        for (after = this.after, i = 0; i < 2; ++i, after = state.afters[name]) {
            if (after) {
                for (a of after) {
                    pred = state.map[a];
                    assert(pred, 'No such directive "{0}" (used by "{1}")', a, name);
                    pred.sort(state);
                }
            }
        }

        this.sorting = false;
        this.sorted = true;

        path.pop();
        state.sorted.push(this);
    }

    static decode (directives, inherited) {
        let map = new Empty();

        if (typeof directives === 'string') {
            directives = [directives];
        }

        if (is.array(directives)) {
            for (let name of directives) {
                map[name] = new Directive(name);
            }
        }
        else {
            for (let name in directives) {
                map[name] = new Directive(name, directives[name]);
            }
        }

        if (inherited) {
            for (let proc of inherited) {
                if (!map[proc.name]) {
                    proc = proc.clone();
                    proc.inherited = true;
                    map[proc.name] = proc;
                }
            }
        }

        return Directive.sort(map);
    }

    static getApplierName (name) {
        let nameMap = Directive.nameMap;
        let ret = nameMap[name];

        if (!ret) {
            let cap = capitalize(name);

            nameMap[name] = ret = 'include' + cap;
        }

        return ret;
    }

    static sort (procMap) {
        let directives = Object.values(procMap);
        let ret = [];
        let state = {
            afters: new Empty(),
            map: procMap,
            path: [],
            sorted: ret
        };

        for (let proc of directives) {
            let before = proc.before;

            if (before) {
                for (let b of before) {
                    assert(procMap[b],
                           `No directive matches "before"="{0}" on {1}`, b, proc.name);

                    let afters = state.afters;
                    (afters[b] || (afters[b] = [])).push(proc.name);
                }
            }
        }

        // Sort the directives so that inherited directives are inserted first.
        directives.sort(Directive.sortFn);

        for (let proc of directives) {
            proc.sort(state);
        }

        ret.byName = procMap;

        return ret;
    }

    static sortFn (a, b) {
        if (a.inherited === b.inherited) {
            return comparePrimitive(a.name, b.name);
        }

        return a.inherited ? -1 : 1;
    }
}

export { Directive };
