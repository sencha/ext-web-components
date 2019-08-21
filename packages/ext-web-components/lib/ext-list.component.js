import Ext_List_Component from './Ext/List'

export class ExtListComponent extends Ext_List_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-list', ExtListComponent);
    });
})();
