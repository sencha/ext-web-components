import Ext_field_trigger_Time_Component from './Ext/field/trigger/Time'

export class ExtTimetriggerComponent extends Ext_field_trigger_Time_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-timetrigger', ExtTimetriggerComponent);
    });
})();
