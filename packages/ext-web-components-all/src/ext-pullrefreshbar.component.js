import Ext_dataview_pullrefresh_Bar from './Ext/dataview/pullrefresh/Bar.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtPullrefreshbarComponent extends Ext_dataview_pullrefresh_Bar {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'pullrefreshbar'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pullrefreshbar', ExtPullrefreshbarComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-pullrefreshbar', HTMLParsedElement.withParsedCallback(ExtPullrefreshbarComponent))
