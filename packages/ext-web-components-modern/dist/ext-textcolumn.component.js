import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Text from './Ext/grid/column/Text.js';
import ElementParser from './common/ElementParser.js';

var EWCTextcolumn = /*#__PURE__*/function (_Ext_grid_column_Text) {
  _inheritsLoose(EWCTextcolumn, _Ext_grid_column_Text);

  function EWCTextcolumn() {
    var _this;

    _this = _Ext_grid_column_Text.call(this, [], []) || this;
    _this.xtype = 'textcolumn';
    return _this;
  }

  return EWCTextcolumn;
}(Ext_grid_column_Text);

export { EWCTextcolumn as default };

try {
  if (window.customElements.get('ext-textcolumn') == undefined) {
    window.customElements.define('ext-textcolumn', ElementParser.withParsedCallback(EWCTextcolumn));
  }
} catch (e) {
  if (window.customElements.get('ext-textcolumn') == undefined) {
    window.customElements.define('ext-textcolumn', EWCTextcolumn);
  }
}