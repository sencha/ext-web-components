import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_Row from './Ext/grid/Row.js';
import ElementParser from './runtime/ElementParser.js';

var EWCGridrow =
/*#__PURE__*/
function (_Ext_grid_Row) {
  _inheritsLoose(EWCGridrow, _Ext_grid_Row);

  function EWCGridrow() {
    var _this;

    _this = _Ext_grid_Row.call(this, [], []) || this;
    _this.xtype = 'gridrow';
    return _this;
  }

  return EWCGridrow;
}(Ext_grid_Row);

export { EWCGridrow as default };

try {
  window.customElements.define('ext-gridrow', ElementParser.withParsedCallback(EWCGridrow));
} catch (e) {
  window.customElements.define('ext-gridrow', EWCGridrow);
}