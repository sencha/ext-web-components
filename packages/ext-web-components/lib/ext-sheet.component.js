import Ext_Sheet_Component from './Ext/Sheet'

export class ExtSheetComponent extends Ext_Sheet_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-sheet', ExtSheetComponent);
    });
})();
