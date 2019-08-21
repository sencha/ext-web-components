import Ext_sparkline_TriState_Component from './Ext/sparkline/TriState'

export class ExtSparklinetristateComponent extends Ext_sparkline_TriState_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-sparklinetristate', ExtSparklinetristateComponent);
    });
})();
