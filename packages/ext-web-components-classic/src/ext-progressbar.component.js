//import Ext_ProgressBar from '@sencha/ext-runtime-base/dist/./Ext/ProgressBar.js';
import Ext_ProgressBar from './Ext/ProgressBar.js';
import ElementParser from './ElementParser.js';

export default class EWCProgressbar extends Ext_ProgressBar {
    constructor() {
        super ([], []);
        this.xtype = 'progressbar';
    }

}
window.customElements.define('ext-progressbar', ElementParser.withParsedCallback(EWCProgressbar));

