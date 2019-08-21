import Ext_field_Time_Component from './Ext/field/Time'

export class ExtTimefieldComponent extends Ext_field_Time_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-timefield', ExtTimefieldComponent);
    });
})();
