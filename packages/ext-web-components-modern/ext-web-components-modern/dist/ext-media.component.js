import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Media from './Ext/Media.js';
import ElementParser from './common/ElementParser.js';

var EWCMedia = /*#__PURE__*/function (_Ext_Media) {
  _inheritsLoose(EWCMedia, _Ext_Media);

  function EWCMedia() {
    var _this;

    _this = _Ext_Media.call(this, [], []) || this;
    _this.xtype = 'media';
    return _this;
  }

  return EWCMedia;
}(Ext_Media);

export { EWCMedia as default };

try {
  if (window.customElements.get('ext-media') == undefined) {
    window.customElements.define('ext-media', ElementParser.withParsedCallback(EWCMedia));
  }
} catch (e) {
  if (window.customElements.get('ext-media') == undefined) {
    window.customElements.define('ext-media', EWCMedia);
  }
}