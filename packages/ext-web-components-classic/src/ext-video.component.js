//import Ext_ux_desktop_Video from '@sencha/ext-runtime-base/dist/./Ext/ux/desktop/Video.js';
import Ext_ux_desktop_Video from './Ext/ux/desktop/Video.js';
import ElementParser from './ElementParser.js';

export default class EWCVideo extends Ext_ux_desktop_Video {
    constructor() {
        super ([], []);
        this.xtype = 'video';
    }

}
window.customElements.define('ext-video', ElementParser.withParsedCallback(EWCVideo));

