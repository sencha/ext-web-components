import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Image from './Ext/Image.js';
import ElementParser from './common/ElementParser.js';

var EWCImg = /*#__PURE__*/function (_Ext_Image) {
  _inheritsLoose(EWCImg, _Ext_Image);

  function EWCImg() {
    var _this;

    _this = _Ext_Image.call(this, [], []) || this;
    _this.xtype = 'img';
    return _this;
  }

  return EWCImg;
}(Ext_Image);

export { EWCImg as default };

try {
  if (window.customElements.get('ext-img') == undefined) {
    window.customElements.define('ext-img', ElementParser.withParsedCallback(EWCImg));
  }
} catch (e) {
  if (window.customElements.get('ext-img') == undefined) {
    window.customElements.define('ext-img', EWCImg);
  }
}