import Ext_field_Text_Component from '../../Ext/field/Text';

export default class Ext_field_Picker_Component extends Ext_field_Text_Component {
//events
get oncollapse(){return this.getAttribute('oncollapse')};set oncollapse(oncollapse){this.setAttribute('oncollapse',oncollapse)}
get onexpand(){return this.getAttribute('onexpand')};set onexpand(onexpand){this.setAttribute('onexpand',onexpand)}
//configs

static XTYPE() {return 'pickerfield'}
static PROPERTIESOBJECT() { return {
"alignTarget":["string"],
"autoComplete":["boolean"],
"edgePicker":["object"],
"floatedPicker":["object"],
"floatedPickerAlign":["string"],
"focusTrap":["any"],
"hideTrigger":["boolean"],
"matchFieldWidth":["boolean"],
"picker":["string","object"],
"pickerSlotAlign":["string"],
}}
static EVENTS() { return [
{name:'collapse',parameters:'field'},
{name:'expand',parameters:'field'},
]}
static METHODS() { return [
{ name:'collapseIf',function: function(e) { return this.ext.collapseIf(e) } },
{ name:'initialize',function: function() { return this.ext.initialize() } },
{ name:'onEsc',function: function(e) { return this.ext.onEsc(e) } },
{ name:'realignFloatedPicker',function: function(picker) { return this.ext.realignFloatedPicker(picker) } },
{ name:'setPickerLocation',function: function(fromKeyboard) { return this.ext.setPickerLocation(fromKeyboard) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_field_Picker_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_field_Picker_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_field_Picker_Component.METHODS(),
            Ext_field_Picker_Component.XTYPE(),
            Ext_field_Picker_Component.PROPERTIESOBJECT(),
            Ext_field_Picker_Component.EVENTS()
        )
        this.XTYPE = Ext_field_Picker_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_field_Picker_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_field_Picker_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_field_Picker_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
