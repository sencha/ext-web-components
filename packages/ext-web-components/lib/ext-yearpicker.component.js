import Ext_panel_YearPicker_Component from './Ext/panel/YearPicker'

export class ExtYearpickerComponent extends Ext_panel_YearPicker_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-yearpicker', ExtYearpickerComponent);
    });
})();
