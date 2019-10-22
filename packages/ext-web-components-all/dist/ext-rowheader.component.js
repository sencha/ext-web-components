import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_RowHeader from './Ext/grid/RowHeader.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtRowheader =
/*#__PURE__*/
function (_Ext_grid_RowHeader) {
  _inheritsLoose(ExtRowheader, _Ext_grid_RowHeader);

  function ExtRowheader() {
    var _this;

    _this = _Ext_grid_RowHeader.call(this, [], []) || this;
    _this.xtype = 'rowheader';
    return _this;
  }

  return ExtRowheader;
}(Ext_grid_RowHeader);

export { ExtRowheader as default };
window.customElements.define('ext-rowheader', HTMLParsedElement.withParsedCallback(ExtRowheader));