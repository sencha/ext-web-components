import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Map_Component from './Ext/Map';
export var ExtMapComponent =
/*#__PURE__*/
function (_Ext_Map_Component) {
  _inheritsLoose(ExtMapComponent, _Ext_Map_Component);

  function ExtMapComponent() {
    return _Ext_Map_Component.call(this, '', '', {}, '') || this;
  }

  return ExtMapComponent;
}(Ext_Map_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-map', ExtMapComponent);
  });
})();