import Ext_field_Text_Component from '../../Ext/field/Text';

export default class Ext_field_File_Component extends Ext_field_Text_Component {
//events
//configs

static XTYPE() {return 'filefield'}
static PROPERTIESOBJECT() { return {
"accept":["string"],
"capture":["string"],
"multiple":["boolean"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'getFiles',function: function() { return this.ext.getFiles() } },
{ name:'reset',function: function() { return this.ext.reset() } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_field_File_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_field_File_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_field_File_Component.METHODS(),
            Ext_field_File_Component.XTYPE(),
            Ext_field_File_Component.PROPERTIESOBJECT(),
            Ext_field_File_Component.EVENTS()
        )
        this.XTYPE = Ext_field_File_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_field_File_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_field_File_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_field_File_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
