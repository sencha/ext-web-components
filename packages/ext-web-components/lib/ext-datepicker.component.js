import Ext_DatePicker_Component from './Ext/DatePicker'

export class ExtDatepickerComponent extends Ext_DatePicker_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-datepicker', ExtDatepickerComponent);
    });
})();
