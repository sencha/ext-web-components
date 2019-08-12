import Ext_Gadget_Component from '../../Ext/Gadget';

export default class Ext_list_Tree_Component extends Ext_Gadget_Component {
//events
get onitemclick(){return this.getAttribute('onitemclick')};set onitemclick(onitemclick){this.setAttribute('onitemclick',onitemclick)}
get onselectionchange(){return this.getAttribute('onselectionchange')};set onselectionchange(onselectionchange){this.setAttribute('onselectionchange',onselectionchange)}
//configs

static XTYPE() {return 'treelist'}
static PROPERTIESOBJECT() { return {
"defaults":["object"],
"expanderFirst":["boolean"],
"expanderOnly":["boolean"],
"floatLeafItems":["boolean"],
"highlightPath":["boolean"],
"indent":["number"],
"micro":["boolean"],
"publishes":["string","string[]","object"],
"selection":["Ext.data.TreeModel","number","string"],
"selectOnExpander":["boolean"],
"singleExpand":["boolean"],
"store":["string","object","Ext.data.TreeStore"],
"twoWayBindable":["string","string[]","object"],
"ui":["string","string[]"],
}}
static EVENTS() { return [
{name:'itemclick',parameters:'sender,info'},
{name:'selectionchange',parameters:'treelist,record'},
]}
static METHODS() { return [
{ name:'createItem',function: function(node,parent) { return this.ext.createItem(node,parent) } },
{ name:'createRootItem',function: function(root) { return this.ext.createRootItem(root) } },
{ name:'getItem',function: function(node) { return this.ext.getItem(node) } },
{ name:'getItemConfig',function: function(node,parent) { return this.ext.getItemConfig(node,parent) } },
{ name:'onClick',function: function(e) { return this.ext.onClick(e) } },
{ name:'onNodeAppend',function: function(parentNode,node) { return this.ext.onNodeAppend(parentNode,node) } },
{ name:'onNodeCollapse',function: function(node) { return this.ext.onNodeCollapse(node) } },
{ name:'onNodeExpand',function: function(node) { return this.ext.onNodeExpand(node) } },
{ name:'onNodeInsert',function: function(parentNode,node,refNode) { return this.ext.onNodeInsert(parentNode,node,refNode) } },
{ name:'onNodeRemove',function: function(parentNode,node,isMove) { return this.ext.onNodeRemove(parentNode,node,isMove) } },
{ name:'onNodeUpdate',function: function(store,node,type,modifiedFieldNames) { return this.ext.onNodeUpdate(store,node,type,modifiedFieldNames) } },
{ name:'onRefresh',function: function(store) { return this.ext.onRefresh(store) } },
{ name:'onRootChange',function: function(root) { return this.ext.onRootChange(root) } },
{ name:'onToolStripClick',function: function(e) { return this.ext.onToolStripClick(e) } },
{ name:'onToolStripMouseOver',function: function(e) { return this.ext.onToolStripMouseOver(e) } },
{ name:'removeItem',function: function(node) { return this.ext.removeItem(node) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_list_Tree_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_list_Tree_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_list_Tree_Component.METHODS(),
            Ext_list_Tree_Component.XTYPE(),
            Ext_list_Tree_Component.PROPERTIESOBJECT(),
            Ext_list_Tree_Component.EVENTS()
        )
        this.XTYPE = Ext_list_Tree_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_list_Tree_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_list_Tree_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_list_Tree_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
