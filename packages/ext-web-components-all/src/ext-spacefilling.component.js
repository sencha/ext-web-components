import Ext_chart_SpaceFillingChart from './Ext/chart/SpaceFillingChart.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtSpacefilling extends Ext_chart_SpaceFillingChart {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'spacefilling'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-spacefilling', ExtSpacefilling);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-spacefilling', HTMLParsedElement.withParsedCallback(ExtSpacefilling))
//export default reactify(ExtSpacefilling);