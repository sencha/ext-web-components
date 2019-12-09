import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_grid_CellEditor from '@sencha/ext-runtime-base/dist/./Ext/grid/CellEditor.js';
import Ext_grid_CellEditor from './Ext/grid/CellEditor.js';
import ElementParser from './ElementParser.js';

var EWCCelleditor =
/*#__PURE__*/
function (_Ext_grid_CellEditor) {
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
window.customElements.define('ext-celleditor', ElementParser.withParsedCallback(EWCCelleditor));