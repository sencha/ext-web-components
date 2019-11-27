//import Ext_Image from '@sencha/ext-runtime-base/dist/./Ext/Image.js';
import Ext_Image from './Ext/Image.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCImage extends Ext_Image {
    constructor() {
        super ([], []);
        this.xtype = 'image';
    }

}
window.customElements.define('ext-image', HTMLParsedElement.withParsedCallback(EWCImage));

