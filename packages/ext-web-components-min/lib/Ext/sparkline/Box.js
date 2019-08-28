import Ext_sparkline_Base_Component from '../../Ext/sparkline/Base';

export default class Ext_sparkline_Box_Component extends Ext_sparkline_Base_Component {
//events
//configs

static XTYPE() {return 'sparklinebox'}
static PROPERTIESOBJECT() { return {
"boxFillColor":["string"],
"boxLineColor":["string"],
"chartRangeMax":["number"],
"chartRangeMin":["number"],
"medianColor":["string"],
"outlierFillColor":["string"],
"outlierIQR":["number"],
"outlierLineColor":["string"],
"raw":["boolean"],
"showOutliers":["boolean"],
"spotRadius":["number"],
"target":["number"],
"targetColor":["string"],
"whiskerColor":["string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_sparkline_Box_Component.METHODS(),
        Ext_sparkline_Box_Component.XTYPE(),
        Ext_sparkline_Box_Component.PROPERTIESOBJECT(),
        Ext_sparkline_Box_Component.EVENTS()
    )
    this.XTYPE = Ext_sparkline_Box_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_sparkline_Box_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_sparkline_Box_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_sparkline_Box_Component.EVENTS());
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
    window.customElements.define('ext-sparklinebox', Ext_sparkline_Box_Component);
  });
})();

