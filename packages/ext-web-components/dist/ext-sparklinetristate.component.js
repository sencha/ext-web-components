import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_TriState_Component from './Ext/sparkline/TriState';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtSparklinetristateComponent =
/*#__PURE__*/
function (_Ext_sparkline_TriSta) {
  _inheritsLoose(ExtSparklinetristateComponent, _Ext_sparkline_TriSta);

  function ExtSparklinetristateComponent() {
    var _this;

    _this = _Ext_sparkline_TriSta.call(this, {}, [], []) || this;
    _this.xtype = 'sparklinetristate';
    return _this;
  }

  return ExtSparklinetristateComponent;
}(Ext_sparkline_TriState_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-sparklinetristate', ExtSparklinetristateComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-sparklinetristate', HTMLParsedElement.withParsedCallback(ExtSparklinetristateComponent));