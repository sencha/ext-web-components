import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Video from './Ext/Video.js';
import ElementParser from './runtime/ElementParser.js';

var EWCVideo = /*#__PURE__*/function (_Ext_Video) {
  _inheritsLoose(EWCVideo, _Ext_Video);

  function EWCVideo() {
    var _this;

    _this = _Ext_Video.call(this, [], []) || this;
    _this.xtype = 'video';
    return _this;
  }

  return EWCVideo;
}(Ext_Video);

export { EWCVideo as default };

try {
  window.customElements.define('ext-video', ElementParser.withParsedCallback(EWCVideo));
} catch (e) {
  window.customElements.define('ext-video', EWCVideo);
}