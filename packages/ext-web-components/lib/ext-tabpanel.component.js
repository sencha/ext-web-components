import Ext_TabPanel_Component from './Ext/TabPanel'

export class ExtTabpanelComponent extends Ext_TabPanel_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-tabpanel', ExtTabpanelComponent);
    });
})();
