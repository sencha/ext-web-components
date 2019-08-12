//import Ext_Container_Component from '../../Ext/Container';

class Ext_grid_HeaderContainer_Component extends Ext_Container_Component {
//events
//configs

static XTYPE() {return 'headercontainer'}
static PROPERTIESOBJECT() { return {
"columns":["Ext.grid.column.Column[]"],
"defaultColumnUI":["any"],
"reserveScrollbar":["boolean"],
"sortable":["boolean"],
"verticalOverflow":["boolean"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'getClosestVisibleHeader',function: function(index) { return this.ext.getClosestVisibleHeader(index) } },
{ name:'getColumns',function: function(selector) { return this.ext.getColumns(selector) } },
{ name:'getVisibleColumns',function: function() { return this.ext.getVisibleColumns() } },
{ name:'setSortState',function: function() { return this.ext.setSortState() } },
{ name:'updateMenuDisabledState',function: function() { return this.ext.updateMenuDisabledState() } },
]}

constructor() {
    super (
        Ext_grid_HeaderContainer_Component.METHODS(),
        Ext_grid_HeaderContainer_Component.XTYPE(),
        Ext_grid_HeaderContainer_Component.PROPERTIESOBJECT(),
        Ext_grid_HeaderContainer_Component.EVENTS()
    )
    this.XTYPE = Ext_grid_HeaderContainer_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_HeaderContainer_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_grid_HeaderContainer_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_grid_HeaderContainer_Component.EVENTS());
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
    window.customElements.define('ext-headercontainer', Ext_grid_HeaderContainer_Component);
  });
})();

