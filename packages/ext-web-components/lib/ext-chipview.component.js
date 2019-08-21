import Ext_dataview_ChipView_Component from './Ext/dataview/ChipView'

export class ExtChipviewComponent extends Ext_dataview_ChipView_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-chipview', ExtChipviewComponent);
    });
})();
