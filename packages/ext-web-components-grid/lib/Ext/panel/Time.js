import Ext_Panel_Component from '../../Ext/Panel';

export default class Ext_panel_Time_Component extends Ext_Panel_Component {
//events
//configs

static XTYPE() {return 'timepanel'}
static PROPERTIESOBJECT() { return {
"alignPMInside":["boolean"],
"autoAdvance":["boolean"],
"buttonAlign":["string"],
"confirmable":["boolean"],
"declineHandler":["function"],
"defaultButtons":["object"],
"handler":["function"],
"hourDisplayFormat":["string"],
"meridiem":["boolean"],
"mode":["string"],
"scope":["object"],
"value":["date"],
"vertical":["boolean"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_panel_Time_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_panel_Time_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            
        )
        this.XTYPE = Ext_panel_Time_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_panel_Time_Component.PROPERTIESOBJECT());
        this.methods = this.extendArray(this.methods, Ext_panel_Time_Component.METHODS());
        this.events = this.extendArray(this.events, Ext_panel_Time_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
