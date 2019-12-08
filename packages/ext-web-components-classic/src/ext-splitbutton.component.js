//import Ext_SplitButton from '@sencha/ext-runtime-base/dist/./Ext/SplitButton.js';
import Ext_SplitButton from './Ext/SplitButton.js';
import ElementParser from './ElementParser.js';

export default class EWCSplitbutton extends Ext_SplitButton {
    constructor() {
        super ([], []);
        this.xtype = 'splitbutton';
    }

}
window.customElements.define('ext-splitbutton', ElementParser.withParsedCallback(EWCSplitbutton));

