import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_LoadMask from './Ext/LoadMask';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtLoadmaskComponent =
/*#__PURE__*/
function (_Ext_LoadMask) {
  _inheritsLoose(ExtLoadmaskComponent, _Ext_LoadMask);

  function ExtLoadmaskComponent() {
    var _this;

    _this = _Ext_LoadMask.call(this, [], []) || this;
    _this.xtype = 'loadmask';
    return _this;
  }

  return ExtLoadmaskComponent;
}(Ext_LoadMask); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-loadmask', ExtLoadmaskComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-loadmask', HTMLParsedElement.withParsedCallback(ExtLoadmaskComponent));