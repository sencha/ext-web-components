import Ext_panel_Header_Component from './Ext/panel/Header'

export class ExtPanelheaderComponent extends Ext_panel_Header_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-panelheader', ExtPanelheaderComponent);
    });
})();
