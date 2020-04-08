import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Boolean from './Ext/grid/cell/Boolean.js';
import ElementParser from './common/ElementParser.js';

var EWCBooleancell = /*#__PURE__*/function (_Ext_grid_cell_Boolea) {
  _inheritsLoose(EWCBooleancell, _Ext_grid_cell_Boolea);

  function EWCBooleancell() {
    var _this;

    _this = _Ext_grid_cell_Boolea.call(this, [], []) || this;
    _this.xtype = 'booleancell';
    return _this;
  }

  return EWCBooleancell;
}(Ext_grid_cell_Boolean);

export { EWCBooleancell as default };

try {
  if (window.customElements.get('ext-booleancell') == undefined) {
    window.customElements.define('ext-booleancell', ElementParser.withParsedCallback(EWCBooleancell));
  }
} catch (e) {
  if (window.customElements.get('ext-booleancell') == undefined) {
    window.customElements.define('ext-booleancell', EWCBooleancell);
  }
}