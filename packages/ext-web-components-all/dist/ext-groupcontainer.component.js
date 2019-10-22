import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_FieldGroupContainer from './Ext/field/FieldGroupContainer.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtGroupcontainer =
/*#__PURE__*/
function (_Ext_field_FieldGroup) {
  _inheritsLoose(ExtGroupcontainer, _Ext_field_FieldGroup);

  function ExtGroupcontainer() {
    var _this;

    _this = _Ext_field_FieldGroup.call(this, [], []) || this;
    _this.xtype = 'groupcontainer';
    return _this;
  }

  return ExtGroupcontainer;
}(Ext_field_FieldGroupContainer);

export { ExtGroupcontainer as default };
window.customElements.define('ext-groupcontainer', HTMLParsedElement.withParsedCallback(ExtGroupcontainer));