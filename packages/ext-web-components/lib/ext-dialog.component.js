import Ext_window_Window_Component from './Ext/window/Window'

export class ExtDialogComponent extends Ext_window_Window_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-dialog', ExtDialogComponent);
    });
})();
