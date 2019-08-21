import Ext_Spacer_Component from './Ext/Spacer'

export class ExtSpacerComponent extends Ext_Spacer_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-spacer', ExtSpacerComponent);
    });
})();
