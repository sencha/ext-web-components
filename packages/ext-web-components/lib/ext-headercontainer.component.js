import Ext_grid_HeaderContainer_Component from './Ext/grid/HeaderContainer'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtHeadercontainerComponent extends Ext_grid_HeaderContainer_Component {
    constructor() {
        super (
            {},
            [],
            []
        )
        this.xtype = 'headercontainer'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-headercontainer', ExtHeadercontainerComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-headercontainer', HTMLParsedElement.withParsedCallback(ExtHeadercontainerComponent))
