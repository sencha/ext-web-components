import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Img from './Ext/Img.js';
import ElementParser from './common/ElementParser.js';

var EWCImage = /*#__PURE__*/function (_Ext_Img) {
  _inheritsLoose(EWCImage, _Ext_Img);

  function EWCImage() {
    var _this;

    _this = _Ext_Img.call(this, [], []) || this;
    _this.xtype = 'image';
    return _this;
  }

  return EWCImage;
}(Ext_Img);

export { EWCImage as default };

try {
  if (window.customElements.get('ext-image') == undefined) {
    window.customElements.define('ext-image', ElementParser.withParsedCallback(EWCImage));
  }
} catch (e) {
  if (window.customElements.get('ext-image') == undefined) {
    window.customElements.define('ext-image', EWCImage);
  }
}