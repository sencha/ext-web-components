import Ext_d3_hierarchy_Hierarchy_Component from '../../../../Ext/d3/hierarchy/Hierarchy';

export default class Ext_d3_hierarchy_partition_Partition_Component extends Ext_d3_hierarchy_Hierarchy_Component {
//events
//configs

static XTYPE() {return 'd3-partition'}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'resetZoom',function: function(instantly) { return this.ext.resetZoom(instantly) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_d3_hierarchy_partition_Partition_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_d3_hierarchy_partition_Partition_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            
        )
        this.XTYPE = Ext_d3_hierarchy_partition_Partition_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_d3_hierarchy_partition_Partition_Component.PROPERTIESOBJECT());
        this.methods = this.extendArray(this.methods, Ext_d3_hierarchy_partition_Partition_Component.METHODS());
        this.events = this.extendArray(this.events, Ext_d3_hierarchy_partition_Partition_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}