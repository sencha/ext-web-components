import Ext_Widget_Component from '../../../Ext/Widget';

export default class Ext_grid_cell_Base_Component extends Ext_Widget_Component {
//events
//configs

static XTYPE() {return 'gridcellbase'}
static PROPERTIESOBJECT() { return {
"align":["'left'","'center'","'right'"],
"bodyCls":["string"],
"bodyStyle":["string","object"],
"cellCls":["string"],
"cls":["string"],
"column":["Ext.grid.column.Column"],
"hidden":["boolean"],
"record":["Ext.data.Model"],
"selectable":["boolean"],
"value":["mixed"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'bound',function: function(fields) { return this.ext.bound(fields) } },
]}

constructor() {
    super (
        Ext_grid_cell_Base_Component.METHODS(),
        Ext_grid_cell_Base_Component.XTYPE(),
        Ext_grid_cell_Base_Component.PROPERTIESOBJECT(),
        Ext_grid_cell_Base_Component.EVENTS()
    )
    this.XTYPE = Ext_grid_cell_Base_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_cell_Base_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_grid_cell_Base_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_grid_cell_Base_Component.EVENTS());
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
    window.customElements.define('ext-gridcellbase', Ext_grid_cell_Base_Component);
  });
})();

