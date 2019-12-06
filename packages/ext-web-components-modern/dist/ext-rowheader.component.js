import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_grid_RowHeader from '@sencha/ext-runtime-base/dist/./Ext/grid/RowHeader.js';
import Ext_grid_RowHeader from './Ext/grid/RowHeader.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCRowheader =
/*#__PURE__*/
function (_Ext_grid_RowHeader) {
  _inheritsLoose(EWCRowheader, _Ext_grid_RowHeader);

  function EWCRowheader() {
    var _this;

    _this = _Ext_grid_RowHeader.call(this, [], []) || this;
    _this.xtype = 'rowheader';
    return _this;
  }

  return EWCRowheader;
}(Ext_grid_RowHeader);

export { EWCRowheader as default };
window.customElements.define('ext-rowheader', HTMLParsedElement.withParsedCallback(EWCRowheader));