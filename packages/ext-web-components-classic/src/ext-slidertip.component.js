//import Ext_slider_Tip from '@sencha/ext-runtime-base/dist/./Ext/slider/Tip.js';
import Ext_slider_Tip from './Ext/slider/Tip.js';
import ElementParser from './ElementParser.js';

export default class EWCSlidertip extends Ext_slider_Tip {
    constructor() {
        super ([], []);
        this.xtype = 'slidertip';
    }

}
window.customElements.define('ext-slidertip', ElementParser.withParsedCallback(EWCSlidertip));

