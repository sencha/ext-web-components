import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_hierarchy_Pack_Component from './Ext/d3/hierarchy/Pack';
export var ExtD3_packComponent =
/*#__PURE__*/
function (_Ext_d3_hierarchy_Pac) {
  _inheritsLoose(ExtD3_packComponent, _Ext_d3_hierarchy_Pac);

  function ExtD3_packComponent() {
    return _Ext_d3_hierarchy_Pac.call(this, '', '', {}, '') || this;
  }

  return ExtD3_packComponent;
}(Ext_d3_hierarchy_Pack_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-d3-pack', ExtD3_packComponent);
  });
})();