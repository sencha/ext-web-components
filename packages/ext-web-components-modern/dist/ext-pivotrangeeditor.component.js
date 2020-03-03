import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_plugin_rangeeditor_Panel from './Ext/pivot/plugin/rangeeditor/Panel.js';
import ElementParser from './runtime/ElementParser.js';

var EWCPivotrangeeditor = /*#__PURE__*/function (_Ext_pivot_plugin_ran) {
  _inheritsLoose(EWCPivotrangeeditor, _Ext_pivot_plugin_ran);

  function EWCPivotrangeeditor() {
    var _this;

    _this = _Ext_pivot_plugin_ran.call(this, [], []) || this;
    _this.xtype = 'pivotrangeeditor';
    return _this;
  }

  return EWCPivotrangeeditor;
}(Ext_pivot_plugin_rangeeditor_Panel);

export { EWCPivotrangeeditor as default };

try {
  window.customElements.define('ext-pivotrangeeditor', ElementParser.withParsedCallback(EWCPivotrangeeditor));
} catch (e) {
  window.customElements.define('ext-pivotrangeeditor', EWCPivotrangeeditor);
}