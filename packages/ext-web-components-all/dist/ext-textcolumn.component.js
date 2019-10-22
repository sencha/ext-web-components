import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Text from './Ext/grid/column/Text.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtTextcolumn =
/*#__PURE__*/
function (_Ext_grid_column_Text) {
  _inheritsLoose(ExtTextcolumn, _Ext_grid_column_Text);

  function ExtTextcolumn() {
    var _this;

    _this = _Ext_grid_column_Text.call(this, [], []) || this;
    _this.xtype = 'textcolumn';
    return _this;
  }

  return ExtTextcolumn;
}(Ext_grid_column_Text);

export { ExtTextcolumn as default };
window.customElements.define('ext-textcolumn', HTMLParsedElement.withParsedCallback(ExtTextcolumn));