import Ext_sparkline_BarBase_Component from '../../Ext/sparkline/BarBase';

export default class Ext_sparkline_Discrete_Component extends Ext_sparkline_BarBase_Component {
//events
//configs

static XTYPE() {return 'sparklinediscrete'}
static PROPERTIESOBJECT() { return {
"chartRangeClip":["boolean"],
"chartRangeMax":["number"],
"chartRangeMin":["number"],
"lineHeight":["number"],
"thresholdColor":["string"],
"thresholdValue":["number"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_sparkline_Discrete_Component.METHODS(),
        Ext_sparkline_Discrete_Component.XTYPE(),
        Ext_sparkline_Discrete_Component.PROPERTIESOBJECT(),
        Ext_sparkline_Discrete_Component.EVENTS()
    )
    this.XTYPE = Ext_sparkline_Discrete_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_sparkline_Discrete_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_sparkline_Discrete_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_sparkline_Discrete_Component.EVENTS());
  }

connectedCallback() {
    super.connectedCallback()
}

attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
}

}
(function () {
  Ext.onReady(function() {
    window.customElements.define('ext-sparklinediscrete', Ext_sparkline_Discrete_Component);
  });
})();

