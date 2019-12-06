import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_grid_column_Text from '@sencha/ext-runtime-base/dist/./Ext/grid/column/Text.js';
import Ext_grid_column_Text from './Ext/grid/column/Text.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCTextcolumn =
/*#__PURE__*/
function (_Ext_grid_column_Text) {
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
window.customElements.define('ext-textcolumn', HTMLParsedElement.withParsedCallback(EWCTextcolumn));