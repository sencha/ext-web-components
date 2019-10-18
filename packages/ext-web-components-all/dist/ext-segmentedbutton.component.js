import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_button_Segmented from './Ext/button/Segmented.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtSegmentedbuttonComponent =
/*#__PURE__*/
function (_Ext_button_Segmented) {
  _inheritsLoose(ExtSegmentedbuttonComponent, _Ext_button_Segmented);

  function ExtSegmentedbuttonComponent() {
    var _this;

    _this = _Ext_button_Segmented.call(this, [], []) || this;
    _this.xtype = 'segmentedbutton';
    return _this;
  }

  return ExtSegmentedbuttonComponent;
}(Ext_button_Segmented); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-segmentedbutton', ExtSegmentedbuttonComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-segmentedbutton', HTMLParsedElement.withParsedCallback(ExtSegmentedbuttonComponent));