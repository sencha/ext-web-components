import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_grid_View from '@sencha/ext-runtime-base/dist/./Ext/grid/View.js';
import Ext_grid_View from './Ext/grid/View.js';
import ElementParser from './ElementParser.js';

var EWCTableview =
/*#__PURE__*/
function (_Ext_grid_View) {
  _inheritsLoose(EWCTableview, _Ext_grid_View);

  function EWCTableview() {
    var _this;

    _this = _Ext_grid_View.call(this, [], []) || this;
    _this.xtype = 'tableview';
    return _this;
  }

  return EWCTableview;
}(Ext_grid_View);

export { EWCTableview as default };
window.customElements.define('ext-tableview', ElementParser.withParsedCallback(EWCTableview));