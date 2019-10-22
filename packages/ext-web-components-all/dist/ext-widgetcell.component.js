import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Widget from './Ext/grid/cell/Widget.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtWidgetcell =
/*#__PURE__*/
function (_Ext_grid_cell_Widget) {
  _inheritsLoose(ExtWidgetcell, _Ext_grid_cell_Widget);

  function ExtWidgetcell() {
    var _this;

    _this = _Ext_grid_cell_Widget.call(this, [], []) || this;
    _this.xtype = 'widgetcell';
    return _this;
  }

  return ExtWidgetcell;
}(Ext_grid_cell_Widget);

export { ExtWidgetcell as default };
window.customElements.define('ext-widgetcell', HTMLParsedElement.withParsedCallback(ExtWidgetcell));