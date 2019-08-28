import Ext_grid_column_Column_Component from '../../../Ext/grid/column/Column';

export default class Ext_grid_column_Tree_Component extends Ext_grid_column_Column_Component {
//events
//configs

static XTYPE() {return 'treecolumn'}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_grid_column_Tree_Component.METHODS(),
        Ext_grid_column_Tree_Component.XTYPE(),
        Ext_grid_column_Tree_Component.PROPERTIESOBJECT(),
        Ext_grid_column_Tree_Component.EVENTS()
    )
    this.XTYPE = Ext_grid_column_Tree_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_column_Tree_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_grid_column_Tree_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_grid_column_Tree_Component.EVENTS());
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
    window.customElements.define('ext-treecolumn', Ext_grid_column_Tree_Component);
  });
})();

