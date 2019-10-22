import Ext_grid_rowedit_Editor from './Ext/grid/rowedit/Editor.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtRoweditor extends Ext_grid_rowedit_Editor {
    constructor() {
        super ([],[])
        this.xtype = 'roweditor';
    }
}
window.customElements.define('ext-roweditor', HTMLParsedElement.withParsedCallback(ExtRoweditor))
