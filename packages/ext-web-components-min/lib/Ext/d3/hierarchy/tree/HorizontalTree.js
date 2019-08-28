import Ext_d3_hierarchy_tree_Tree_Component from '../../../../Ext/d3/hierarchy/tree/Tree';

export default class Ext_d3_hierarchy_tree_HorizontalTree_Component extends Ext_d3_hierarchy_tree_Tree_Component {
//events
//configs

static XTYPE() {return 'd3-tree'}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'alignAfterLayout',function: function() { return this.ext.alignAfterLayout() } },
{ name:'alignTree',function: function() { return this.ext.alignTree() } },
]}

constructor() {
    super (
        Ext_d3_hierarchy_tree_HorizontalTree_Component.METHODS(),
        Ext_d3_hierarchy_tree_HorizontalTree_Component.XTYPE(),
        Ext_d3_hierarchy_tree_HorizontalTree_Component.PROPERTIESOBJECT(),
        Ext_d3_hierarchy_tree_HorizontalTree_Component.EVENTS()
    )
    this.XTYPE = Ext_d3_hierarchy_tree_HorizontalTree_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_d3_hierarchy_tree_HorizontalTree_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_d3_hierarchy_tree_HorizontalTree_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_d3_hierarchy_tree_HorizontalTree_Component.EVENTS());
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
    window.customElements.define('ext-d3-tree', Ext_d3_hierarchy_tree_HorizontalTree_Component);
  });
})();

