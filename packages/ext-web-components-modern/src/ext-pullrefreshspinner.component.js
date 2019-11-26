//import Ext_dataview_pullrefresh_Spinner from '@sencha/ext-runtime-base/dist/./Ext/dataview/pullrefresh/Spinner.js';
import Ext_dataview_pullrefresh_Spinner from './Ext/dataview/pullrefresh/Spinner.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCPullrefreshspinner extends Ext_dataview_pullrefresh_Spinner {
    constructor() {
        super ([], []);
        this.xtype = 'pullrefreshspinner';
    }

}
window.customElements.define('ext-pullrefreshspinner', HTMLParsedElement.withParsedCallback(EWCPullrefreshspinner));

