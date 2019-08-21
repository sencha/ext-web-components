import Ext_panel_Date_Component from './Ext/panel/Date'

export class ExtDatepanelComponent extends Ext_panel_Date_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-datepanel', ExtDatepanelComponent);
    });
})();
