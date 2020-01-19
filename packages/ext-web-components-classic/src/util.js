import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

const Ext = window.Ext;

export function doProp(me, prop) {
  try {
    Object.defineProperty(me, prop, {
      get: function(){return doGet(me,prop)},
      set: function(val){doSet(me,prop,val)}
    });
  }
  catch(e) {
  }
}

function doSet(me,prop,val) {
  //console.log('doSet: ' + prop)
  if (prop == 'plugins') {
    return
  }
  if (val) {
    var val2;
    var valExt;
    if (typeof val == 'object' || typeof val == 'function' || typeof val == '[object Object]') {
      me.attributeObjects[prop] = val
      val2 = typeof val
      valExt = val
    }
    else {
      val2 = val
      valExt = val
    }
    var method = 'set' + prop[0].toUpperCase() + prop.substring(1)
    try {
      me.A.ext[method](valExt)
    }
    catch(e) {
    }
    me.setAttribute(prop, val2)
  }
  else {
    me.removeAttribute(prop)
  }
}
function doGet(me,prop) {
  //console.log('doGet: ' + prop)
  if (me.getAttribute(prop) == 'object' || me.getAttribute(prop) == 'function' || me.getAttribute(prop) == '[object Object]') {
    return me.attributeObjects[prop]
  }
  else if (me.getAttribute(prop) != null) {
    return me.getAttribute(prop)
  }
  else {
    return null
  }
}

export function filterProp(propertyValue, property, me) {
  try {
    if (propertyValue == 'error') {
      return me.attributeObjects[property]
    }
    const parsedProp = JSON.parse(propertyValue);

    if (parsedProp === null ||
        parsedProp === undefined ||
        parsedProp === true ||
        parsedProp === false ||
        parsedProp === Object(parsedProp) ||
        (!isNaN(parsedProp) && parsedProp !== 0)
    ) {
        return parsedProp;
    } else {
      return propertyValue;
    }
  }
  catch(e) {
    return propertyValue;
  }
}

export function isMenu(childxtype) {
  if (childxtype === 'menu') {
    return true
  }
  else {
    return false
  }
}

export function isRenderercell(childxtype) {
  if (childxtype === 'renderercell') {
    return true
  }
  else {
    return false
  }
}

export function isParentGridAndChildToolbar(parentxtype, childxtype) {
  if (parentxtype === 'grid' && childxtype === 'toolbar') {
    return true;
  } else {
    return false;
  }
}

export function isParentGridAndChildColumn(parentxtype,childxtype) {
  if (parentxtype === 'grid' && childxtype.includes("column")) {
    return true
  }
  else {
    return false
  }
}

export function isTooltip(childxtype) {
  if (childxtype === 'tooltip') {
    return true
  }
  else {
    return false
  }
}

export function isPlugin(childxtype) {
  if (childxtype === 'plugin') {
    return true
  }
  else {
    return false
  }
}




/**
 * A implementation of Ext.Template that supports React elements (JSX).
 *
 * Usage:
 *
 *  const tpl = new Template(data => (
 *      <div>
 *          <div>{data.firstName} {data.lastName}</div>
 *          <div>{data.title}</div>
 *      </div>
 *  ))
 *
 *  const html = tpl.apply({ firstName: 'Joe', lastName: 'Smith', title: 'CEO' });
 */
export const Template = Ext.define(null, {
    extend: 'Ext.Template',

    /**
     * @param {Function} fn A function that takes data values as an object and returns a React.Element to be rendered.
     */
    constructor(fn) {
        this.fn = fn;
    },

    // overrides Ext.Template
    apply(values) {
        return ReactDOMServer.renderToStaticMarkup(this.fn(values));
    },

    // overrides Ext.Template
    doInsert(where, el, values, returnElement) {
        const target = this.getCachedTarget();
        this.doRender(values, target);
        const dom = target.firstChild;
        const result = Ext.dom.Helper.doInsert(el, dom, returnElement, where);
        this.unmountChildrenOnRemove(dom);
        return result;
    },

    // overrides Ext.Template
    overwrite(el, values, returnElement) {
        const dom = Ext.getDom(el);
        const result = this.doRender(values, dom);
        this.unmountChildrenOnRemove(dom);
        return returnElement ? new Ext.Element(dom) : dom;
    },

    /**
     * @private
     * @return {HTMLElement}
     */
    getCachedTarget() {
        if (!this.cachedTarget) this.cachedTarget = document.createElement('div');
        return this.cachedTarget;
    },

    /**
     * Renders the result of this.fn to the specified target
     * @private
     * @param {Object} values Values to pass to this.fn
     * @param {HTMLElement} target The element into which the result should be rendered.
     * @return {HTMLElement} The newly rendered element
     */
    doRender(values, target) {
        const reactElement = this.fn(values);
        ReactDOM.render(reactElement, target);
        return target.firstChild;
    },

    /**
     * Ensures that componentWillUnmount is called on each descendent component when the target node is removed from the DOM.
     * @param {Node} target A node containing a React tree
     */
    unmountChildrenOnRemove(target) {
        const parent = target.parentNode;
        const parentKey = '$extreactObserveRemoveChild';
        const targetKey = '$extreactUnmountOnRemove';
        target[targetKey] = true; // we tag the target with $extreactUnmountOnRemove so we know it has a React tree to unmount when removed

        if (!parent[parentKey]) { // we tag the parent with $extreactObserveRemoveChild so we can ensure we are only observing it once
            parent[parentKey] = true;

            const observer = new MutationObserver(mutations => {
                mutations.forEach(({ removedNodes }) => {
                    for (let i=0; i<removedNodes.length; i++) {
                        let node = removedNodes[i];

                        if (node[targetKey]) {
                            ReactDOM.unmountComponentAtNode(node); // Unmount the React tree when the target dom node is removed.
                        }
                    }
                })
            });

            observer.observe(parent, { childList: true });
        }
    }
});

//export default Template;

// Hook Ext.XTemplate.get so that we can just pass a function that returns JSX in place of a XTemplate.


