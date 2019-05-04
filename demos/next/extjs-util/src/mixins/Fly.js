import { Base, define } from '../../../extjs-core/src';

/**
 * This class is a base for classes that want to provide a `fly` static method.
 *
 * For example:
 *
 *      @define
 *      class Thing extends Fly {
 *          // useful but expensive to construct stuff
 *      }
 *
 *      let thing = Thing.fly(42);  // passes 42 to the reset method
 *
 *      // use "thing"
 *
 *      thing.release();   // return to the pool for future reuse
 *
 * As mixin:
 *
 *      @define({
 *          mixins: [
 *              Fly
 *          ]          
 *      })
 *      class Thing extends Something {
 *          // useful but expensive to construct stuff
 *      }
 *
 * @private
 */
@define
class Fly extends Base {
    static _flyweights = null;

    static flyPoolSize = 2;

    static get flyweights () {
        return this.hasOwnProperty('_flyweights') && this._flyweights || (this._flyweights = []);
    }

    /**
     * Returns a flyweight instance. These instances should be returned when no
     * longer needed by calling `release`.
     *
     * Additional arguments passed to this method will be passed on to the `reset`
     * method.
     *
     * @return {Fly}
     */
    static fly (...args) {
        let T = this;
        let flyweights = T.flyweights;
        let instance = flyweights.length ? flyweights.pop() : new T();

        instance.reset(...args);
        
        return instance;
    }

    /**
     * This method should be called when a flyweight instance is no longer needed and
     * should be returned to the flyweight pool.
     */
    release () {
        let me = this;
        let T = me.constructor;
        let flyweights = T.flyweights;

        me.reset();

        if (flyweights.length < T.flyPoolSize) {
            flyweights.push(me);
        }
    }

    /**
     * Resets this instance to prepare for use. Derived classes may accept additional
     * arguments.
     *
     * When called with no arguments, the class should relinquish any resources it can
     * and prepare to wait for potential reuse.
     * @chainable
     * @return {Fly} this
     */
    reset () {
        // empty
        return this;
    }
}

export { Fly };
