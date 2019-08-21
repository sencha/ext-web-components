import Ext_menu_RadioItem_Component from './Ext/menu/RadioItem'

export class ExtMenuradioitemComponent extends Ext_menu_RadioItem_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-menuradioitem', ExtMenuradioitemComponent);
    });
})();
