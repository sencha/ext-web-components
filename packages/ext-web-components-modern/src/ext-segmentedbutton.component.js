//import Ext_button_Segmented from '@sencha/ext-runtime-base/dist/./Ext/button/Segmented.js';
import Ext_button_Segmented from './Ext/button/Segmented.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCSegmentedbutton extends Ext_button_Segmented {
    constructor() {
        super ([], []);
        this.xtype = 'segmentedbutton';
    }

}
window.customElements.define('ext-segmentedbutton', HTMLParsedElement.withParsedCallback(EWCSegmentedbutton));

