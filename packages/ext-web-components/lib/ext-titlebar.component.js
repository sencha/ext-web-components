import Ext_TitleBar_Component from './Ext/TitleBar'

export class ExtTitlebarComponent extends Ext_TitleBar_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-titlebar', ExtTitlebarComponent);
    });
})();
