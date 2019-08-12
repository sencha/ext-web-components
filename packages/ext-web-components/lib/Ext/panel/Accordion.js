import Ext_Panel_Component from '../../Ext/Panel';

export default class Ext_panel_Accordion_Component extends Ext_Panel_Component {
//events
//configs

static XTYPE() {return 'accordion'}
static PROPERTIESOBJECT() { return {
"defaultPanelUI":["string"],
"expandedFirst":["boolean"],
"openable":["number"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_panel_Accordion_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_panel_Accordion_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_panel_Accordion_Component.METHODS(),
            Ext_panel_Accordion_Component.XTYPE(),
            Ext_panel_Accordion_Component.PROPERTIESOBJECT(),
            Ext_panel_Accordion_Component.EVENTS()
        )
        this.XTYPE = Ext_panel_Accordion_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_panel_Accordion_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_panel_Accordion_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_panel_Accordion_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
