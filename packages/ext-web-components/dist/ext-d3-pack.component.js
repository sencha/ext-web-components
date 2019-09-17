import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_hierarchy_Pack_Component from './Ext/d3/hierarchy/Pack';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtD3_packComponent =
/*#__PURE__*/
function (_Ext_d3_hierarchy_Pac) {
  _inheritsLoose(ExtD3_packComponent, _Ext_d3_hierarchy_Pac);

  function ExtD3_packComponent() {
    var _this;

    _this = _Ext_d3_hierarchy_Pac.call(this, {}, [], []) || this;
    _this.xtype = 'd3-pack';
    return _this;
  }

  return ExtD3_packComponent;
}(Ext_d3_hierarchy_Pack_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-d3-pack', ExtD3_packComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-d3-pack', HTMLParsedElement.withParsedCallback(ExtD3_packComponent));