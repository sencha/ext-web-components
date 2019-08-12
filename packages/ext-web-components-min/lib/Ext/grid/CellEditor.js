import Ext_Editor_Component from '../../Ext/Editor';

export default class Ext_grid_CellEditor_Component extends Ext_Editor_Component {
//events
//configs

static XTYPE() {return 'celleditor'}
static PROPERTIESOBJECT() { return {
"autoPin":["boolean"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'getLocation',function: function() { return this.ext.getLocation() } },
{ name:'startEdit',function: function(location,value,doFocus) { return this.ext.startEdit(location,value,doFocus) } },
]}

constructor() {
    super (
        Ext_grid_CellEditor_Component.METHODS(),
        Ext_grid_CellEditor_Component.XTYPE(),
        Ext_grid_CellEditor_Component.PROPERTIESOBJECT(),
        Ext_grid_CellEditor_Component.EVENTS()
    )
    this.XTYPE = Ext_grid_CellEditor_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_CellEditor_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_grid_CellEditor_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_grid_CellEditor_Component.EVENTS());
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
    window.customElements.define('ext-celleditor', Ext_grid_CellEditor_Component);
  });
})();

