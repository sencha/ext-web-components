import Ext_DataView_Component from './Ext/DataView'

export class ExtDataviewComponent extends Ext_DataView_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-dataview', ExtDataviewComponent);
    });
})();
