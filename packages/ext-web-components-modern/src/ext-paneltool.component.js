//import Ext_panel_Tool from '@sencha/ext-runtime-base/dist/./Ext/panel/Tool.js';
import Ext_panel_Tool from './Ext/panel/Tool.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCPaneltool extends Ext_panel_Tool {
    constructor() {
        super ([], []);
        this.xtype = 'paneltool';
    }

}
window.customElements.define('ext-paneltool', HTMLParsedElement.withParsedCallback(EWCPaneltool));

