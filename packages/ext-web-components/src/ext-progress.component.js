import Ext_ProgressBarWidget from './Ext/ProgressBarWidget'
import HTMLParsedElement from './HTMLParsedElement'

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
