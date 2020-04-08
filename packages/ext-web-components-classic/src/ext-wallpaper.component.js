import Ext_ux_desktop_Wallpaper from './Ext/ux/desktop/Wallpaper.js';
import ElementParser from './common/ElementParser.js';

export default class EWCWallpaper extends Ext_ux_desktop_Wallpaper {
  constructor() {
    super ([], []);
    this.xtype = 'wallpaper';
  }
}
try {
  if (window.customElements.get('ext-wallpaper') == undefined) {
    window.customElements.define('ext-wallpaper', ElementParser.withParsedCallback(EWCWallpaper));
  }
}
catch(e) {
  if (window.customElements.get('ext-wallpaper') == undefined) {
    window.customElements.define('ext-wallpaper', EWCWallpaper);
  }
}
