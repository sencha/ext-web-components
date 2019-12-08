//import Ext_AbstractComponent from '@sencha/ext-runtime-base/dist/./Ext/AbstractComponent.js';
import Ext_AbstractComponent from './Ext/AbstractComponent.js';
import ElementParser from './ElementParser.js';

export default class EWCBox extends Ext_AbstractComponent {
    constructor() {
        super ([], []);
        this.xtype = 'box';
    }

}
window.customElements.define('ext-box', ElementParser.withParsedCallback(EWCBox));

