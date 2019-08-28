import Ext_dataview_listswiper_Stepper_Component from './Ext/dataview/listswiper/Stepper'

export class ExtListswiperstepperComponent extends Ext_dataview_listswiper_Stepper_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-listswiperstepper', ExtListswiperstepperComponent);
    });
})();
