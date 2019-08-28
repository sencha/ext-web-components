import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_d3_TreeMap_Component from './Ext/pivot/d3/TreeMap';
export var ExtPivottreemapComponent =
/*#__PURE__*/
function (_Ext_pivot_d3_TreeMap) {
  _inheritsLoose(ExtPivottreemapComponent, _Ext_pivot_d3_TreeMap);

  function ExtPivottreemapComponent() {
    return _Ext_pivot_d3_TreeMap.call(this, '', '', {}, '') || this;
  }

  return ExtPivottreemapComponent;
}(Ext_pivot_d3_TreeMap_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-pivottreemap', ExtPivottreemapComponent);
  });
})();