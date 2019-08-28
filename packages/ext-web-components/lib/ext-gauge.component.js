import Ext_ux_Gauge_Component from './Ext/ux/Gauge'

export class ExtGaugeComponent extends Ext_ux_Gauge_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-gauge', ExtGaugeComponent);
    });
})();
