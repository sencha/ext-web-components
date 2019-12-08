//import Ext_CycleButton from '@sencha/ext-runtime-base/dist/./Ext/CycleButton.js';
import Ext_CycleButton from './Ext/CycleButton.js';
import ElementParser from './ElementParser.js';

export default class EWCCycle extends Ext_CycleButton {
    constructor() {
        super ([], []);
        this.xtype = 'cycle';
    }

}
window.customElements.define('ext-cycle', ElementParser.withParsedCallback(EWCCycle));

