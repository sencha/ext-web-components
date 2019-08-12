import Ext_field_Number_Component from '../../Ext/field/Number';

export default class Ext_field_Spinner_Component extends Ext_field_Number_Component {
//events
get onaction(){return this.getAttribute('onaction')};set onaction(onaction){this.setAttribute('onaction',onaction)}
get onspin(){return this.getAttribute('onspin')};set onspin(onspin){this.setAttribute('onspin',onspin)}
get onspindown(){return this.getAttribute('onspindown')};set onspindown(onspindown){this.setAttribute('onspindown',onspindown)}
get onspinup(){return this.getAttribute('onspinup')};set onspinup(onspinup){this.setAttribute('onspinup',onspinup)}
get onupdatedata(){return this.getAttribute('onupdatedata')};set onupdatedata(onupdatedata){this.setAttribute('onupdatedata',onupdatedata)}
//configs

static XTYPE() {return 'spinnerfield'}
static PROPERTIESOBJECT() { return {
"accelerateOnTapHold":["boolean"],
"clearable":["boolean"],
"cycle":["boolean"],
"decimals":["number"],
"stepValue":["number"],
"value":["mixed"],
}}
static EVENTS() { return [
{name:'action',parameters:''},
{name:'spin',parameters:'undefined,value,direction'},
{name:'spindown',parameters:'undefined,value'},
{name:'spinup',parameters:'undefined,value'},
{name:'updatedata',parameters:''},
]}
static METHODS() { return [
{ name:'onSpinDown',function: function() { return this.ext.onSpinDown() } },
{ name:'onSpinUp',function: function() { return this.ext.onSpinUp() } },
{ name:'spin',function: function(down) { return this.ext.spin(down) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_field_Spinner_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_field_Spinner_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_field_Spinner_Component.METHODS(),
            Ext_field_Spinner_Component.XTYPE(),
            Ext_field_Spinner_Component.PROPERTIESOBJECT(),
            Ext_field_Spinner_Component.EVENTS()
        )
        this.XTYPE = Ext_field_Spinner_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_field_Spinner_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_field_Spinner_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_field_Spinner_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
