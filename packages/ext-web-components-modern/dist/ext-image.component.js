import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_Image from '@sencha/ext-runtime-base/dist/./Ext/Image.js';
import Ext_Image from './Ext/Image.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCImage =
/*#__PURE__*/
function (_Ext_Image) {
  _inheritsLoose(EWCImage, _Ext_Image);

  function EWCImage() {
    var _this;

    _this = _Ext_Image.call(this, [], []) || this;
    _this.xtype = 'image';
    return _this;
  }

  return EWCImage;
}(Ext_Image);

export { EWCImage as default };
window.customElements.define('ext-image', HTMLParsedElement.withParsedCallback(EWCImage));