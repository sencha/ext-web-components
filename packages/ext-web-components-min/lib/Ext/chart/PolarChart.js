import Ext_chart_AbstractChart_Component from '../../Ext/chart/AbstractChart';

export default class Ext_chart_PolarChart_Component extends Ext_chart_AbstractChart_Component {
//events
//configs

static XTYPE() {return 'polar'}
static PROPERTIESOBJECT() { return {
"center":["array"],
"innerPadding":["number"],
"radius":["number"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_chart_PolarChart_Component.METHODS(),
        Ext_chart_PolarChart_Component.XTYPE(),
        Ext_chart_PolarChart_Component.PROPERTIESOBJECT(),
        Ext_chart_PolarChart_Component.EVENTS()
    )
    this.XTYPE = Ext_chart_PolarChart_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_chart_PolarChart_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_chart_PolarChart_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_chart_PolarChart_Component.EVENTS());
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
    window.customElements.define('ext-polar', Ext_chart_PolarChart_Component);
  });
})();

