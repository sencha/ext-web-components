import Ext_MessageBox_Component from './Ext/MessageBox'

export class ExtMessageboxComponent extends Ext_MessageBox_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-messagebox', ExtMessageboxComponent);
    });
})();
