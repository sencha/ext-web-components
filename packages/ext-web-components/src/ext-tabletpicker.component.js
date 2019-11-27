//import Ext_picker_Tablet from '@sencha/ext-runtime-base/dist/./Ext/picker/Tablet.js';
import Ext_picker_Tablet from './Ext/picker/Tablet.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCTabletpicker extends Ext_picker_Tablet {
    constructor() {
        super ([], []);
        this.xtype = 'tabletpicker';
    }

}
window.customElements.define('ext-tabletpicker', HTMLParsedElement.withParsedCallback(EWCTabletpicker));

