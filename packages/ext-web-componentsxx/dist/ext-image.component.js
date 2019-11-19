import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Image from './Ext/Image';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtImageComponent =
/*#__PURE__*/
function (_Ext_Image) {
  _inheritsLoose(ExtImageComponent, _Ext_Image);

  function ExtImageComponent() {
    var _this;

    _this = _Ext_Image.call(this, [], []) || this;
    _this.xtype = 'image';
    return _this;
  }

  return ExtImageComponent;
}(Ext_Image); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-image', ExtImageComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-image', HTMLParsedElement.withParsedCallback(ExtImageComponent));