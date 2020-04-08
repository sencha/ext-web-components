import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_TemplateColumn from './Ext/grid/TemplateColumn.js';
import ElementParser from './common/ElementParser.js';

var EWCTemplatecolumn = /*#__PURE__*/function (_Ext_grid_TemplateCol) {
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
  if (window.customElements.get('ext-templatecolumn') == undefined) {
    window.customElements.define('ext-templatecolumn', ElementParser.withParsedCallback(EWCTemplatecolumn));
  }
} catch (e) {
  if (window.customElements.get('ext-templatecolumn') == undefined) {
    window.customElements.define('ext-templatecolumn', EWCTemplatecolumn);
  }
}