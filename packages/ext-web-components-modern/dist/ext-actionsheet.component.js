import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_ActionSheet from './Ext/ActionSheet.js';
import ElementParser from './common/ElementParser.js';

var EWCActionsheet = /*#__PURE__*/function (_Ext_ActionSheet) {
  _inheritsLoose(EWCActionsheet, _Ext_ActionSheet);

  var _super = _createSuper(EWCActionsheet);

  function EWCActionsheet() {
    var _this;

    _this = _Ext_ActionSheet.call(this, [], []) || this;
    _this.xtype = 'actionsheet';
    return _this;
  }

  return EWCActionsheet;
}(Ext_ActionSheet);

export { EWCActionsheet as default };

try {
  if (window.customElements.get('ext-actionsheet') == undefined) {
    window.customElements.define('ext-actionsheet', ElementParser.withParsedCallback(EWCActionsheet));
  }
} catch (e) {
  if (window.customElements.get('ext-actionsheet') == undefined) {
    window.customElements.define('ext-actionsheet', EWCActionsheet);
  }
}