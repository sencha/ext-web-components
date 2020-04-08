import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_RowHeader from './Ext/grid/RowHeader.js';
import ElementParser from './common/ElementParser.js';

var EWCRowheader = /*#__PURE__*/function (_Ext_grid_RowHeader) {
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

try {
  if (window.customElements.get('ext-rowheader') == undefined) {
    window.customElements.define('ext-rowheader', ElementParser.withParsedCallback(EWCRowheader));
  }
} catch (e) {
  if (window.customElements.get('ext-rowheader') == undefined) {
    window.customElements.define('ext-rowheader', EWCRowheader);
  }
}