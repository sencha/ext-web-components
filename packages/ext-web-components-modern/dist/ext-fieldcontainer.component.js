import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_field_Container from './Ext/field/Container.js';
import ElementParser from './common/ElementParser.js';

var EWCFieldcontainer = /*#__PURE__*/function (_Ext_field_Container) {
  _inheritsLoose(EWCFieldcontainer, _Ext_field_Container);

  var _super = _createSuper(EWCFieldcontainer);

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