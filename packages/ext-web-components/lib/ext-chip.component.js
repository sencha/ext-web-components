import Ext_Chip_Component from './Ext/Chip'

export class ExtChipComponent extends Ext_Chip_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-chip', ExtChipComponent);
    });
})();
