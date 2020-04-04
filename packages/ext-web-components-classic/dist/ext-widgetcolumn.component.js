import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_grid_column_Widget from './Ext/grid/column/Widget.js';
import ElementParser from './common/ElementParser.js';

var EWCWidgetcolumn = /*#__PURE__*/function (_Ext_grid_column_Widg) {
  _inheritsLoose(EWCWidgetcolumn, _Ext_grid_column_Widg);

  var _super = _createSuper(EWCWidgetcolumn);

  function EWCWidgetcolumn() {
    var _this;

    _this = _Ext_grid_column_Widg.call(this, [], []) || this;
    _this.xtype = 'widgetcolumn';
    return _this;
  }

  return EWCWidgetcolumn;
}(Ext_grid_column_Widget);

export { EWCWidgetcolumn as default };

try {
  if (window.customElements.get('ext-widgetcolumn') == undefined) {
    window.customElements.define('ext-widgetcolumn', ElementParser.withParsedCallback(EWCWidgetcolumn));
  }
} catch (e) {
  if (window.customElements.get('ext-widgetcolumn') == undefined) {
    window.customElements.define('ext-widgetcolumn', EWCWidgetcolumn);
  }
}