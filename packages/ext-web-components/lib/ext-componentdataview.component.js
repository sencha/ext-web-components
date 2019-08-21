import Ext_dataview_Component_Component from './Ext/dataview/Component'

export class ExtComponentdataviewComponent extends Ext_dataview_Component_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-componentdataview', ExtComponentdataviewComponent);
    });
})();
