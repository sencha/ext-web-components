import Ext_ProgressBarWidget from './Ext/ProgressBarWidget.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtProgress extends Ext_ProgressBarWidget {
    constructor() {
        super ([],[])
        this.xtype = 'progress';
    }
}
window.customElements.define('ext-progress', HTMLParsedElement.withParsedCallback(ExtProgress))
