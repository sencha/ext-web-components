import Ext_sparkline_Base_Component from './Ext/sparkline/Base'

export class ExtSparklineComponent extends Ext_sparkline_Base_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-sparkline', ExtSparklineComponent);
    });
})();
