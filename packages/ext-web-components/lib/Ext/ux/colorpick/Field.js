import Ext_field_Picker_Component from '../../../Ext/field/Picker';

export default class Ext_ux_colorpick_Field_Component extends Ext_field_Picker_Component {
//events
get onchange(){return this.getAttribute('onchange')};set onchange(onchange){this.setAttribute('onchange',onchange)}
//configs

static XTYPE() {return 'colorfield'}
static PROPERTIESOBJECT() { return {
"popup":["object"],
}}
static EVENTS() { return [
{name:'change',parameters:'undefined,color,previousColor'},
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_ux_colorpick_Field_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_ux_colorpick_Field_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_ux_colorpick_Field_Component.METHODS(),
            Ext_ux_colorpick_Field_Component.XTYPE(),
            Ext_ux_colorpick_Field_Component.PROPERTIESOBJECT(),
            Ext_ux_colorpick_Field_Component.EVENTS()
        )
        this.XTYPE = Ext_ux_colorpick_Field_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_ux_colorpick_Field_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_ux_colorpick_Field_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_ux_colorpick_Field_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
