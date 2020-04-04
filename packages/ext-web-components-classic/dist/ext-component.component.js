import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_AbstractComponent from './Ext/AbstractComponent.js';
import ElementParser from './common/ElementParser.js';

var EWCComponent = /*#__PURE__*/function (_Ext_AbstractComponen) {
  _inheritsLoose(EWCComponent, _Ext_AbstractComponen);

  var _super = _createSuper(EWCComponent);

  function EWCComponent() {
    var _this;

    _this = _Ext_AbstractComponen.call(this, [], []) || this;
    _this.xtype = 'component';
    return _this;
  }

  return EWCComponent;
}(Ext_AbstractComponent);

export { EWCComponent as default };

try {
  if (window.customElements.get('ext-component') == undefined) {
    window.customElements.define('ext-component', ElementParser.withParsedCallback(EWCComponent));
  }
} catch (e) {
  if (window.customElements.get('ext-component') == undefined) {
    window.customElements.define('ext-component', EWCComponent);
  }
}