//import Ext_ProgressBarWidget from '@sencha/ext-runtime-base/dist/./Ext/ProgressBarWidget.js';
import Ext_ProgressBarWidget from './Ext/ProgressBarWidget.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCProgress extends Ext_ProgressBarWidget {
    constructor() {
        super ([], []);
        this.xtype = 'progress';
    }

}
window.customElements.define('ext-progress', HTMLParsedElement.withParsedCallback(EWCProgress));

