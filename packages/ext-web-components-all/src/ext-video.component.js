import Ext_Video from './Ext/Video.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtVideo extends Ext_Video {
    constructor() {
        super ([],[])
        this.xtype = 'video';
    }
}
window.customElements.define('ext-video', HTMLParsedElement.withParsedCallback(ExtVideo))
