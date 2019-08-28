import Ext_LoadMask_Component from './Ext/LoadMask'

export class ExtLoadmaskComponent extends Ext_LoadMask_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-loadmask', ExtLoadmaskComponent);
    });
})();
