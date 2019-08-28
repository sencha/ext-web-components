import Ext_grid_column_Number_Component from '../../../Ext/grid/column/Number';

export default class Ext_grid_column_RowNumberer_Component extends Ext_grid_column_Number_Component {
//events
//configs

static XTYPE() {return 'rownumberer'}
static PROPERTIESOBJECT() { return {
"menu":["boolean"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_grid_column_RowNumberer_Component.METHODS(),
        Ext_grid_column_RowNumberer_Component.XTYPE(),
        Ext_grid_column_RowNumberer_Component.PROPERTIESOBJECT(),
        Ext_grid_column_RowNumberer_Component.EVENTS()
    )
    this.XTYPE = Ext_grid_column_RowNumberer_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_column_RowNumberer_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_grid_column_RowNumberer_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_grid_column_RowNumberer_Component.EVENTS());
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
    window.customElements.define('ext-rownumberer', Ext_grid_column_RowNumberer_Component);
  });
})();

