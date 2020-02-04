import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_rowedit_Editor from './Ext/grid/rowedit/Editor.js';
import ElementParser from './ElementParser.js';

var EWCRoweditor =
/*#__PURE__*/
function (_Ext_grid_rowedit_Edi) {
  _inheritsLoose(EWCRoweditor, _Ext_grid_rowedit_Edi);

  function EWCRoweditor() {
    var _this;

    _this = _Ext_grid_rowedit_Edi.call(this, [], []) || this;
    _this.xtype = 'roweditor';
    return _this;
  }

  return EWCRoweditor;
}(Ext_grid_rowedit_Editor);

export { EWCRoweditor as default };

try {
  window.customElements.define('ext-roweditor', ElementParser.withParsedCallback(EWCRoweditor));
} catch (e) {
  window.customElements.define('ext-roweditor', EWCRoweditor);
}