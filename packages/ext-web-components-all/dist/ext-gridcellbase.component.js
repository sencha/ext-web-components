import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Base from './Ext/grid/cell/Base.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtGridcellbase =
/*#__PURE__*/
function (_Ext_grid_cell_Base) {
  _inheritsLoose(ExtGridcellbase, _Ext_grid_cell_Base);

  function ExtGridcellbase() {
    var _this;

    _this = _Ext_grid_cell_Base.call(this, [], []) || this;
    _this.xtype = 'gridcellbase';
    return _this;
  }

  return ExtGridcellbase;
}(Ext_grid_cell_Base); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-gridcellbase', ExtGridcellbase);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtGridcellbase as default };
window.customElements.define('ext-gridcellbase', HTMLParsedElement.withParsedCallback(ExtGridcellbase)); //export default reactify(ExtGridcellbase);