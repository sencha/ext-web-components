import Ext_Component_Component from '../../Ext/Component';

export default class Ext_grid_Row_Component extends Ext_Component_Component {
//events
//configs

static XTYPE() {return 'gridrow'}
static PROPERTIESOBJECT() { return {
"body":["object"],
"defaultCellUI":["string"],
"expandedField":["string"],
"stickyVisibility":["any"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'collapse',function: function() { return this.ext.collapse() } },
{ name:'expand',function: function() { return this.ext.expand() } },
{ name:'getCells',function: function(selector) { return this.ext.getCells(selector) } },
]}

constructor() {
    super (
        Ext_grid_Row_Component.METHODS(),
        Ext_grid_Row_Component.XTYPE(),
        Ext_grid_Row_Component.PROPERTIESOBJECT(),
        Ext_grid_Row_Component.EVENTS()
    )
    this.XTYPE = Ext_grid_Row_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_Row_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_grid_Row_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_grid_Row_Component.EVENTS());
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
    window.customElements.define('ext-gridrow', Ext_grid_Row_Component);
  });
})();

