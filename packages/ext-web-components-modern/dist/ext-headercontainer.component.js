import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_HeaderContainer from './Ext/grid/HeaderContainer.js';
import ElementParser from './runtime/ElementParser.js';

var EWCHeadercontainer =
/*#__PURE__*/
function (_Ext_grid_HeaderConta) {
  _inheritsLoose(EWCHeadercontainer, _Ext_grid_HeaderConta);

  function EWCHeadercontainer() {
    var _this;

    _this = _Ext_grid_HeaderConta.call(this, [], []) || this;
    _this.xtype = 'headercontainer';
    return _this;
  }

  return EWCHeadercontainer;
}(Ext_grid_HeaderContainer);

export { EWCHeadercontainer as default };

try {
  window.customElements.define('ext-headercontainer', ElementParser.withParsedCallback(EWCHeadercontainer));
} catch (e) {
  window.customElements.define('ext-headercontainer', EWCHeadercontainer);
}