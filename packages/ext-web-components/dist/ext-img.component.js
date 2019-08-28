import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Image_Component from './Ext/Image';
export var ExtImgComponent =
/*#__PURE__*/
function (_Ext_Image_Component) {
  _inheritsLoose(ExtImgComponent, _Ext_Image_Component);

  function ExtImgComponent() {
    return _Ext_Image_Component.call(this, '', '', {}, '') || this;
  }

  return ExtImgComponent;
}(Ext_Image_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-img', ExtImgComponent);
  });
})();