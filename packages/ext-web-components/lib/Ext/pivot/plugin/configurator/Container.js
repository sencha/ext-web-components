import Ext_Panel_Component from '../../../../Ext/Panel';

export default class Ext_pivot_plugin_configurator_Container_Component extends Ext_Panel_Component {
//events
//configs

static XTYPE() {return 'pivotconfigcontainer'}
static PROPERTIESOBJECT() { return {
"fieldType":["any"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'addField',function: function(config,pos) { return this.ext.addField(config,pos) } },
{ name:'applyChanges',function: function() { return this.ext.applyChanges() } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_pivot_plugin_configurator_Container_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_pivot_plugin_configurator_Container_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_pivot_plugin_configurator_Container_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_pivot_plugin_configurator_Container_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_pivot_plugin_configurator_Container_Component.METHODS()),
            events.concat(Ext_pivot_plugin_configurator_Container_Component.EVENTS())



            //events.concat(Ext_pivot_plugin_configurator_Container_Component.EVENTS()),
            //propertiesobject.concat(Ext_pivot_plugin_configurator_Container_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_pivot_plugin_configurator_Container_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_pivot_plugin_configurator_Container_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_pivot_plugin_configurator_Container_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_pivot_plugin_configurator_Container_Component.METHODS())
        )
        //this.XTYPE = Ext_pivot_plugin_configurator_Container_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_pivot_plugin_configurator_Container_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_pivot_plugin_configurator_Container_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_pivot_plugin_configurator_Container_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
