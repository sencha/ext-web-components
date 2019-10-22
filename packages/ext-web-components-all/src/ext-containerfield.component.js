import Ext_field_Container from './Ext/field/Container.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtContainerfield extends Ext_field_Container {
    constructor() {
        super ([],[])
        this.xtype = 'containerfield';
    }
}
window.customElements.define('ext-containerfield', HTMLParsedElement.withParsedCallback(ExtContainerfield))
