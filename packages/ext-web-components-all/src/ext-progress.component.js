import Ext_ProgressBarWidget from './Ext/ProgressBarWidget.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtProgressComponent extends Ext_ProgressBarWidget {
    constructor() {
        super (
            [],
            []
        )
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
