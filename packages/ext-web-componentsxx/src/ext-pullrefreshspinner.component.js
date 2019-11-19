import Ext_dataview_pullrefresh_Spinner from './Ext/dataview/pullrefresh/Spinner'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtPullrefreshspinnerComponent extends Ext_dataview_pullrefresh_Spinner {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'pullrefreshspinner'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pullrefreshspinner', ExtPullrefreshspinnerComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-pullrefreshspinner', HTMLParsedElement.withParsedCallback(ExtPullrefreshspinnerComponent))
