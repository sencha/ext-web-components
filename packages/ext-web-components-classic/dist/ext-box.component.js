import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_AbstractComponent from './Ext/AbstractComponent.js';
import ElementParser from './common/ElementParser.js';

var EWCBox = /*#__PURE__*/function (_Ext_AbstractComponen) {
  _inheritsLoose(EWCBox, _Ext_AbstractComponen);

  var _super = _createSuper(EWCBox);

  function EWCBox() {
    var _this;

    _this = _Ext_AbstractComponen.call(this, [], []) || this;
    _this.xtype = 'box';
    return _this;
  }

  return EWCBox;
}(Ext_AbstractComponent);

export { EWCBox as default };

try {
  if (window.customElements.get('ext-box') == undefined) {
    window.customElements.define('ext-box', ElementParser.withParsedCallback(EWCBox));
  }
} catch (e) {
  if (window.customElements.get('ext-box') == undefined) {
    window.customElements.define('ext-box', EWCBox);
  }
}