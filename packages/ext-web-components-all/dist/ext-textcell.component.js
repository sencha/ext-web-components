import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Text from './Ext/grid/cell/Text.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtTextcellComponent =
/*#__PURE__*/
function (_Ext_grid_cell_Text) {
  _inheritsLoose(ExtTextcellComponent, _Ext_grid_cell_Text);

  function ExtTextcellComponent() {
    var _this;

    _this = _Ext_grid_cell_Text.call(this, [], []) || this;
    _this.xtype = 'textcell';
    return _this;
  }

  return ExtTextcellComponent;
}(Ext_grid_cell_Text); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-textcell', ExtTextcellComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-textcell', HTMLParsedElement.withParsedCallback(ExtTextcellComponent));