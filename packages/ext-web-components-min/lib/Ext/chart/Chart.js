import Ext_chart_AbstractChart_Component from '../../Ext/chart/AbstractChart';

export default class Ext_chart_Chart_Component extends Ext_chart_AbstractChart_Component {
//events
//configs

static XTYPE() {return 'cartesian'}
static PROPERTIESOBJECT() { return {
"flipXY":["boolean"],
"innerPadding":["object"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'performLayout',function: function() { return this.ext.performLayout() } },
]}

constructor() {
    super (
        Ext_chart_Chart_Component.METHODS(),
        Ext_chart_Chart_Component.XTYPE(),
        Ext_chart_Chart_Component.PROPERTIESOBJECT(),
        Ext_chart_Chart_Component.EVENTS()
    )
    this.XTYPE = Ext_chart_Chart_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_chart_Chart_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_chart_Chart_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_chart_Chart_Component.EVENTS());
  }

connectedCallback() {
    super.connectedCallback()
}

attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
}

}

