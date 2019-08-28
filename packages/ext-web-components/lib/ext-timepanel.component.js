import Ext_panel_Time_Component from './Ext/panel/Time'

export class ExtTimepanelComponent extends Ext_panel_Time_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-timepanel', ExtTimepanelComponent);
    });
})();
