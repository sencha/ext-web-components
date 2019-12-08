//import Ext_ButtonGroup from '@sencha/ext-runtime-base/dist/./Ext/ButtonGroup.js';
import Ext_ButtonGroup from './Ext/ButtonGroup.js';
import ElementParser from './ElementParser.js';

export default class EWCButtongroup extends Ext_ButtonGroup {
    constructor() {
        super ([], []);
        this.xtype = 'buttongroup';
    }

}
window.customElements.define('ext-buttongroup', ElementParser.withParsedCallback(EWCButtongroup));

