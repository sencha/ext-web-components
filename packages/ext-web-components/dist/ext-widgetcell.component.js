import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Widget_Component from './Ext/grid/cell/Widget';
export var ExtWidgetcellComponent =
/*#__PURE__*/
function (_Ext_grid_cell_Widget) {
  _inheritsLoose(ExtWidgetcellComponent, _Ext_grid_cell_Widget);

  function ExtWidgetcellComponent() {
    return _Ext_grid_cell_Widget.call(this, '', '', {}, '') || this;
  }

  return ExtWidgetcellComponent;
}(Ext_grid_cell_Widget_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-widgetcell', ExtWidgetcellComponent);
  });
})();