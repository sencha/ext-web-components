//import Mz_pivot_Table from '@sencha/ext-runtime-base/dist/./Mz/pivot/Table.js';
import Mz_pivot_Table from './Mz/pivot/Table.js';
import ElementParser from './ElementParser.js';

export default class EWCPivotgrid extends Mz_pivot_Table {
    constructor() {
        super ([], []);
        this.xtype = 'pivotgrid';
    }

}
window.customElements.define('ext-pivotgrid', ElementParser.withParsedCallback(EWCPivotgrid));

