import Ext_grid_column_Text from './Ext/grid/column/Text.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtTextcolumn extends Ext_grid_column_Text {
    constructor() {
        super ([],[])
        this.xtype = 'textcolumn';
    }
}
window.customElements.define('ext-textcolumn', HTMLParsedElement.withParsedCallback(ExtTextcolumn))
