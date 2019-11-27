//import Ext_dataview_pullrefresh_Bar from '@sencha/ext-runtime-base/dist/./Ext/dataview/pullrefresh/Bar.js';
import Ext_dataview_pullrefresh_Bar from './Ext/dataview/pullrefresh/Bar.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCPullrefreshbar extends Ext_dataview_pullrefresh_Bar {
    constructor() {
        super ([], []);
        this.xtype = 'pullrefreshbar';
    }

}
window.customElements.define('ext-pullrefreshbar', HTMLParsedElement.withParsedCallback(EWCPullrefreshbar));

