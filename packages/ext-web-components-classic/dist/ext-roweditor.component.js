import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_RowEditor from './Ext/grid/RowEditor.js';
import ElementParser from './common/ElementParser.js';

var EWCRoweditor = /*#__PURE__*/function (_Ext_grid_RowEditor) {
  _inheritsLoose(EWCRoweditor, _Ext_grid_RowEditor);

  function EWCRoweditor() {
    var _this;

    _this = _Ext_grid_RowEditor.call(this, [], []) || this;
    _this.xtype = 'roweditor';
    return _this;
  }

  return EWCRoweditor;
}(Ext_grid_RowEditor);

export { EWCRoweditor as default };

try {
  if (window.customElements.get('ext-roweditor') == undefined) {
    window.customElements.define('ext-roweditor', ElementParser.withParsedCallback(EWCRoweditor));
  }
} catch (e) {
  if (window.customElements.get('ext-roweditor') == undefined) {
    window.customElements.define('ext-roweditor', EWCRoweditor);
  }
}