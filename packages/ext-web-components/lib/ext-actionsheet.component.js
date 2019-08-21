import Ext_ActionSheet_Component from './Ext/ActionSheet'

export class ExtActionsheetComponent extends Ext_ActionSheet_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-actionsheet', ExtActionsheetComponent);
    });
})();
