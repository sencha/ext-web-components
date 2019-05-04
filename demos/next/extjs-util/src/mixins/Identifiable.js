import { Base, config, define, Empty, defProp } from '../../../extjs-core/src';

/**
 * An Identifiable mixin.
 * @private
 */
@define({
    prototype: {
        /**
         * @property {Boolean} autoGenId
         * `true` indicates an `id` was auto-generated rather than provided by configuration.
         * @private
         */
        autoGenId: false
    }
})
class Identifiable extends Base {
    static $identifiable = {
        idCleanRe: /\.|[^\w-]/g,
        widgetRe: /^widget\./,
        uniqueIds: new Empty()
    };
    
    static defaultIdPrefix = '';
    
    static defaultIdSeparator = '-';

    /**
     * @cfg {String} id
     * The `id` config identifies this instance amongst other instances in a particular
     * context. By default, this value is generated using the class name and a sequence
     * number. For example `'filter-1'`.
     */
    @config('pre')
    id = '';

    applyId (id) {
        if (!(id || id === 0)) {
            // Indirect through the constructor to allow class-level static override:
            id = this._generateAutoId();
            this.autoGenId = true;
        }

        return id;
    }

    _generateAutoId () {
        let me = this.constructor;
        let privates = me.$identifiable;
        let prototype = me.prototype;
        let alias, cleanRe, defaultIdPrefix, prefix, sep;

        if (!prototype.hasOwnProperty('identifiablePrefix')) {
            alias = me.$meta.alias;
            cleanRe = privates.idCleanRe;
            defaultIdPrefix = me.defaultIdPrefix;
            sep = me.defaultIdSeparator;

            if (alias) {
                // eg: alias: 'layout'  --> "layout-1"
                if (privates.widgetRe.test(alias)) {
                    // eg: xtype: 'button' --> alias: 'widget.button'
                    alias = alias.substr(7);
                }

                prefix = defaultIdPrefix + alias.replace(cleanRe, sep) + sep;
            }
            else if (!(prefix = prototype.$className || me.name)) {
                prefix = defaultIdPrefix + 'ident' + sep;  // ident-1
            }
            else {
                prefix = prefix.replace(cleanRe, sep).toLowerCase();

                if (prefix.indexOf(sep) < 0) {
                    prefix = defaultIdPrefix + prefix;
                }

                prefix += sep;
            }

            defProp(prototype, 'identifiablePrefix', prefix, 'c');
        }

        return me.getNextAutoId(prototype.identifiablePrefix);
    }
    
    static getNextAutoId (prefix) {
        let uniqueIds = this.$identifiable.uniqueIds;

        return prefix + (uniqueIds[prefix] = (uniqueIds[prefix] || 0) + 1);
    }
}

export { Identifiable };
