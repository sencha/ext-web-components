import Ext_d3_hierarchy_partition_Partition_Component from '../../../../Ext/d3/hierarchy/partition/Partition';

export default class Ext_d3_hierarchy_partition_Sunburst_Component extends Ext_d3_hierarchy_partition_Partition_Component {
//events
//configs

static XTYPE() {return 'd3-sunburst'}
static PROPERTIESOBJECT() { return {
"textPadding":["array"],
"zoomParentDotRadius":["number"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'isBBoxInSlice',function: function(bbox,a1,a2,r1,r2,px,py) { return this.ext.isBBoxInSlice(bbox,a1,a2,r1,r2,px,py) } },
{ name:'onSceneResize',function: function(scene,rect) { return this.ext.onSceneResize(scene,rect) } },
{ name:'positionTextFn',function: function(selection) { return this.ext.positionTextFn(selection) } },
{ name:'textVisibilityFn',function: function(selection) { return this.ext.textVisibilityFn(selection) } },
{ name:'zoomInNode',function: function(record,instantly) { return this.ext.zoomInNode(record,instantly) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_d3_hierarchy_partition_Sunburst_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_d3_hierarchy_partition_Sunburst_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_d3_hierarchy_partition_Sunburst_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_d3_hierarchy_partition_Sunburst_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_d3_hierarchy_partition_Sunburst_Component.METHODS()),
            events.concat(Ext_d3_hierarchy_partition_Sunburst_Component.EVENTS())



            //events.concat(Ext_d3_hierarchy_partition_Sunburst_Component.EVENTS()),
            //propertiesobject.concat(Ext_d3_hierarchy_partition_Sunburst_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_d3_hierarchy_partition_Sunburst_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_d3_hierarchy_partition_Sunburst_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_d3_hierarchy_partition_Sunburst_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_d3_hierarchy_partition_Sunburst_Component.METHODS())
        )
        //this.XTYPE = Ext_d3_hierarchy_partition_Sunburst_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_d3_hierarchy_partition_Sunburst_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_d3_hierarchy_partition_Sunburst_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_d3_hierarchy_partition_Sunburst_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
