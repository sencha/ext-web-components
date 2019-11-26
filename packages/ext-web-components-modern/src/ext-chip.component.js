//import Ext_Chip from '@sencha/ext-runtime-base/dist/./Ext/Chip.js';
import Ext_Chip from './Ext/Chip.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCChip extends Ext_Chip {
    constructor() {
        super ([], []);
        this.xtype = 'chip';
    }

}
window.customElements.define('ext-chip', HTMLParsedElement.withParsedCallback(EWCChip));

