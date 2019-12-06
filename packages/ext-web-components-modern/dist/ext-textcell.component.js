import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_grid_cell_Text from '@sencha/ext-runtime-base/dist/./Ext/grid/cell/Text.js';
import Ext_grid_cell_Text from './Ext/grid/cell/Text.js';
import HTMLParsedElement from './HTMLParsedElement.js';

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
window.customElements.define('ext-textcell', HTMLParsedElement.withParsedCallback(EWCTextcell));