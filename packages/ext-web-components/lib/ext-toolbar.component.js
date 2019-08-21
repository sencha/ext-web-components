import Ext_Toolbar_Component from './Ext/Toolbar'

export class ExtToolbarComponent extends Ext_Toolbar_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-toolbar', ExtToolbarComponent);
    });
})();
