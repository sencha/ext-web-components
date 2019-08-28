import Ext_button_Segmented_Component from './Ext/button/Segmented'

export class ExtSegmentedbuttonComponent extends Ext_button_Segmented_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-segmentedbutton', ExtSegmentedbuttonComponent);
    });
})();
