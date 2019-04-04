export function set(props = {}) {
  return function (el) {
    if (el) {
      Object.entries(props).forEach(([attr, newVal]) => {
        if (/^on/.test(attr)) {
          el.addEventListener(attr.slice(2), newVal);
        }
        else {
          el.setAttribute(attr,JSON.stringify(newVal))
        }
      });
      // Object.entries(events).forEach(([attr, newVal]) => {
      //   if (/^on/.test(attr)) {
      //     el.addEventListener(attr.slice(2), newVal);
      //   }
      // });
    }
  };
}