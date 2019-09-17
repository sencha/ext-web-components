import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_slider_Thumb_Component from './Ext/slider/Thumb';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtThumbComponent =
/*#__PURE__*/
function (_Ext_slider_Thumb_Com) {
  _inheritsLoose(ExtThumbComponent, _Ext_slider_Thumb_Com);

  function ExtThumbComponent() {
    var _this;

    _this = _Ext_slider_Thumb_Com.call(this, {}, [], []) || this;
    _this.xtype = 'thumb';
    return _this;
  }

  return ExtThumbComponent;
}(Ext_slider_Thumb_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-thumb', ExtThumbComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-thumb', HTMLParsedElement.withParsedCallback(ExtThumbComponent));