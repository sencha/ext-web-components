import Ext_dataview_ChipView from './Ext/dataview/ChipView.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtChipview extends Ext_dataview_ChipView {
    constructor() {
        super ([],[])
        this.xtype = 'chipview';
    }
}
window.customElements.define('ext-chipview', HTMLParsedElement.withParsedCallback(ExtChipview))
