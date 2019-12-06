import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_Image from '@sencha/ext-runtime-base/dist/./Ext/Image.js';
import Ext_Image from './Ext/Image.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCImg =
/*#__PURE__*/
function (_Ext_Image) {
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
window.customElements.define('ext-img', HTMLParsedElement.withParsedCallback(EWCImg));