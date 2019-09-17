import Ext_field_Picker_Component from '../../Ext/field/Picker';

export default class Ext_field_Time_Component extends Ext_field_Picker_Component {
//events
//configs

static XTYPE() {return 'timefield'}
static PROPERTIESOBJECT() { return {
"altFormats":["string","string[]"],
"format":["string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'onPickerChange',function: function(picker,value) { return this.ext.onPickerChange(picker,value) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_field_Time_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_field_Time_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_field_Time_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_field_Time_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_field_Time_Component.METHODS()),
            events.concat(Ext_field_Time_Component.EVENTS())



            //events.concat(Ext_field_Time_Component.EVENTS()),
            //propertiesobject.concat(Ext_field_Time_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_field_Time_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_field_Time_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_field_Time_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_field_Time_Component.METHODS())
        )
        //this.XTYPE = Ext_field_Time_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_field_Time_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_field_Time_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_field_Time_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
