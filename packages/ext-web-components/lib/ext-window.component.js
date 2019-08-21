import Ext_window_Window_Component from './Ext/window/Window'

export class ExtWindowComponent extends Ext_window_Window_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-window', ExtWindowComponent);
    });
})();
