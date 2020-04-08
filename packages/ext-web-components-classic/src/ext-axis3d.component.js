import Ext_chart_axis_Axis3D from './Ext/chart/axis/Axis3D.js';
import ElementParser from './common/ElementParser.js';

export default class EWCAxis3d extends Ext_chart_axis_Axis3D {
  constructor() {
    super ([], []);
    this.xtype = 'axis3d';
  }
}
try {
  if (window.customElements.get('ext-axis3d') == undefined) {
    window.customElements.define('ext-axis3d', ElementParser.withParsedCallback(EWCAxis3d));
  }
}
catch(e) {
  if (window.customElements.get('ext-axis3d') == undefined) {
    window.customElements.define('ext-axis3d', EWCAxis3d);
  }
}
