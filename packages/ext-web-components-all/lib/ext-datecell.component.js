import Ext_grid_cell_Date_Component from './Ext/grid/cell/Date'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtDatecellComponent extends Ext_grid_cell_Date_Component {
    constructor() {
        super ()
        this.xtype = 'datecell'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-datecell', ExtDatecellComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-datecell', HTMLParsedElement.withParsedCallback(ExtDatecellComponent))
