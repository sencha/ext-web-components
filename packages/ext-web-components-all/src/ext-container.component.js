import Ext_container_Container from './Ext/container/Container.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtContainer extends Ext_container_Container {
    constructor() {
        super ([],[])
        this.xtype = 'container';
    }
}
window.customElements.define('ext-container', HTMLParsedElement.withParsedCallback(ExtContainer))
