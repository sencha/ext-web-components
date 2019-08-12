import Ext_d3_hierarchy_Hierarchy_Component from '../../../../Ext/d3/hierarchy/Hierarchy';

export default class Ext_d3_hierarchy_tree_Tree_Component extends Ext_d3_hierarchy_Hierarchy_Component {
//events
//configs

static XTYPE() {return ''}
static PROPERTIESOBJECT() { return {
"depth":["number"],
"nodeRadius":["number"],
"nodeSize":["number[]"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_d3_hierarchy_tree_Tree_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_d3_hierarchy_tree_Tree_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_d3_hierarchy_tree_Tree_Component.METHODS(),
            Ext_d3_hierarchy_tree_Tree_Component.XTYPE(),
            Ext_d3_hierarchy_tree_Tree_Component.PROPERTIESOBJECT(),
            Ext_d3_hierarchy_tree_Tree_Component.EVENTS()
        )
        this.XTYPE = Ext_d3_hierarchy_tree_Tree_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_d3_hierarchy_tree_Tree_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_d3_hierarchy_tree_Tree_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_d3_hierarchy_tree_Tree_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
