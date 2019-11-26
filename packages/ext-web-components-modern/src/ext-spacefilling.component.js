//import Ext_chart_SpaceFillingChart from '@sencha/ext-runtime-base/dist/./Ext/chart/SpaceFillingChart.js';
import Ext_chart_SpaceFillingChart from './Ext/chart/SpaceFillingChart.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCSpacefilling extends Ext_chart_SpaceFillingChart {
    constructor() {
        super ([], []);
        this.xtype = 'spacefilling';
    }

}
window.customElements.define('ext-spacefilling', HTMLParsedElement.withParsedCallback(EWCSpacefilling));

