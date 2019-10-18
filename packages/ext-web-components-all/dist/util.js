export function doProp(me, prop) {
  Object.defineProperty(me, prop, {
    get: function get() {
      return doGet(me, prop);
    },
    set: function set(val) {
      doSet(me, prop, val);
    }
  });
}

function doSet(me, prop, val) {
  if (val) {
    var val2;

    if (typeof val == 'object') {
      val2 = JSON.stringify(val);
    } else {
      val2 = val;
    }

    me.setAttribute(prop, val2);
  } else {
    me.removeAttribute(prop);
  }
}

function doGet(me, prop) {
  return me.getAttribute(prop);
}

export function filterProp(propertyValue) {
  try {
    var parsedProp = JSON.parse(propertyValue);

    if (parsedProp === null || parsedProp === undefined || parsedProp === true || parsedProp === false || parsedProp === Object(parsedProp) || !isNaN(parsedProp) && parsedProp !== 0) {
      return parsedProp;
    } else {
      return propertyValue;
    }
  } catch (e) {
    return propertyValue;
  }
}
export function isMenu(childxtype) {
  if (childxtype === 'menu') {
    return true;
  } else {
    return false;
  }
}
export function isRenderercell(childxtype) {
  if (childxtype === 'renderercell') {
    return true;
  } else {
    return false;
  }
}
export function isParentGridAndChildColumn(parentxtype, childxtype) {
  if (parentxtype === 'grid' && childxtype.includes("column")) {
    return true;
  } else {
    return false;
  }
}
export function isTooltip(childxtype) {
  if (childxtype === 'tooltip') {
    return true;
  } else {
    return false;
  }
}
export function isPlugin(childxtype) {
  if (childxtype === 'plugin') {
    return true;
  } else {
    return false;
  }
}