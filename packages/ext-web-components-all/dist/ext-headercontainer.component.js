import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_HeaderContainer from './Ext/grid/HeaderContainer.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtHeadercontainerComponent =
/*#__PURE__*/
function (_Ext_grid_HeaderConta) {
  _inheritsLoose(ExtHeadercontainerComponent, _Ext_grid_HeaderConta);

  function ExtHeadercontainerComponent() {
    var _this;

    _this = _Ext_grid_HeaderConta.call(this, [], []) || this;
    _this.xtype = 'headercontainer';
    return _this;
  }

  return ExtHeadercontainerComponent;
}(Ext_grid_HeaderContainer); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-headercontainer', ExtHeadercontainerComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-headercontainer', HTMLParsedElement.withParsedCallback(ExtHeadercontainerComponent));