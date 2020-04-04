import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_field_Container from './Ext/field/Container.js';
import ElementParser from './common/ElementParser.js';

var EWCContainerfield = /*#__PURE__*/function (_Ext_field_Container) {
  _inheritsLoose(EWCContainerfield, _Ext_field_Container);

  var _super = _createSuper(EWCContainerfield);

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