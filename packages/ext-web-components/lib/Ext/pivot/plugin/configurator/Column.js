import Ext_dataview_ListItem_Component from '../../../../Ext/dataview/ListItem';

export default class Ext_pivot_plugin_configurator_Column_Component extends Ext_dataview_ListItem_Component {
//events
//configs

static XTYPE() {return 'pivotconfigfield'}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'applyChanges',function: function() { return this.ext.applyChanges() } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_pivot_plugin_configurator_Column_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_pivot_plugin_configurator_Column_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_pivot_plugin_configurator_Column_Component.METHODS(),
            Ext_pivot_plugin_configurator_Column_Component.XTYPE(),
            Ext_pivot_plugin_configurator_Column_Component.PROPERTIESOBJECT(),
            Ext_pivot_plugin_configurator_Column_Component.EVENTS()
        )
        this.XTYPE = Ext_pivot_plugin_configurator_Column_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_pivot_plugin_configurator_Column_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_pivot_plugin_configurator_Column_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_pivot_plugin_configurator_Column_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
