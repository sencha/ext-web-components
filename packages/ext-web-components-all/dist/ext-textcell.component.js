import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Text from './Ext/grid/cell/Text.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtTextcell =
/*#__PURE__*/
function (_Ext_grid_cell_Text) {
  _inheritsLoose(ExtTextcell, _Ext_grid_cell_Text);

  function ExtTextcell() {
    var _this;

    _this = _Ext_grid_cell_Text.call(this, [], []) || this;
    _this.xtype = 'textcell';
    return _this;
  }

  return ExtTextcell;
}(Ext_grid_cell_Text);

export { ExtTextcell as default };
window.customElements.define('ext-textcell', HTMLParsedElement.withParsedCallback(ExtTextcell));