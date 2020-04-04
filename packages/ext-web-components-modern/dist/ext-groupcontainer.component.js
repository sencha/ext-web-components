import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_field_FieldGroupContainer from './Ext/field/FieldGroupContainer.js';
import ElementParser from './common/ElementParser.js';

var EWCGroupcontainer = /*#__PURE__*/function (_Ext_field_FieldGroup) {
  _inheritsLoose(EWCGroupcontainer, _Ext_field_FieldGroup);

  var _super = _createSuper(EWCGroupcontainer);

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
  if (window.customElements.get('ext-groupcontainer') == undefined) {
    window.customElements.define('ext-groupcontainer', ElementParser.withParsedCallback(EWCGroupcontainer));
  }
} catch (e) {
  if (window.customElements.get('ext-groupcontainer') == undefined) {
    window.customElements.define('ext-groupcontainer', EWCGroupcontainer);
  }
}