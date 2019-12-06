import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_grid_cell_Widget from '@sencha/ext-runtime-base/dist/./Ext/grid/cell/Widget.js';
import Ext_grid_cell_Widget from './Ext/grid/cell/Widget.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCWidgetcell =
/*#__PURE__*/
function (_Ext_grid_cell_Widget) {
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
window.customElements.define('ext-widgetcell', HTMLParsedElement.withParsedCallback(EWCWidgetcell));