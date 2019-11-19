import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_draw_Component from './Ext/draw/Component';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtDrawComponent =
/*#__PURE__*/
function (_Ext_draw_Component) {
  _inheritsLoose(ExtDrawComponent, _Ext_draw_Component);

  function ExtDrawComponent() {
    var _this;

    _this = _Ext_draw_Component.call(this, [], []) || this;
    _this.xtype = 'draw';
    return _this;
  }

  return ExtDrawComponent;
}(Ext_draw_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-draw', ExtDrawComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-draw', HTMLParsedElement.withParsedCallback(ExtDrawComponent));