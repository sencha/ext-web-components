import Ext_sparkline_Box_Component from './Ext/sparkline/Box'

export class ExtSparklineboxComponent extends Ext_sparkline_Box_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-sparklinebox', ExtSparklineboxComponent);
    });
})();
