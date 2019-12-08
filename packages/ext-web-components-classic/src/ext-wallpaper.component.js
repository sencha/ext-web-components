//import Ext_ux_desktop_Wallpaper from '@sencha/ext-runtime-base/dist/./Ext/ux/desktop/Wallpaper.js';
import Ext_ux_desktop_Wallpaper from './Ext/ux/desktop/Wallpaper.js';
import ElementParser from './ElementParser.js';

export default class EWCWallpaper extends Ext_ux_desktop_Wallpaper {
    constructor() {
        super ([], []);
        this.xtype = 'wallpaper';
    }

}
window.customElements.define('ext-wallpaper', ElementParser.withParsedCallback(EWCWallpaper));

