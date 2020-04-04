import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_Panel from './Ext/Panel.js';
import ElementParser from './common/ElementParser.js';

var EWCPanel = /*#__PURE__*/function (_Ext_Panel) {
  _inheritsLoose(EWCPanel, _Ext_Panel);

  var _super = _createSuper(EWCPanel);

  function EWCPanel() {
    var _this;

    _this = _Ext_Panel.call(this, [], []) || this;
    _this.xtype = 'panel';
    return _this;
  }

  return EWCPanel;
}(Ext_Panel);

export { EWCPanel as default };

try {
  if (window.customElements.get('ext-panel') == undefined) {
    window.customElements.define('ext-panel', ElementParser.withParsedCallback(EWCPanel));
  }
} catch (e) {
  if (window.customElements.get('ext-panel') == undefined) {
    window.customElements.define('ext-panel', EWCPanel);
  }
}