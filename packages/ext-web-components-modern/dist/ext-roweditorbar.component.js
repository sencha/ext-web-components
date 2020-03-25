import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_grid_rowedit_Bar from './Ext/grid/rowedit/Bar.js';
import ElementParser from './runtime/ElementParser.js';

var EWCRoweditorbar = /*#__PURE__*/function (_Ext_grid_rowedit_Bar) {
  _inheritsLoose(EWCRoweditorbar, _Ext_grid_rowedit_Bar);

  var _super = _createSuper(EWCRoweditorbar);

  function EWCRoweditorbar() {
    var _this;

    _this = _Ext_grid_rowedit_Bar.call(this, [], []) || this;
    _this.xtype = 'roweditorbar';
    return _this;
  }

  return EWCRoweditorbar;
}(Ext_grid_rowedit_Bar);

export { EWCRoweditorbar as default };

try {
  window.customElements.define('ext-roweditorbar', ElementParser.withParsedCallback(EWCRoweditorbar));
} catch (e) {
  window.customElements.define('ext-roweditorbar', EWCRoweditorbar);
}