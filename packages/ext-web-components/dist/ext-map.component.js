import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Map_Component from './Ext/Map';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtMapComponent =
/*#__PURE__*/
function (_Ext_Map_Component) {
  _inheritsLoose(ExtMapComponent, _Ext_Map_Component);

  function ExtMapComponent() {
    var _this;

    _this = _Ext_Map_Component.call(this, {}, [], []) || this;
    _this.xtype = 'map';
    return _this;
  }

  return ExtMapComponent;
}(Ext_Map_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-map', ExtMapComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-map', HTMLParsedElement.withParsedCallback(ExtMapComponent));