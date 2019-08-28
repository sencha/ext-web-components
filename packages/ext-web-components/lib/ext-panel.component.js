import Ext_panel_Panel_Component from './Ext/panel/Panel'

export class ExtPanelComponent extends Ext_panel_Panel_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-panel', ExtPanelComponent);
    });
})();
