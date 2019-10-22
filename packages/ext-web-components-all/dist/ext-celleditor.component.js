import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_CellEditor from './Ext/grid/CellEditor.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtCelleditor =
/*#__PURE__*/
function (_Ext_grid_CellEditor) {
  _inheritsLoose(ExtCelleditor, _Ext_grid_CellEditor);

  function ExtCelleditor() {
    var _this;

    _this = _Ext_grid_CellEditor.call(this, [], []) || this;
    _this.xtype = 'celleditor';
    return _this;
  }

  return ExtCelleditor;
}(Ext_grid_CellEditor);

export { ExtCelleditor as default };
window.customElements.define('ext-celleditor', HTMLParsedElement.withParsedCallback(ExtCelleditor));