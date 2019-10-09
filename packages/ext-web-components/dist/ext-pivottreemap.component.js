import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_d3_TreeMap from './Ext/pivot/d3/TreeMap';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtPivottreemapComponent =
/*#__PURE__*/
function (_Ext_pivot_d3_TreeMap) {
  _inheritsLoose(ExtPivottreemapComponent, _Ext_pivot_d3_TreeMap);

  function ExtPivottreemapComponent() {
    var _this;

    _this = _Ext_pivot_d3_TreeMap.call(this, [], []) || this;
    _this.xtype = 'pivottreemap';
    return _this;
  }

  return ExtPivottreemapComponent;
}(Ext_pivot_d3_TreeMap); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pivottreemap', ExtPivottreemapComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-pivottreemap', HTMLParsedElement.withParsedCallback(ExtPivottreemapComponent));