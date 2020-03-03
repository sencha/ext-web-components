import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Image from './Ext/Image.js';
import ElementParser from './runtime/ElementParser.js';

var EWCImage = /*#__PURE__*/function (_Ext_Image) {
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

try {
  window.customElements.define('ext-image', ElementParser.withParsedCallback(EWCImage));
} catch (e) {
  window.customElements.define('ext-image', EWCImage);
}