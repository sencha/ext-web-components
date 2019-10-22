import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Panel from './Ext/field/Panel.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtFieldpanel =
/*#__PURE__*/
function (_Ext_field_Panel) {
  _inheritsLoose(ExtFieldpanel, _Ext_field_Panel);

  function ExtFieldpanel() {
    var _this;

    _this = _Ext_field_Panel.call(this, [], []) || this;
    _this.xtype = 'fieldpanel';
    return _this;
  }

  return ExtFieldpanel;
}(Ext_field_Panel);

export { ExtFieldpanel as default };
window.customElements.define('ext-fieldpanel', HTMLParsedElement.withParsedCallback(ExtFieldpanel));