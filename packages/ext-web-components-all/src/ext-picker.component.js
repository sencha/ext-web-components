import Ext_Picker from './Ext/Picker.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtPicker extends Ext_Picker {
    constructor() {
        super ([],[])
        this.xtype = 'picker';
    }
}
window.customElements.define('ext-picker', HTMLParsedElement.withParsedCallback(ExtPicker))
