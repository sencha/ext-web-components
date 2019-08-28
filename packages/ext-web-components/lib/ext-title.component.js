import Ext_Title_Component from './Ext/Title'

export class ExtTitleComponent extends Ext_Title_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-title', ExtTitleComponent);
    });
})();
