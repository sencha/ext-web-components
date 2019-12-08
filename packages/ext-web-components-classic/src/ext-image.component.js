//import Ext_Img from '@sencha/ext-runtime-base/dist/./Ext/Img.js';
import Ext_Img from './Ext/Img.js';
import ElementParser from './ElementParser.js';

export default class EWCImage extends Ext_Img {
    constructor() {
        super ([], []);
        this.xtype = 'image';
    }

}
window.customElements.define('ext-image', ElementParser.withParsedCallback(EWCImage));

