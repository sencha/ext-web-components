import Ext_panel_Title_Component from './Ext/panel/Title'

export class ExtPaneltitleComponent extends Ext_panel_Title_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-paneltitle', ExtPaneltitleComponent);
    });
})();
