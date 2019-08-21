import Ext_ProgressBarWidget_Component from './Ext/ProgressBarWidget'

export class ExtProgressbarwidgetComponent extends Ext_ProgressBarWidget_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-progressbarwidget', ExtProgressbarwidgetComponent);
    });
})();
