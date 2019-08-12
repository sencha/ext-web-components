import Ext_form_Panel_Component from '../../../../Ext/form/Panel';

export default class Ext_pivot_plugin_configurator_Settings_Component extends Ext_form_Panel_Component {
//events
//configs

static XTYPE() {return 'pivotsettings'}
static PROPERTIESOBJECT() { return {
"controller":["string","object","Ext.app.ViewController"],
"defaults":["object"],
"hideAnimation":["string","mixed"],
"listeners":["object"],
"showAnimation":["string","mixed"],
"viewModel":["string","object","Ext.app.ViewModel"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_pivot_plugin_configurator_Settings_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_pivot_plugin_configurator_Settings_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_pivot_plugin_configurator_Settings_Component.METHODS(),
            Ext_pivot_plugin_configurator_Settings_Component.XTYPE(),
            Ext_pivot_plugin_configurator_Settings_Component.PROPERTIESOBJECT(),
            Ext_pivot_plugin_configurator_Settings_Component.EVENTS()
        )
        this.XTYPE = Ext_pivot_plugin_configurator_Settings_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_pivot_plugin_configurator_Settings_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_pivot_plugin_configurator_Settings_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_pivot_plugin_configurator_Settings_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
