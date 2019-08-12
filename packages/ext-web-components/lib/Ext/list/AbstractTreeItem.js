import Ext_Widget_Component from '../../Ext/Widget';

export default class Ext_list_AbstractTreeItem_Component extends Ext_Widget_Component {
//events
//configs

static XTYPE() {return ''}
static PROPERTIESOBJECT() { return {
"expandable":["boolean"],
"expanded":["boolean"],
"iconCls":["string"],
"iconClsProperty":["string"],
"leaf":["boolean"],
"loading":["boolean"],
"node":["Ext.data.TreeModel"],
"over":["number"],
"owner":["Ext.list.Tree"],
"parentItem":["Ext.list.AbstractTreeItem"],
"selected":["boolean"],
"selectedParent":["boolean"],
"text":["string"],
"textProperty":["string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'collapse',function: function() { return this.ext.collapse() } },
{ name:'destroy',function: function() { return this.ext.destroy() } },
{ name:'doNodeUpdate',function: function(node,modifiedFieldNames) { return this.ext.doNodeUpdate(node,modifiedFieldNames) } },
{ name:'expand',function: function() { return this.ext.expand() } },
{ name:'getToolElement',function: function() { return this.ext.getToolElement() } },
{ name:'insertItem',function: function(item,refItem) { return this.ext.insertItem(item,refItem) } },
{ name:'isExpanded',function: function() { return this.ext.isExpanded() } },
{ name:'isSelectionEvent',function: function(e) { return this.ext.isSelectionEvent(e) } },
{ name:'isToggleEvent',function: function(e) { return this.ext.isToggleEvent(e) } },
{ name:'nodeCollapse',function: function(node,collapsingForExpand) { return this.ext.nodeCollapse(node,collapsingForExpand) } },
{ name:'nodeExpand',function: function(node) { return this.ext.nodeExpand(node) } },
{ name:'nodeInsert',function: function(node,refNode) { return this.ext.nodeInsert(node,refNode) } },
{ name:'nodeRemove',function: function(node) { return this.ext.nodeRemove(node) } },
{ name:'nodeUpdate',function: function(node,modifiedFieldNames) { return this.ext.nodeUpdate(node,modifiedFieldNames) } },
{ name:'onClick',function: function(e) { return this.ext.onClick(e) } },
{ name:'removeItem',function: function(item) { return this.ext.removeItem(item) } },
{ name:'setExpandable',function: function() { return this.ext.setExpandable() } },
{ name:'setExpanded',function: function() { return this.ext.setExpanded() } },
{ name:'setIconCls',function: function() { return this.ext.setIconCls() } },
{ name:'setLeaf',function: function() { return this.ext.setLeaf() } },
{ name:'setLoading',function: function() { return this.ext.setLoading() } },
{ name:'setNode',function: function() { return this.ext.setNode() } },
{ name:'setOwner',function: function() { return this.ext.setOwner() } },
{ name:'setParentItem',function: function() { return this.ext.setParentItem() } },
{ name:'setText',function: function() { return this.ext.setText() } },
{ name:'updateOwner',function: function(owner) { return this.ext.updateOwner(owner) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_list_AbstractTreeItem_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_list_AbstractTreeItem_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_list_AbstractTreeItem_Component.METHODS(),
            Ext_list_AbstractTreeItem_Component.XTYPE(),
            Ext_list_AbstractTreeItem_Component.PROPERTIESOBJECT(),
            Ext_list_AbstractTreeItem_Component.EVENTS()
        )
        this.XTYPE = Ext_list_AbstractTreeItem_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_list_AbstractTreeItem_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_list_AbstractTreeItem_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_list_AbstractTreeItem_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
