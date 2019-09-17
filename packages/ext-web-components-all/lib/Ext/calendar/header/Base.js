import Ext_Gadget_Component from '../../../Ext/Gadget';

export default class Ext_calendar_header_Base_Component extends Ext_Gadget_Component {
//events
//configs

static XTYPE() {return ''}
static PROPERTIESOBJECT() { return {
"cellCls":["string"],
"compact":["boolean"],
"compactOptions":["object"],
"format":["string"],
"value":["date"],
"visibleDays":["number"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_calendar_header_Base_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_calendar_header_Base_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            
        )
        this.XTYPE = Ext_calendar_header_Base_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_calendar_header_Base_Component.PROPERTIESOBJECT());
        this.methods = this.extendArray(this.methods, Ext_calendar_header_Base_Component.METHODS());
        this.events = this.extendArray(this.events, Ext_calendar_header_Base_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}