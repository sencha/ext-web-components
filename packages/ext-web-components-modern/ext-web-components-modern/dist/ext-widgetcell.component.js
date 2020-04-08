import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Widget from './Ext/grid/cell/Widget.js';
import ElementParser from './common/ElementParser.js';

var EWCWidgetcell = /*#__PURE__*/function (_Ext_grid_cell_Widget) {
  _inheritsLoose(EWCWidgetcell, _Ext_grid_cell_Widget);

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