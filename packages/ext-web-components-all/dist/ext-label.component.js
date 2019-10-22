import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Label from './Ext/Label.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtLabel =
/*#__PURE__*/
function (_Ext_Label) {
  _inheritsLoose(ExtLabel, _Ext_Label);

  function ExtLabel() {
    var _this;

    _this = _Ext_Label.call(this, [], []) || this;
    _this.xtype = 'label';
    return _this;
  }

  return ExtLabel;
}(Ext_Label);

export { ExtLabel as default };
window.customElements.define('ext-label', HTMLParsedElement.withParsedCallback(ExtLabel));