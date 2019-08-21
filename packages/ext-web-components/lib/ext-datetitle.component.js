import Ext_panel_DateTitle_Component from './Ext/panel/DateTitle'

export class ExtDatetitleComponent extends Ext_panel_DateTitle_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-datetitle', ExtDatetitleComponent);
    });
})();
