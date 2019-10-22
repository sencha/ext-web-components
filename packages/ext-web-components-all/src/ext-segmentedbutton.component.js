import Ext_button_Segmented from './Ext/button/Segmented.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtSegmentedbutton extends Ext_button_Segmented {
    constructor() {
        super ([],[])
        this.xtype = 'segmentedbutton';
    }
}
window.customElements.define('ext-segmentedbutton', HTMLParsedElement.withParsedCallback(ExtSegmentedbutton))
