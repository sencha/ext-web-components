import Ext_Panel_Component from '../../../../Ext/Panel';

export default class Ext_pivot_plugin_configurator_Panel_Component extends Ext_Panel_Component {
//events
//configs

static XTYPE() {return 'pivotconfigpanel'}
static PROPERTIESOBJECT() { return {
"panelAggFieldsText":["string"],
"panelAggFieldsTitle":["string"],
"panelAllFieldsText":["string"],
"panelAllFieldsTitle":["string"],
"panelLeftFieldsText":["string"],
"panelLeftFieldsTitle":["string"],
"panelTopFieldsText":["string"],
"panelTopFieldsTitle":["string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'dragDropField',function: function(fromContainer,toContainer,record,newPos) { return this.ext.dragDropField(fromContainer,toContainer,record,newPos) } },
{ name:'findFieldInContainer',function: function(field,container) { return this.ext.findFieldInContainer(field,container) } },
{ name:'getAggregateContainer',function: function() { return this.ext.getAggregateContainer() } },
{ name:'getAggregateHeader',function: function() { return this.ext.getAggregateHeader() } },
{ name:'getAllFieldsContainer',function: function() { return this.ext.getAllFieldsContainer() } },
{ name:'getAllFieldsHeader',function: function() { return this.ext.getAllFieldsHeader() } },
{ name:'getLeftAxisContainer',function: function() { return this.ext.getLeftAxisContainer() } },
{ name:'getLeftAxisHeader',function: function() { return this.ext.getLeftAxisHeader() } },
{ name:'getTopAxisContainer',function: function() { return this.ext.getTopAxisContainer() } },
{ name:'getTopAxisHeader',function: function() { return this.ext.getTopAxisHeader() } },
{ name:'setAggregateContainerVisible',function: function(visible) { return this.ext.setAggregateContainerVisible(visible) } },
{ name:'setAllFieldsContainerVisible',function: function(visible) { return this.ext.setAllFieldsContainerVisible(visible) } },
{ name:'setLeftAxisContainerVisible',function: function(visible) { return this.ext.setLeftAxisContainerVisible(visible) } },
{ name:'setTopAxisContainerVisible',function: function(visible) { return this.ext.setTopAxisContainerVisible(visible) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_pivot_plugin_configurator_Panel_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_pivot_plugin_configurator_Panel_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_pivot_plugin_configurator_Panel_Component.METHODS(),
            Ext_pivot_plugin_configurator_Panel_Component.XTYPE(),
            Ext_pivot_plugin_configurator_Panel_Component.PROPERTIESOBJECT(),
            Ext_pivot_plugin_configurator_Panel_Component.EVENTS()
        )
        this.XTYPE = Ext_pivot_plugin_configurator_Panel_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_pivot_plugin_configurator_Panel_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_pivot_plugin_configurator_Panel_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_pivot_plugin_configurator_Panel_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
