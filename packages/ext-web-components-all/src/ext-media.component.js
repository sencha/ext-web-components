import Ext_Media from './Ext/Media.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtMedia extends Ext_Media {
    constructor() {
        super ([],[])
        this.xtype = 'media';
    }
}
window.customElements.define('ext-media', HTMLParsedElement.withParsedCallback(ExtMedia))
