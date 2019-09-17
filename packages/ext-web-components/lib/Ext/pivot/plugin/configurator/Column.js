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

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_pivot_plugin_configurator_Column_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_pivot_plugin_configurator_Column_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_pivot_plugin_configurator_Column_Component.METHODS()),
            events.concat(Ext_pivot_plugin_configurator_Column_Component.EVENTS())



            //events.concat(Ext_pivot_plugin_configurator_Column_Component.EVENTS()),
            //propertiesobject.concat(Ext_pivot_plugin_configurator_Column_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_pivot_plugin_configurator_Column_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_pivot_plugin_configurator_Column_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_pivot_plugin_configurator_Column_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_pivot_plugin_configurator_Column_Component.METHODS())
        )
        //this.XTYPE = Ext_pivot_plugin_configurator_Column_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_pivot_plugin_configurator_Column_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_pivot_plugin_configurator_Column_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_pivot_plugin_configurator_Column_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
