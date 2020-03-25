import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_TreePanel from './Ext/TreePanel.js';
import ElementParser from './runtime/ElementParser.js';

var EWCTreepanel = /*#__PURE__*/function (_Ext_TreePanel) {
  _inheritsLoose(EWCTreepanel, _Ext_TreePanel);

  var _super = _createSuper(EWCTreepanel);

  function EWCTreepanel() {
    var _this;

    _this = _Ext_TreePanel.call(this, [], []) || this;
    _this.xtype = 'treepanel';
    return _this;
  }

  return EWCTreepanel;
}(Ext_TreePanel);

export { EWCTreepanel as default };

try {
  window.customElements.define('ext-treepanel', ElementParser.withParsedCallback(EWCTreepanel));
} catch (e) {
  window.customElements.define('ext-treepanel', EWCTreepanel);
}