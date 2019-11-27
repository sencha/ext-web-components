import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_field_FieldGroupContainer from '@sencha/ext-runtime-base/dist/./Ext/field/FieldGroupContainer.js';
import Ext_field_FieldGroupContainer from './Ext/field/FieldGroupContainer.js';
import HTMLParsedElement from './HTMLParsedElement.js';

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
window.customElements.define('ext-groupcontainer', HTMLParsedElement.withParsedCallback(EWCGroupcontainer));