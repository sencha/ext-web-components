import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_grid_column_Widget from '@sencha/ext-runtime-base/dist/./Ext/grid/column/Widget.js';
import Ext_grid_column_Widget from './Ext/grid/column/Widget.js';
import ElementParser from './ElementParser.js';

var EWCWidgetcolumn =
/*#__PURE__*/
function (_Ext_grid_column_Widg) {
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
window.customElements.define('ext-widgetcolumn', ElementParser.withParsedCallback(EWCWidgetcolumn));