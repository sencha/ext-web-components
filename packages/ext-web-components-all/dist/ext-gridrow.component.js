import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_Row from './Ext/grid/Row.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtGridrow =
/*#__PURE__*/
function (_Ext_grid_Row) {
  _inheritsLoose(ExtGridrow, _Ext_grid_Row);

  function ExtGridrow() {
    var _this;

    _this = _Ext_grid_Row.call(this, [], []) || this;
    _this.xtype = 'gridrow';
    return _this;
  }

  return ExtGridrow;
}(Ext_grid_Row);

export { ExtGridrow as default };
window.customElements.define('ext-gridrow', HTMLParsedElement.withParsedCallback(ExtGridrow));