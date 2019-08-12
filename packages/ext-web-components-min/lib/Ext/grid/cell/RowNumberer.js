import Ext_grid_cell_Number_Component from '../../../Ext/grid/cell/Number';

export default class Ext_grid_cell_RowNumberer_Component extends Ext_grid_cell_Number_Component {
//events
//configs

static XTYPE() {return 'rownumberercell'}
static PROPERTIESOBJECT() { return {
"format":["string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_grid_cell_RowNumberer_Component.METHODS(),
        Ext_grid_cell_RowNumberer_Component.XTYPE(),
        Ext_grid_cell_RowNumberer_Component.PROPERTIESOBJECT(),
        Ext_grid_cell_RowNumberer_Component.EVENTS()
    )
    this.XTYPE = Ext_grid_cell_RowNumberer_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_cell_RowNumberer_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_grid_cell_RowNumberer_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_grid_cell_RowNumberer_Component.EVENTS());
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
    window.customElements.define('ext-rownumberercell', Ext_grid_cell_RowNumberer_Component);
  });
})();

