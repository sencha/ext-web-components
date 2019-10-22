import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Image from './Ext/Image.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtImage =
/*#__PURE__*/
function (_Ext_Image) {
  _inheritsLoose(ExtImage, _Ext_Image);

  function ExtImage() {
    var _this;

    _this = _Ext_Image.call(this, [], []) || this;
    _this.xtype = 'image';
    return _this;
  }

  return ExtImage;
}(Ext_Image);

export { ExtImage as default };
window.customElements.define('ext-image', HTMLParsedElement.withParsedCallback(ExtImage));