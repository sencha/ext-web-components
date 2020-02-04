import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_FieldGroupContainer from './Ext/field/FieldGroupContainer.js';
import ElementParser from './ElementParser.js';

var EWCGroupcontainer =
/*#__PURE__*/
function (_Ext_field_FieldGroup) {
  _inheritsLoose(EWCGroupcontainer, _Ext_field_FieldGroup);

  function EWCGroupcontainer() {
    var _this;

    _this = _Ext_field_FieldGroup.call(this, [], []) || this;
    _this.xtype = 'groupcontainer';
    return _this;
  }

  return EWCGroupcontainer;
}(Ext_field_FieldGroupContainer);

export { EWCGroupcontainer as default };

try {
  window.customElements.define('ext-groupcontainer', ElementParser.withParsedCallback(EWCGroupcontainer));
} catch (e) {
  window.customElements.define('ext-groupcontainer', EWCGroupcontainer);
}