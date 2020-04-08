import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_View from './Ext/grid/View.js';
import ElementParser from './common/ElementParser.js';

var EWCTableview = /*#__PURE__*/function (_Ext_grid_View) {
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

try {
  if (window.customElements.get('ext-tableview') == undefined) {
    window.customElements.define('ext-tableview', ElementParser.withParsedCallback(EWCTableview));
  }
} catch (e) {
  if (window.customElements.get('ext-tableview') == undefined) {
    window.customElements.define('ext-tableview', EWCTableview);
  }
}