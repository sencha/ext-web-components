import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_PropertyGrid from './Ext/grid/PropertyGrid.js';
import ElementParser from './common/ElementParser.js';

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
  if (window.customElements.get('ext-propertygrid') == undefined) {
    window.customElements.define('ext-propertygrid', ElementParser.withParsedCallback(EWCPropertygrid));
  }
} catch (e) {
  if (window.customElements.get('ext-propertygrid') == undefined) {
    window.customElements.define('ext-propertygrid', EWCPropertygrid);
  }
}