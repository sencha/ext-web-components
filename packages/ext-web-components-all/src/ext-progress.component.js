import Ext_ProgressBarWidget from './Ext/ProgressBarWidget.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtProgress extends Ext_ProgressBarWidget {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'progress'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-progress', ExtProgress);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-progress', HTMLParsedElement.withParsedCallback(ExtProgress))
//export default reactify(ExtProgress);