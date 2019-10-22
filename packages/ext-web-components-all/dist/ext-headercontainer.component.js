import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_HeaderContainer from './Ext/grid/HeaderContainer.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtHeadercontainer =
/*#__PURE__*/
function (_Ext_grid_HeaderConta) {
  _inheritsLoose(ExtHeadercontainer, _Ext_grid_HeaderConta);

  function ExtHeadercontainer() {
    var _this;

    _this = _Ext_grid_HeaderConta.call(this, [], []) || this;
    _this.xtype = 'headercontainer';
    return _this;
  }

  return ExtHeadercontainer;
}(Ext_grid_HeaderContainer);

export { ExtHeadercontainer as default };
window.customElements.define('ext-headercontainer', HTMLParsedElement.withParsedCallback(ExtHeadercontainer));