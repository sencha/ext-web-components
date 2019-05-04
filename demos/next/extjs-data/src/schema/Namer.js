import {
    Base, Factoryable,
    define, capitalize, decapitalize
} from '../../../extjs-core/src';

import { Inflector } from '../../../extjs-util/src';

/**
 * This class provides name derivation methods for use by a `Schema`.
 * 
 * # Caching
 * 
 * Because most name derivations are only textual manipulations of input strings, the
 * results can be cached. This is handled by the `apply` method by giving it the name of
 * the method to call. For example:
 * 
 *      let str = namer.capitalize('foo'); //  = "Foo"
 *      
 *      let str = namer.apply('capitalize', 'foo');
 * 
 * The return value of the second call (using `apply`) is the same as the first, however,
 * the results of `capitalize` are cached. This allows repeated calls to `apply` given the
 * same operation and string to avoid the extra string manipulation.
 * 
 * # Usage
 * 
 * This class is not intended to be created by application code. It is created by `Schema`
 * instances as directed by the `namer` config. Application code can derive from this
 * class and set the `namer` config to customize naming conventions used by the `Schema`.
 * 
 * @protected
 */
@define({
    mixins: [
        Factoryable
    ],
    
    alias: 'namer.default',
    
    prototype: {
        endsWithIdRe: /(?:(_id)|[^A-Z](Id))$/,

        cache: {}
    }
})
class Namer extends Base {
    //-------------------------------------------------------------------------
    // Cacheable methods

    capitalize (name) {
        return capitalize(name);
    }

    /**
     * Given the name of a foreign key field, return the role of the related entity. For
     * example, fields like "fooId" or "foo_id" this implementation returns "foo".
     * @template
     */
    fieldRole (name) {
        let match = name.match(this.endsWithIdRe, '');
        
        if (match) {
            name = name.substr(0, name.length - (match[1] || match[2]).length);
        }
        
        return this.apply('uncapitalize', name);
    }

    idField (name) {
        // ex: User ==> userId
        return this.apply('uncapitalize,singularize', name) + 'Id';
    }

    instanceName (roleName) {
        return this.apply('underscore', roleName);
    }

    multiRole (name) {
        return this.apply('undotted,uncapitalize,pluralize', name);
    }

    pluralize (name) {
        return Inflector.pluralize(name);
    }
    
    readerRoot (roleName) {
        return this.apply('uncapitalize', roleName);
    }

    singularize (name) {
        return Inflector.singularize(name);
    }

    storeName (roleName) {
        return this.apply('underscore', roleName);
    }

    uncapitalize (name) {
        return decapitalize(name);
    }

    underscore (name) {
        return '_' + name;
    }

    uniRole (name) {
        return this.apply('undotted,uncapitalize,singularize', name);
    }

    undotted (name) {
        let parts, index;
        
        if (name.indexOf('.') < 0) {
            return name;
        }

        parts = name.split('.');
        index = parts.length;

        while (index-- > 1) {
            parts[index] = this.apply('capitalize', parts[index]);
        }

        return parts.join('');
    }

    //-------------------------------------------------------------------------
    // Non-Cacheable methods

    getterName (role) {
        let name = role.role;

        if (role && role.isMany) {
            // return this.apply('uncapitalize,pluralize', name);
            return name;
        }

        // return this.apply('capitalize,singularize', name);
        return 'get' + this.apply('capitalize', name);
    }

    inverseFieldRole (leftType, unique, rightRole, rightType) {
        // In a FK association, the left side may be unique in which case we have a
        // one-to-one otherwise we have a one-to-many. If the FK field is just the
        // name of the right side class (e.g., if it is "order"), then we don't want
        // to include the field name in the left role.
        let me = this;
        let leftRole = me.apply(unique ? 'uniRole' : 'multiRole', leftType);
        let s1 = me.apply('pluralize', rightRole);
        let s2 = me.apply('undotted,pluralize', rightType);

        if (s1.toLowerCase() !== s2.toLowerCase()) {
            // Otherwise, we have something like "creatorId" on Ticket that holds a
            // reference to User. This makes the right role "creator" so rather than
            // make the left role "tickets" we make it "creatorTickets".
            leftRole = rightRole + me.apply('capitalize', leftRole);
        }

        return leftRole;
    }

    manyToMany (relation, leftType, rightType) {
        let me = this;
        // ex: UserGroups
        let ret = me.apply('undotted,capitalize,singularize', leftType) +
                  me.apply('undotted,capitalize,pluralize', rightType);

        if (relation) {
            ret = me.apply('capitalize', relation + ret);
        }

        return ret;
    }

    /**
     * Returns the name for a one-to-many association given the left and right type and
     * the associating `role`.
     * 
     * In many cases the `role` matches the target type. For example, an OrderItem might
     * have an "orderId" field which would have a `role` of "order". If this is a reference
     * to an Order entity then the association name will be "OrderOrderItems".
     * 
     * When the `role` does not match, it is included in the association name. For example,
     * consider a Ticket entity with a "creatorId" field that references a User entity.
     * The `role` of that field will (by default) be "creator". The returned association
     * name will be "UserCreatorTickets".
     */
    manyToOne (leftRole, rightType, rightRole) {
        // ex: OrderItem -> Order  ==> OrderOrderItems
        //  Ticket (creator) -> User ==> UserCreatorTickets
        return this.apply('capitalize,singularize', rightType) +
               this.apply('capitalize', leftRole);
    }

    matrixRole (relation, entityType) {
        let ret = this.apply(relation ? 'multiRole,capitalize' : 'multiRole', entityType);
        
        return relation ? relation + ret : ret;
    }

    oneToOne (leftRole, rightType, rightRole) {
        return this.apply('undotted,capitalize,singularize', rightType) +
               this.apply('capitalize', leftRole);
    }

    setterName (role) {
        return 'set' + this.apply('capitalize', role.role);
    }
    
    //-------------------------------------------------------------------------
    // Private

    apply (operation, name) {
        let me = this;
        let cache = me.cache;
        let entry = cache[name] || (cache[name] = {});
        let ret = entry[operation];
        let i, length, operations;

        if (!ret) {
            if (operation.indexOf(',') < 0) {
                ret = me[operation](name);
            }
            else {
                length = (operations = operation.split(',')).length;
                ret = name;
                
                for (i = 0; i < length; ++i) {
                    ret = me.apply(operations[i], ret);
                }
            }

            entry[operation] = ret;
        }

        return ret;
    }
}

export { Namer };
