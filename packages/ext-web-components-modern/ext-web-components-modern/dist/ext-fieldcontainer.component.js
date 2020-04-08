import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Container from './Ext/field/Container.js';
import ElementParser from './common/ElementParser.js';

var EWCFieldcontainer = /*#__PURE__*/function (_Ext_field_Container) {
  _inheritsLoose(EWCFieldcontainer, _Ext_field_Container);

  function EWCFieldcontainer() {
    var _this;

    _this = _Ext_field_Container.call(this, [], []) || this;
    _this.xtype = 'fieldcontainer';
    return _this;
  }

  return EWCFieldcontainer;
}(Ext_field_Container);

export { EWCFieldcontainer as default };

try {
  if (window.customElements.get('ext-fieldcontainer') == undefined) {
    window.customElements.define('ext-fieldcontainer', ElementParser.withParsedCallback(EWCFieldcontainer));
  }
} catch (e) {
  if (window.customElements.get('ext-fieldcontainer') == undefined) {
    window.customElements.define('ext-fieldcontainer', EWCFieldcontainer);
  }
}