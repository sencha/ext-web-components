import Ext_Label_Component from './Ext/Label'

export class ExtLabelComponent extends Ext_Label_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-label', ExtLabelComponent);
    });
})();
