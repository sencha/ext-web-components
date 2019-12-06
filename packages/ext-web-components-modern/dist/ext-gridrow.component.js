import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_grid_Row from '@sencha/ext-runtime-base/dist/./Ext/grid/Row.js';
import Ext_grid_Row from './Ext/grid/Row.js';
import HTMLParsedElement from './HTMLParsedElement.js';

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
window.customElements.define('ext-gridrow', HTMLParsedElement.withParsedCallback(EWCGridrow));