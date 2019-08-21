import Ext_menu_Separator_Component from './Ext/menu/Separator'

export class ExtMenuseparatorComponent extends Ext_menu_Separator_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-menuseparator', ExtMenuseparatorComponent);
    });
})();
