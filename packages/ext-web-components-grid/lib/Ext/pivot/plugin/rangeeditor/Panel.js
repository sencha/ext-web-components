import Ext_form_Panel_Component from '../../../../Ext/form/Panel';

export default class Ext_pivot_plugin_rangeeditor_Panel_Component extends Ext_form_Panel_Component {
//events
//configs

static XTYPE() {return 'pivotrangeeditor'}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_pivot_plugin_rangeeditor_Panel_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_pivot_plugin_rangeeditor_Panel_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            
        )
        this.XTYPE = Ext_pivot_plugin_rangeeditor_Panel_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_pivot_plugin_rangeeditor_Panel_Component.PROPERTIESOBJECT());
        this.methods = this.extendArray(this.methods, Ext_pivot_plugin_rangeeditor_Panel_Component.METHODS());
        this.events = this.extendArray(this.events, Ext_pivot_plugin_rangeeditor_Panel_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}