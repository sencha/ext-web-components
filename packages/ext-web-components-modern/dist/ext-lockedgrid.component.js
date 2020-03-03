import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_LockedGrid from './Ext/grid/LockedGrid.js';
import ElementParser from './runtime/ElementParser.js';

var EWCLockedgrid = /*#__PURE__*/function (_Ext_grid_LockedGrid) {
  _inheritsLoose(EWCLockedgrid, _Ext_grid_LockedGrid);

  function EWCLockedgrid() {
    var _this;

    _this = _Ext_grid_LockedGrid.call(this, [], []) || this;
    _this.xtype = 'lockedgrid';
    return _this;
  }

  return EWCLockedgrid;
}(Ext_grid_LockedGrid);

export { EWCLockedgrid as default };

try {
  window.customElements.define('ext-lockedgrid', ElementParser.withParsedCallback(EWCLockedgrid));
} catch (e) {
  window.customElements.define('ext-lockedgrid', EWCLockedgrid);
}