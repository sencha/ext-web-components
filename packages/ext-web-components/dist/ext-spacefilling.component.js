import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_SpaceFillingChart_Component from './Ext/chart/SpaceFillingChart';
export var ExtSpacefillingComponent =
/*#__PURE__*/
function (_Ext_chart_SpaceFilli) {
  _inheritsLoose(ExtSpacefillingComponent, _Ext_chart_SpaceFilli);

  function ExtSpacefillingComponent() {
    return _Ext_chart_SpaceFilli.call(this, '', '', {}, '') || this;
  }

  return ExtSpacefillingComponent;
}(Ext_chart_SpaceFillingChart_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-spacefilling', ExtSpacefillingComponent);
  });
})();