import Ext_field_Text_Component from '../../Ext/field/Text';

export default class Ext_field_Search_Component extends Ext_field_Text_Component {
//events
//configs

static XTYPE() {return 'searchfield'}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_field_Search_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_field_Search_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_field_Search_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_field_Search_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_field_Search_Component.METHODS()),
            events.concat(Ext_field_Search_Component.EVENTS())



            //events.concat(Ext_field_Search_Component.EVENTS()),
            //propertiesobject.concat(Ext_field_Search_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_field_Search_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_field_Search_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_field_Search_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_field_Search_Component.METHODS())
        )
        //this.XTYPE = Ext_field_Search_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_field_Search_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_field_Search_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_field_Search_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
