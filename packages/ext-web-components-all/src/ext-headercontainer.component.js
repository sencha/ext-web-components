import Ext_grid_HeaderContainer from './Ext/grid/HeaderContainer.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtHeadercontainer extends Ext_grid_HeaderContainer {
    constructor() {
        super ([],[])
        this.xtype = 'headercontainer';
    }
}
window.customElements.define('ext-headercontainer', HTMLParsedElement.withParsedCallback(ExtHeadercontainer))
