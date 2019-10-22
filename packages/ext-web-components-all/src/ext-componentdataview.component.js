import Ext_dataview_Component from './Ext/dataview/Component.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtComponentdataview extends Ext_dataview_Component {
    constructor() {
        super ([],[])
        this.xtype = 'componentdataview';
    }
}
window.customElements.define('ext-componentdataview', HTMLParsedElement.withParsedCallback(ExtComponentdataview))
