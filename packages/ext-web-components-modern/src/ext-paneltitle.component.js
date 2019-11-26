//import Ext_panel_Title from '@sencha/ext-runtime-base/dist/./Ext/panel/Title.js';
import Ext_panel_Title from './Ext/panel/Title.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCPaneltitle extends Ext_panel_Title {
    constructor() {
        super ([], []);
        this.xtype = 'paneltitle';
    }

}
window.customElements.define('ext-paneltitle', HTMLParsedElement.withParsedCallback(EWCPaneltitle));

