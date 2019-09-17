import Ext_field_Text_Component from '../../Ext/field/Text';

export default class Ext_field_Email_Component extends Ext_field_Text_Component {
//events
//configs

static XTYPE() {return 'emailfield'}
static PROPERTIESOBJECT() { return {
"autoCapitalize":["boolean"],
"inputType":["string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_field_Email_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_field_Email_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            
        )
        this.XTYPE = Ext_field_Email_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_field_Email_Component.PROPERTIESOBJECT());
        this.methods = this.extendArray(this.methods, Ext_field_Email_Component.METHODS());
        this.events = this.extendArray(this.events, Ext_field_Email_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}