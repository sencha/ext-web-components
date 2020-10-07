import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Container from './Ext/field/Container.js';
import ElementParser from './common/ElementParser.js';

var EWCContainerfield = /*#__PURE__*/function (_Ext_field_Container) {
  _inheritsLoose(EWCContainerfield, _Ext_field_Container);

  function EWCContainerfield() {
    var _this;

    _this = _Ext_field_Container.call(this, [], []) || this;
    _this.xtype = 'containerfield';
    return _this;
  }

  return EWCContainerfield;
}(Ext_field_Container);

export { EWCContainerfield as default };

try {
  if (window.customElements.get('ext-containerfield') == undefined) {
    window.customElements.define('ext-containerfield', ElementParser.withParsedCallback(EWCContainerfield));
  }
} catch (e) {
  if (window.customElements.get('ext-containerfield') == undefined) {
    window.customElements.define('ext-containerfield', EWCContainerfield);
  }
}