import Ext_d3_svg_Svg_Component from '../../../Ext/d3/svg/Svg';

export default class Ext_d3_hierarchy_Hierarchy_Component extends Ext_d3_svg_Svg_Component {
//events
get onlayout(){return this.getAttribute('onlayout')};set onlayout(onlayout){this.setAttribute('onlayout',onlayout)}
//configs

static XTYPE() {return ''}
static PROPERTIESOBJECT() { return {
"colorAxis":["Ext.d3.axis.Color"],
"expandEventName":["string","string[]"],
"hierarchyCls":["string"],
"layout":["function"],
"linkKey":["function"],
"nodeChildren":["function"],
"nodeClass":["function"],
"nodeKey":["function"],
"nodeText":["function","string","string[]"],
"nodeTransform":["function"],
"nodeValue":["function","string","number"],
"noParentValue":["boolean"],
"noSizeLayout":["boolean"],
"publishes":["string","string[]","object"],
"renderLinks":["boolean"],
"rootVisible":["boolean"],
"selectEventName":["string","string[]"],
"selection":["Ext.data.TreeModel"],
"sorter":["function"],
"transitions":["any"],
}}
static EVENTS() { return [
{name:'layout',parameters:'component'},
]}
static METHODS() { return [
{ name:'addNodeListener',function: function(eventName,handler) { return this.ext.addNodeListener(eventName,handler) } },
{ name:'addNodeListeners',function: function() { return this.ext.addNodeListeners() } },
{ name:'findNode',function: function(node,selection) { return this.ext.findNode(node,selection) } },
{ name:'hideRoot',function: function() { return this.ext.hideRoot() } },
{ name:'isRecordInStore',function: function(record) { return this.ext.isRecordInStore(record) } },
{ name:'nodeFromRecord',function: function(record) { return this.ext.nodeFromRecord(record) } },
{ name:'onLayout',function: function() { return this.ext.onLayout() } },
{ name:'onNodeDeselect',function: function(record,selection) { return this.ext.onNodeDeselect(record,selection) } },
{ name:'onNodesAdd',function: function(selection) { return this.ext.onNodesAdd(selection) } },
{ name:'onNodeSelect',function: function(record,selection) { return this.ext.onNodeSelect(record,selection) } },
{ name:'performLayout',function: function() { return this.ext.performLayout() } },
{ name:'removeLinks',function: function(selection) { return this.ext.removeLinks(selection) } },
{ name:'removeNodeListener',function: function(eventName,handler) { return this.ext.removeNodeListener(eventName,handler) } },
{ name:'removeNodes',function: function(selection) { return this.ext.removeNodes(selection) } },
{ name:'renderLinks',function: function(update) { return this.ext.renderLinks(update) } },
{ name:'renderNodes',function: function(update) { return this.ext.renderNodes(update) } },
{ name:'renderScene',function: function(nodes,links) { return this.ext.renderScene(nodes,links) } },
{ name:'selectionFromRecord',function: function(record) { return this.ext.selectionFromRecord(record) } },
{ name:'setLayoutSize',function: function(size) { return this.ext.setLayoutSize(size) } },
{ name:'skipLayoutTransition',function: function() { return this.ext.skipLayoutTransition() } },
{ name:'updateEventName',function: function(name,oldName,handler) { return this.ext.updateEventName(name,oldName,handler) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_d3_hierarchy_Hierarchy_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_d3_hierarchy_Hierarchy_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_d3_hierarchy_Hierarchy_Component.METHODS(),
            Ext_d3_hierarchy_Hierarchy_Component.XTYPE(),
            Ext_d3_hierarchy_Hierarchy_Component.PROPERTIESOBJECT(),
            Ext_d3_hierarchy_Hierarchy_Component.EVENTS()
        )
        this.XTYPE = Ext_d3_hierarchy_Hierarchy_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_d3_hierarchy_Hierarchy_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_d3_hierarchy_Hierarchy_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_d3_hierarchy_Hierarchy_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
