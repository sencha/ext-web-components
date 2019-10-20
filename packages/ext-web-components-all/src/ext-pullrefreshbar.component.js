import Ext_dataview_pullrefresh_Bar from './Ext/dataview/pullrefresh/Bar.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtPullrefreshbar extends Ext_dataview_pullrefresh_Bar {
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
//        window.customElements.define('ext-pullrefreshbar', ExtPullrefreshbar);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-pullrefreshbar', HTMLParsedElement.withParsedCallback(ExtPullrefreshbar))
//export default reactify(ExtPullrefreshbar);