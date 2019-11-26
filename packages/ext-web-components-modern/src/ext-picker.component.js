//import Ext_Picker from '@sencha/ext-runtime-base/dist/./Ext/Picker.js';
import Ext_Picker from './Ext/Picker.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCPicker extends Ext_Picker {
    constructor() {
        super ([], []);
        this.xtype = 'picker';
    }

}
window.customElements.define('ext-picker', HTMLParsedElement.withParsedCallback(EWCPicker));

