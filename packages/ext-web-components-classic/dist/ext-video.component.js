import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_desktop_Video from './Ext/ux/desktop/Video.js';
import ElementParser from './ElementParser.js';

var EWCVideo =
/*#__PURE__*/
function (_Ext_ux_desktop_Video) {
  _inheritsLoose(EWCVideo, _Ext_ux_desktop_Video);

  function EWCVideo() {
    var _this;

    _this = _Ext_ux_desktop_Video.call(this, [], []) || this;
    _this.xtype = 'video';
    return _this;
  }

  return EWCVideo;
}(Ext_ux_desktop_Video);

export { EWCVideo as default };

try {
  window.customElements.define('ext-video', ElementParser.withParsedCallback(EWCVideo));
} catch (e) {
  window.customElements.define('ext-video', EWCVideo);
}