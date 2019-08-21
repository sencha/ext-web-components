import Ext_NestedList_Component from './Ext/NestedList'

export class ExtNestedlistComponent extends Ext_NestedList_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-nestedlist', ExtNestedlistComponent);
    });
})();
