import Ext_picker_Tablet_Component from './Ext/picker/Tablet'

export class ExtTabletpickerComponent extends Ext_picker_Tablet_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-tabletpicker', ExtTabletpickerComponent);
    });
})();
