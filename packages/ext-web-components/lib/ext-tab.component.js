import Ext_Tab_Component from './Ext/Tab'

export class ExtTabComponent extends Ext_Tab_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-tab', ExtTabComponent);
    });
})();
