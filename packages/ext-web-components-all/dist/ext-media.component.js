import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Media_Component from './Ext/Media';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtMediaComponent =
/*#__PURE__*/
function (_Ext_Media_Component) {
  _inheritsLoose(ExtMediaComponent, _Ext_Media_Component);

  function ExtMediaComponent() {
    var _this;

    _this = _Ext_Media_Component.call(this) || this;
    _this.xtype = 'media';
    return _this;
  }

  return ExtMediaComponent;
}(Ext_Media_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-media', ExtMediaComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-media', HTMLParsedElement.withParsedCallback(ExtMediaComponent));