//import Ext_container_Container from '@sencha/ext-runtime-base/dist/./Ext/container/Container.js';
import Ext_container_Container from './Ext/container/Container.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCContainer extends Ext_container_Container {
    constructor() {
        super ([], []);
        this.xtype = 'container';
    }

}
window.customElements.define('ext-container', HTMLParsedElement.withParsedCallback(EWCContainer));

