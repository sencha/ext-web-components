import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_FieldGroupContainer from './Ext/field/FieldGroupContainer.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtGroupcontainerComponent =
/*#__PURE__*/
function (_Ext_field_FieldGroup) {
  _inheritsLoose(ExtGroupcontainerComponent, _Ext_field_FieldGroup);

  function ExtGroupcontainerComponent() {
    var _this;

    _this = _Ext_field_FieldGroup.call(this, [], []) || this;
    _this.xtype = 'groupcontainer';
    return _this;
  }

  return ExtGroupcontainerComponent;
}(Ext_field_FieldGroupContainer); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-groupcontainer', ExtGroupcontainerComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-groupcontainer', HTMLParsedElement.withParsedCallback(ExtGroupcontainerComponent));