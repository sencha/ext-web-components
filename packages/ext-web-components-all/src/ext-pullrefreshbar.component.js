import Ext_dataview_pullrefresh_Bar from './Ext/dataview/pullrefresh/Bar.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtPullrefreshbar extends Ext_dataview_pullrefresh_Bar {
    constructor() {
        super ([],[])
        this.xtype = 'pullrefreshbar';
    }
}
window.customElements.define('ext-pullrefreshbar', HTMLParsedElement.withParsedCallback(ExtPullrefreshbar))
