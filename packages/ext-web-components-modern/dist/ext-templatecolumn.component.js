import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Template from './Ext/grid/column/Template.js';
import ElementParser from './runtime/ElementParser.js';

var EWCTemplatecolumn =
/*#__PURE__*/
function (_Ext_grid_column_Temp) {
  _inheritsLoose(EWCTemplatecolumn, _Ext_grid_column_Temp);

  function EWCTemplatecolumn() {
    var _this;

    _this = _Ext_grid_column_Temp.call(this, [], []) || this;
    _this.xtype = 'templatecolumn';
    return _this;
  }

  return EWCTemplatecolumn;
}(Ext_grid_column_Template);

export { EWCTemplatecolumn as default };

try {
  window.customElements.define('ext-templatecolumn', ElementParser.withParsedCallback(EWCTemplatecolumn));
} catch (e) {
  window.customElements.define('ext-templatecolumn', EWCTemplatecolumn);
}