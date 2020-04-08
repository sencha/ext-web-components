import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_RowEditorButtons from './Ext/grid/RowEditorButtons.js';
import ElementParser from './common/ElementParser.js';

var EWCRoweditorbuttons = /*#__PURE__*/function (_Ext_grid_RowEditorBu) {
  _inheritsLoose(EWCRoweditorbuttons, _Ext_grid_RowEditorBu);

  function EWCRoweditorbuttons() {
    var _this;

    _this = _Ext_grid_RowEditorBu.call(this, [], []) || this;
    _this.xtype = 'roweditorbuttons';
    return _this;
  }

  return EWCRoweditorbuttons;
}(Ext_grid_RowEditorButtons);

export { EWCRoweditorbuttons as default };

try {
  if (window.customElements.get('ext-roweditorbuttons') == undefined) {
    window.customElements.define('ext-roweditorbuttons', ElementParser.withParsedCallback(EWCRoweditorbuttons));
  }
} catch (e) {
  if (window.customElements.get('ext-roweditorbuttons') == undefined) {
    window.customElements.define('ext-roweditorbuttons', EWCRoweditorbuttons);
  }
}