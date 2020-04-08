import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_CellEditor from './Ext/grid/CellEditor.js';
import ElementParser from './common/ElementParser.js';

var EWCCelleditor = /*#__PURE__*/function (_Ext_grid_CellEditor) {
  _inheritsLoose(EWCCelleditor, _Ext_grid_CellEditor);

  function EWCCelleditor() {
    var _this;

    _this = _Ext_grid_CellEditor.call(this, [], []) || this;
    _this.xtype = 'celleditor';
    return _this;
  }

  return EWCCelleditor;
}(Ext_grid_CellEditor);

export { EWCCelleditor as default };

try {
  if (window.customElements.get('ext-celleditor') == undefined) {
    window.customElements.define('ext-celleditor', ElementParser.withParsedCallback(EWCCelleditor));
  }
} catch (e) {
  if (window.customElements.get('ext-celleditor') == undefined) {
    window.customElements.define('ext-celleditor', EWCCelleditor);
  }
}