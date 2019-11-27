//import Ext_Video from '@sencha/ext-runtime-base/dist/./Ext/Video.js';
import Ext_Video from './Ext/Video.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCVideo extends Ext_Video {
    constructor() {
        super ([], []);
        this.xtype = 'video';
    }

}
window.customElements.define('ext-video', HTMLParsedElement.withParsedCallback(EWCVideo));

