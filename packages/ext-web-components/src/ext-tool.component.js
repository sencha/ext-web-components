//import Ext_panel_Tool from '@sencha/ext-runtime-base/dist/./Ext/panel/Tool.js';
import Ext_panel_Tool from './Ext/panel/Tool.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCTool extends Ext_panel_Tool {
    constructor() {
        super ([], []);
        this.xtype = 'tool';
    }

}
window.customElements.define('ext-tool', HTMLParsedElement.withParsedCallback(EWCTool));

