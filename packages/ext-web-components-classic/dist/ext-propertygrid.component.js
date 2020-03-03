import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_PropertyGrid from './Ext/grid/PropertyGrid.js';
import ElementParser from './runtime/ElementParser.js';

var EWCPropertygrid = /*#__PURE__*/function (_Ext_grid_PropertyGri) {
  _inheritsLoose(EWCPropertygrid, _Ext_grid_PropertyGri);

  function EWCPropertygrid() {
    var _this;

    _this = _Ext_grid_PropertyGri.call(this, [], []) || this;
    _this.xtype = 'propertygrid';
    return _this;
  }

  return EWCPropertygrid;
}(Ext_grid_PropertyGrid);

export { EWCPropertygrid as default };

try {
  window.customElements.define('ext-propertygrid', ElementParser.withParsedCallback(EWCPropertygrid));
} catch (e) {
  window.customElements.define('ext-propertygrid', EWCPropertygrid);
}