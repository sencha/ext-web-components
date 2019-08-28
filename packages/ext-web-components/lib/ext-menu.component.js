import Ext_menu_Menu_Component from './Ext/menu/Menu'

export class ExtMenuComponent extends Ext_menu_Menu_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-menu', ExtMenuComponent);
    });
})();
