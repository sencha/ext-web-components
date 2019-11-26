//import Ext_dataview_ChipView from '@sencha/ext-runtime-base/dist/./Ext/dataview/ChipView.js';
import Ext_dataview_ChipView from './Ext/dataview/ChipView.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCChipview extends Ext_dataview_ChipView {
    constructor() {
        super ([], []);
        this.xtype = 'chipview';
    }

}
window.customElements.define('ext-chipview', HTMLParsedElement.withParsedCallback(EWCChipview));

