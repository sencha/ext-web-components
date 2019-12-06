import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_grid_RowBody from '@sencha/ext-runtime-base/dist/./Ext/grid/RowBody.js';
import Ext_grid_RowBody from './Ext/grid/RowBody.js';
import HTMLParsedElement from './HTMLParsedElement.js';

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
window.customElements.define('ext-rowbody', HTMLParsedElement.withParsedCallback(EWCRowbody));