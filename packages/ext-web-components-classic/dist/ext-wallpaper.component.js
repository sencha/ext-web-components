import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_desktop_Wallpaper from './Ext/ux/desktop/Wallpaper.js';
import ElementParser from './common/ElementParser.js';

var EWCWallpaper = /*#__PURE__*/function (_Ext_ux_desktop_Wallp) {
  _inheritsLoose(EWCWallpaper, _Ext_ux_desktop_Wallp);

  function EWCWallpaper() {
    var _this;

    _this = _Ext_ux_desktop_Wallp.call(this, [], []) || this;
    _this.xtype = 'wallpaper';
    return _this;
  }

  return EWCWallpaper;
}(Ext_ux_desktop_Wallpaper);

export { EWCWallpaper as default };

try {
  if (window.customElements.get('ext-wallpaper') == undefined) {
    window.customElements.define('ext-wallpaper', ElementParser.withParsedCallback(EWCWallpaper));
  }
} catch (e) {
  if (window.customElements.get('ext-wallpaper') == undefined) {
    window.customElements.define('ext-wallpaper', EWCWallpaper);
  }
}