import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_TemplateColumn from './Ext/grid/TemplateColumn.js';
import ElementParser from './ElementParser.js';

var EWCTemplatecolumn =
/*#__PURE__*/
function (_Ext_grid_TemplateCol) {
  _inheritsLoose(EWCTemplatecolumn, _Ext_grid_TemplateCol);

  function EWCTemplatecolumn() {
    var _this;

    _this = _Ext_grid_TemplateCol.call(this, [], []) || this;
    _this.xtype = 'templatecolumn';
    return _this;
  }

  return EWCTemplatecolumn;
}(Ext_grid_TemplateColumn);

export { EWCTemplatecolumn as default };

try {
  window.customElements.define('ext-templatecolumn', ElementParser.withParsedCallback(EWCTemplatecolumn));
} catch (e) {
  console.log(e);
  window.customElements.define('ext-templatecolumn', EWCTemplatecolumn);
}