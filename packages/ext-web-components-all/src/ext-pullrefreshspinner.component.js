import Ext_dataview_pullrefresh_Spinner from './Ext/dataview/pullrefresh/Spinner.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtPullrefreshspinner extends Ext_dataview_pullrefresh_Spinner {
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
//        window.customElements.define('ext-pullrefreshspinner', ExtPullrefreshspinner);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-pullrefreshspinner', HTMLParsedElement.withParsedCallback(ExtPullrefreshspinner))
//export default reactify(ExtPullrefreshspinner);