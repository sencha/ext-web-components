import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Text from './Ext/grid/cell/Text.js';
import ElementParser from './ElementParser.js';

var EWCTextcell =
/*#__PURE__*/
function (_Ext_grid_cell_Text) {
  _inheritsLoose(EWCTextcell, _Ext_grid_cell_Text);

  function EWCTextcell() {
    var _this;

    _this = _Ext_grid_cell_Text.call(this, [], []) || this;
    _this.xtype = 'textcell';
    return _this;
  }

  return EWCTextcell;
}(Ext_grid_cell_Text);

export { EWCTextcell as default };

try {
  window.customElements.define('ext-textcell', ElementParser.withParsedCallback(EWCTextcell));
} catch (e) {
  window.customElements.define('ext-textcell', EWCTextcell);
}