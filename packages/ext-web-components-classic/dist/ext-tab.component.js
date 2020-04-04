import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_tab_Tab from './Ext/tab/Tab.js';
import ElementParser from './common/ElementParser.js';

var EWCTab = /*#__PURE__*/function (_Ext_tab_Tab) {
  _inheritsLoose(EWCTab, _Ext_tab_Tab);

  var _super = _createSuper(EWCTab);

  function EWCTab() {
    var _this;

    _this = _Ext_tab_Tab.call(this, [], []) || this;
    _this.xtype = 'tab';
    return _this;
  }

  return EWCTab;
}(Ext_tab_Tab);

export { EWCTab as default };

try {
  if (window.customElements.get('ext-tab') == undefined) {
    window.customElements.define('ext-tab', ElementParser.withParsedCallback(EWCTab));
  }
} catch (e) {
  if (window.customElements.get('ext-tab') == undefined) {
    window.customElements.define('ext-tab', EWCTab);
  }
}