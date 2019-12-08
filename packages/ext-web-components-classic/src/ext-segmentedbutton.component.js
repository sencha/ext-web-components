//import Ext_button_Segmented from '@sencha/ext-runtime-base/dist/./Ext/button/Segmented.js';
import Ext_button_Segmented from './Ext/button/Segmented.js';
import ElementParser from './ElementParser.js';

export default class EWCSegmentedbutton extends Ext_button_Segmented {
    constructor() {
        super ([], []);
        this.xtype = 'segmentedbutton';
    }

}
window.customElements.define('ext-segmentedbutton', ElementParser.withParsedCallback(EWCSegmentedbutton));

