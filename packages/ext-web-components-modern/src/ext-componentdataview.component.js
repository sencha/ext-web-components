//import Ext_dataview_Component from '@sencha/ext-runtime-base/dist/./Ext/dataview/Component.js';
import Ext_dataview_Component from './Ext/dataview/Component.js';
import ElementParser from './ElementParser.js';

export default class EWCComponentdataview extends Ext_dataview_Component {
    constructor() {
        super ([], []);
        this.xtype = 'componentdataview';
    }

}
window.customElements.define('ext-componentdataview', ElementParser.withParsedCallback(EWCComponentdataview));

