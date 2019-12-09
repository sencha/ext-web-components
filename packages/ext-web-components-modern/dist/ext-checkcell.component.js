import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_grid_cell_Check from '@sencha/ext-runtime-base/dist/./Ext/grid/cell/Check.js';
import Ext_grid_cell_Check from './Ext/grid/cell/Check.js';
import ElementParser from './ElementParser.js';

var EWCCheckcell =
/*#__PURE__*/
function (_Ext_grid_cell_Check) {
  _inheritsLoose(EWCCheckcell, _Ext_grid_cell_Check);

  function EWCCheckcell() {
    var _this;

    _this = _Ext_grid_cell_Check.call(this, [], []) || this;
    _this.xtype = 'checkcell';
    return _this;
  }

  return EWCCheckcell;
}(Ext_grid_cell_Check);

export { EWCCheckcell as default };
window.customElements.define('ext-checkcell', ElementParser.withParsedCallback(EWCCheckcell));