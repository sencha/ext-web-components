//import Ext_AbstractComponent from '@sencha/ext-runtime-base/dist/./Ext/AbstractComponent.js';
import Ext_AbstractComponent from './Ext/AbstractComponent.js';
import ElementParser from './ElementParser.js';

export default class EWCComponent extends Ext_AbstractComponent {
    constructor() {
        super ([], []);
        this.xtype = 'component';
    }

}
window.customElements.define('ext-component', ElementParser.withParsedCallback(EWCComponent));

