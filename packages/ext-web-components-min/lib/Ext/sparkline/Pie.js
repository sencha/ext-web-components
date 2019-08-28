import Ext_sparkline_Base_Component from '../../Ext/sparkline/Base';

export default class Ext_sparkline_Pie_Component extends Ext_sparkline_Base_Component {
//events
//configs

static XTYPE() {return 'sparklinepie'}
static PROPERTIESOBJECT() { return {
"borderColor":["string"],
"borderWidth":["number"],
"offset":["number"],
"sliceColors":["string[]"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_sparkline_Pie_Component.METHODS(),
        Ext_sparkline_Pie_Component.XTYPE(),
        Ext_sparkline_Pie_Component.PROPERTIESOBJECT(),
        Ext_sparkline_Pie_Component.EVENTS()
    )
    this.XTYPE = Ext_sparkline_Pie_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_sparkline_Pie_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_sparkline_Pie_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_sparkline_Pie_Component.EVENTS());
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
    window.customElements.define('ext-sparklinepie', Ext_sparkline_Pie_Component);
  });
})();

