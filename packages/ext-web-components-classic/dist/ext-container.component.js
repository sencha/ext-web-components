import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_AbstractContainer from './Ext/AbstractContainer.js';
import ElementParser from './runtime/ElementParser.js';

var EWCContainer = /*#__PURE__*/function (_Ext_AbstractContaine) {
  _inheritsLoose(EWCContainer, _Ext_AbstractContaine);

  var _super = _createSuper(EWCContainer);

  function EWCContainer() {
    var _this;

    _this = _Ext_AbstractContaine.call(this, [], []) || this;
    _this.xtype = 'container';
    return _this;
  }

  return EWCContainer;
}(Ext_AbstractContainer);

export { EWCContainer as default };

try {
  window.customElements.define('ext-container', ElementParser.withParsedCallback(EWCContainer));
} catch (e) {
  window.customElements.define('ext-container', EWCContainer);
}