import Ext_grid_HeaderContainer from './Ext/grid/HeaderContainer.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtHeadercontainer extends Ext_grid_HeaderContainer {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'headercontainer'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-headercontainer', ExtHeadercontainer);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-headercontainer', HTMLParsedElement.withParsedCallback(ExtHeadercontainer))
//export default reactify(ExtHeadercontainer);