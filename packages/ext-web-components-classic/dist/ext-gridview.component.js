import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_grid_View from '@sencha/ext-runtime-base/dist/./Ext/grid/View.js';
import Ext_grid_View from './Ext/grid/View.js';
import ElementParser from './ElementParser.js';

var EWCGridview =
/*#__PURE__*/
function (_Ext_grid_View) {
  _inheritsLoose(EWCGridview, _Ext_grid_View);

  function EWCGridview() {
    var _this;

    _this = _Ext_grid_View.call(this, [], []) || this;
    _this.xtype = 'gridview';
    return _this;
  }

  return EWCGridview;
}(Ext_grid_View);

export { EWCGridview as default };
window.customElements.define('ext-gridview', ElementParser.withParsedCallback(EWCGridview));