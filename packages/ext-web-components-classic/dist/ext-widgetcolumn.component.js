import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Widget from './Ext/grid/column/Widget.js';
import ElementParser from './common/ElementParser.js';

var EWCWidgetcolumn = /*#__PURE__*/function (_Ext_grid_column_Widg) {
  _inheritsLoose(EWCWidgetcolumn, _Ext_grid_column_Widg);

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