import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_grid_cell_Widget from './Ext/grid/cell/Widget.js';
import ElementParser from './common/ElementParser.js';

var EWCWidgetcell = /*#__PURE__*/function (_Ext_grid_cell_Widget) {
  _inheritsLoose(EWCWidgetcell, _Ext_grid_cell_Widget);

  var _super = _createSuper(EWCWidgetcell);

  function EWCWidgetcell() {
    var _this;

    _this = _Ext_grid_cell_Widget.call(this, [], []) || this;
    _this.xtype = 'widgetcell';
    return _this;
  }

  return EWCWidgetcell;
}(Ext_grid_cell_Widget);

export { EWCWidgetcell as default };

try {
  if (window.customElements.get('ext-widgetcell') == undefined) {
    window.customElements.define('ext-widgetcell', ElementParser.withParsedCallback(EWCWidgetcell));
  }
} catch (e) {
  if (window.customElements.get('ext-widgetcell') == undefined) {
    window.customElements.define('ext-widgetcell', EWCWidgetcell);
  }
}