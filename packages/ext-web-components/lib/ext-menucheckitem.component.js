import Ext_menu_CheckItem_Component from './Ext/menu/CheckItem'

export class ExtMenucheckitemComponent extends Ext_menu_CheckItem_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-menucheckitem', ExtMenucheckitemComponent);
    });
})();
