import Ext_picker_Tablet from './Ext/picker/Tablet.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtTabletpicker extends Ext_picker_Tablet {
    constructor() {
        super ([],[])
        this.xtype = 'tabletpicker';
    }
}
window.customElements.define('ext-tabletpicker', HTMLParsedElement.withParsedCallback(ExtTabletpicker))
