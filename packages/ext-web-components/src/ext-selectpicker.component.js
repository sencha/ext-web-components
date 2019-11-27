//import Ext_picker_SelectPicker from '@sencha/ext-runtime-base/dist/./Ext/picker/SelectPicker.js';
import Ext_picker_SelectPicker from './Ext/picker/SelectPicker.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCSelectpicker extends Ext_picker_SelectPicker {
    constructor() {
        super ([], []);
        this.xtype = 'selectpicker';
    }

}
window.customElements.define('ext-selectpicker', HTMLParsedElement.withParsedCallback(EWCSelectpicker));

