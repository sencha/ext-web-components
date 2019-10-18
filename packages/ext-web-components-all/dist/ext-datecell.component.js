import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Date from './Ext/grid/cell/Date.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtDatecellComponent =
/*#__PURE__*/
function (_Ext_grid_cell_Date) {
  _inheritsLoose(ExtDatecellComponent, _Ext_grid_cell_Date);

  function ExtDatecellComponent() {
    var _this;

    _this = _Ext_grid_cell_Date.call(this, [], []) || this;
    _this.xtype = 'datecell';
    return _this;
  }

  return ExtDatecellComponent;
}(Ext_grid_cell_Date); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-datecell', ExtDatecellComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-datecell', HTMLParsedElement.withParsedCallback(ExtDatecellComponent));