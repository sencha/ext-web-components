import Ext_Indicator_Component from './Ext/Indicator'

export class ExtIndicatorComponent extends Ext_Indicator_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-indicator', ExtIndicatorComponent);
    });
})();
