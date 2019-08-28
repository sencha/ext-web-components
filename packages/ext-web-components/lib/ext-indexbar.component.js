import Ext_IndexBar_Component from './Ext/IndexBar'

export class ExtIndexbarComponent extends Ext_IndexBar_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-indexbar', ExtIndexbarComponent);
    });
})();
