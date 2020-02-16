import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_RowBody from './Ext/grid/RowBody.js';
import ElementParser from './runtime/ElementParser.js';

var EWCRowbody =
/*#__PURE__*/
function (_Ext_grid_RowBody) {
  _inheritsLoose(EWCRowbody, _Ext_grid_RowBody);

  function EWCRowbody() {
    var _this;

    _this = _Ext_grid_RowBody.call(this, [], []) || this;
    _this.xtype = 'rowbody';
    return _this;
  }

  return EWCRowbody;
}(Ext_grid_RowBody);

export { EWCRowbody as default };

try {
  window.customElements.define('ext-rowbody', ElementParser.withParsedCallback(EWCRowbody));
} catch (e) {
  window.customElements.define('ext-rowbody', EWCRowbody);
}