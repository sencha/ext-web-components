import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import _wrapNativeSuper from "@babel/runtime/helpers/wrapNativeSuper";

var HTMLParsedElement = function () {
  var DCL = 'DOMContentLoaded';
  var init = new WeakMap();
  var queue = [];

  var isParsed = function isParsed(el) {
    do {
      if (el.nextSibling) return true;
    } while (el = el.parentNode);

    return false;
  };

  var upgrade = function upgrade() {
    queue.splice(0).forEach(function (info) {
      if (init.get(info[0]) !== true) {
        init.set(info[0], true);
        info[0][info[1]]();
      }
    });
  };

  document.addEventListener(DCL, upgrade);

  var HTMLParsedElement =
  /*#__PURE__*/
  function (_HTMLElement) {
    _inheritsLoose(HTMLParsedElement, _HTMLElement);

    function HTMLParsedElement() {
      return _HTMLElement.apply(this, arguments) || this;
    }

    HTMLParsedElement.withParsedCallback = function withParsedCallback(Class, name) {
      var _Object$definePropert;

      if (name === void 0) {
        name = 'parsed';
      }

      var prototype = Class.prototype;
      var connectedCallback = prototype.connectedCallback;
      var method = name + 'Callback';

      var cleanUp = function cleanUp(el, observer, ownerDocument, onDCL) {
        observer.disconnect();
        ownerDocument.removeEventListener(DCL, onDCL);
        parsedCallback(el);
      };

      var parsedCallback = function parsedCallback(el) {
        if (!queue.length) requestAnimationFrame(upgrade);
        queue.push([el, method]);
      };

      Object.defineProperties(prototype, (_Object$definePropert = {
        connectedCallback: {
          configurable: true,
          value: function value() {
            if (connectedCallback) connectedCallback.apply(this, arguments);

            if (method in this && !init.has(this)) {
              var self = this;
              var ownerDocument = self.ownerDocument;
              init.set(self, false);
              if (ownerDocument.readyState === 'complete' || isParsed(self)) parsedCallback(self);else {
                var onDCL = function onDCL() {
                  return cleanUp(self, observer, ownerDocument, onDCL);
                };

                ownerDocument.addEventListener(DCL, onDCL);
                var observer = new MutationObserver(function () {
                  /* istanbul ignore else */
                  if (isParsed(self)) cleanUp(self, observer, ownerDocument, onDCL);
                });
                observer.observe(self.parentNode, {
                  childList: true,
                  subtree: true
                });
              }
            }
          }
        }
      }, _Object$definePropert[name] = {
        configurable: true,
        get: function get() {
          return init.get(this) === true;
        }
      }, _Object$definePropert));
      return Class;
    };

    return HTMLParsedElement;
  }(_wrapNativeSuper(HTMLElement));

  return HTMLParsedElement.withParsedCallback(HTMLParsedElement);
}();

export default HTMLParsedElement;