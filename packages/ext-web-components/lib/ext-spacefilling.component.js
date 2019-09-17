import Ext_chart_SpaceFillingChart_Component from './Ext/chart/SpaceFillingChart'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtSpacefillingComponent extends Ext_chart_SpaceFillingChart_Component {
    constructor() {
        super (
            {},
            [],
            []
        )
        this.xtype = 'spacefilling'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-spacefilling', ExtSpacefillingComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-spacefilling', HTMLParsedElement.withParsedCallback(ExtSpacefillingComponent))
