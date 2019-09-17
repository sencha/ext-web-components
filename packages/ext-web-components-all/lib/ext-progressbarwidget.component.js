import Ext_ProgressBarWidget_Component from './Ext/ProgressBarWidget'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtProgressbarwidgetComponent extends Ext_ProgressBarWidget_Component {
    constructor() {
        super ()
        this.xtype = 'progressbarwidget'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-progressbarwidget', ExtProgressbarwidgetComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-progressbarwidget', HTMLParsedElement.withParsedCallback(ExtProgressbarwidgetComponent))
