import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Number from './Ext/grid/cell/Number.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtNumbercell =
/*#__PURE__*/
function (_Ext_grid_cell_Number) {
  _inheritsLoose(ExtNumbercell, _Ext_grid_cell_Number);

  function ExtNumbercell() {
    var _this;

    _this = _Ext_grid_cell_Number.call(this, [], []) || this;
    _this.xtype = 'numbercell';
    return _this;
  }

  return ExtNumbercell;
}(Ext_grid_cell_Number); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-numbercell', ExtNumbercell);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtNumbercell as default };
window.customElements.define('ext-numbercell', HTMLParsedElement.withParsedCallback(ExtNumbercell)); //export default reactify(ExtNumbercell);