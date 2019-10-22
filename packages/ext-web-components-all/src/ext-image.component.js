import Ext_Image from './Ext/Image.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtImage extends Ext_Image {
    constructor() {
        super ([],[])
        this.xtype = 'image';
    }
}
window.customElements.define('ext-image', HTMLParsedElement.withParsedCallback(ExtImage))
