//import Ext_chart_axis_Axis from '@sencha/ext-runtime-base/dist/./Ext/chart/axis/Axis.js';
import Ext_chart_axis_Axis from './Ext/chart/axis/Axis.js';
import ElementParser from './ElementParser.js';

export default class EWCAxis extends Ext_chart_axis_Axis {
    constructor() {
        super ([], []);
        this.xtype = 'axis';
    }

}
window.customElements.define('ext-axis', ElementParser.withParsedCallback(EWCAxis));

