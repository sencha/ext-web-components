//import Ext_Img from '@sencha/ext-runtime-base/dist/./Ext/Img.js';
import Ext_Img from './Ext/Img.js';
import ElementParser from './ElementParser.js';

export default class EWCImagecomponent extends Ext_Img {
    constructor() {
        super ([], []);
        this.xtype = 'imagecomponent';
    }

}
window.customElements.define('ext-imagecomponent', ElementParser.withParsedCallback(EWCImagecomponent));

