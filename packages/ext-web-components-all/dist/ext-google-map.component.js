import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Map_Component from './Ext/Map';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtGoogle_mapComponent =
/*#__PURE__*/
function (_Ext_Map_Component) {
  _inheritsLoose(ExtGoogle_mapComponent, _Ext_Map_Component);

  function ExtGoogle_mapComponent() {
    var _this;

    _this = _Ext_Map_Component.call(this) || this;
    _this.xtype = 'google-map';
    return _this;
  }

  return ExtGoogle_mapComponent;
}(Ext_Map_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-google-map', ExtGoogle_mapComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-google-map', HTMLParsedElement.withParsedCallback(ExtGoogle_mapComponent));