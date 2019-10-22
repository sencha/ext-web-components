import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_LoadMask from './Ext/LoadMask.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtLoadmask =
/*#__PURE__*/
function (_Ext_LoadMask) {
  _inheritsLoose(ExtLoadmask, _Ext_LoadMask);

  function ExtLoadmask() {
    var _this;

    _this = _Ext_LoadMask.call(this, [], []) || this;
    _this.xtype = 'loadmask';
    return _this;
  }

  return ExtLoadmask;
}(Ext_LoadMask);

export { ExtLoadmask as default };
window.customElements.define('ext-loadmask', HTMLParsedElement.withParsedCallback(ExtLoadmask));