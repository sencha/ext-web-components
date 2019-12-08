//import Ext_Image from '@sencha/ext-runtime-base/dist/./Ext/Image.js';
import Ext_Image from './Ext/Image.js';
import ElementParser from './ElementParser.js';

export default class EWCImg extends Ext_Image {
    constructor() {
        super ([], []);
        this.xtype = 'img';
    }

}
window.customElements.define('ext-img', ElementParser.withParsedCallback(EWCImg));

