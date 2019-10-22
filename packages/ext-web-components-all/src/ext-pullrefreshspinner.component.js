import Ext_dataview_pullrefresh_Spinner from './Ext/dataview/pullrefresh/Spinner.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtPullrefreshspinner extends Ext_dataview_pullrefresh_Spinner {
    constructor() {
        super ([],[])
        this.xtype = 'pullrefreshspinner';
    }
}
window.customElements.define('ext-pullrefreshspinner', HTMLParsedElement.withParsedCallback(ExtPullrefreshspinner))
