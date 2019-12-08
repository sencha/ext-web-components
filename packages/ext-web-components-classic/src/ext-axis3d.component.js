//import Ext_chart_axis_Axis3D from '@sencha/ext-runtime-base/dist/./Ext/chart/axis/Axis3D.js';
import Ext_chart_axis_Axis3D from './Ext/chart/axis/Axis3D.js';
import ElementParser from './ElementParser.js';

export default class EWCAxis3d extends Ext_chart_axis_Axis3D {
    constructor() {
        super ([], []);
        this.xtype = 'axis3d';
    }

}
window.customElements.define('ext-axis3d', ElementParser.withParsedCallback(EWCAxis3d));

