import Ext_menu_TextItem_Component from './Ext/menu/TextItem'

export class ExtMenuitemComponent extends Ext_menu_TextItem_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-menuitem', ExtMenuitemComponent);
    });
})();
