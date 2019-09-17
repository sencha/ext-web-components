import Ext_ProgressBarWidget_Component from './Ext/ProgressBarWidget'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtProgressComponent extends Ext_ProgressBarWidget_Component {
    constructor() {
        super ()
        this.xtype = 'progress'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-progress', ExtProgressComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-progress', HTMLParsedElement.withParsedCallback(ExtProgressComponent))
