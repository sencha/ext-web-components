import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_SpaceFillingChart_Component from './Ext/chart/SpaceFillingChart';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtSpacefillingComponent =
/*#__PURE__*/
function (_Ext_chart_SpaceFilli) {
  _inheritsLoose(ExtSpacefillingComponent, _Ext_chart_SpaceFilli);

  function ExtSpacefillingComponent() {
    var _this;

    _this = _Ext_chart_SpaceFilli.call(this) || this;
    _this.xtype = 'spacefilling';
    return _this;
  }

  return ExtSpacefillingComponent;
}(Ext_chart_SpaceFillingChart_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-spacefilling', ExtSpacefillingComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-spacefilling', HTMLParsedElement.withParsedCallback(ExtSpacefillingComponent));