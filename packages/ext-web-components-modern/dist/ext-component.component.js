import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_Gadget from '@sencha/ext-runtime-base/dist/./Ext/Gadget.js';
import Ext_Gadget from './Ext/Gadget.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCComponent =
/*#__PURE__*/
function (_Ext_Gadget) {
  _inheritsLoose(EWCComponent, _Ext_Gadget);

  function EWCComponent() {
    var _this;

    _this = _Ext_Gadget.call(this, [], []) || this;
    _this.xtype = 'component';
    return _this;
  }

  return EWCComponent;
}(Ext_Gadget);

export { EWCComponent as default };
window.customElements.define('ext-component', HTMLParsedElement.withParsedCallback(EWCComponent));