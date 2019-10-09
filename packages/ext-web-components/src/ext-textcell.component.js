import Ext_grid_cell_Text from './Ext/grid/cell/Text'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtTextcellComponent extends Ext_grid_cell_Text {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'textcell'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-textcell', ExtTextcellComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-textcell', HTMLParsedElement.withParsedCallback(ExtTextcellComponent))
