import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Image_Component from './Ext/Image';
export var ExtImageComponent =
/*#__PURE__*/
function (_Ext_Image_Component) {
  _inheritsLoose(ExtImageComponent, _Ext_Image_Component);

  function ExtImageComponent() {
    return _Ext_Image_Component.call(this, '', '', {}, '') || this;
  }

  return ExtImageComponent;
}(Ext_Image_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-image', ExtImageComponent);
  });
})();