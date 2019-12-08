//import Ext_ux_TreePicker from '@sencha/ext-runtime-base/dist/./Ext/ux/TreePicker.js';
import Ext_ux_TreePicker from './Ext/ux/TreePicker.js';
import ElementParser from './ElementParser.js';

export default class EWCTreepicker extends Ext_ux_TreePicker {
    constructor() {
        super ([], []);
        this.xtype = 'treepicker';
    }

}
window.customElements.define('ext-treepicker', ElementParser.withParsedCallback(EWCTreepicker));

