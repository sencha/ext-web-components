import Ext_Component_Component from '../../Ext/Component';

export default class Ext_form_Field_Component extends Ext_Component_Component {
//events
get onchange(){return this.getAttribute('onchange')};set onchange(onchange){this.setAttribute('onchange',onchange)}
get onclick(){return this.getAttribute('onclick')};set onclick(onclick){this.setAttribute('onclick',onclick)}
get onerrorchange(){return this.getAttribute('onerrorchange')};set onerrorchange(onerrorchange){this.setAttribute('onerrorchange',onerrorchange)}
get onkeyup(){return this.getAttribute('onkeyup')};set onkeyup(onkeyup){this.setAttribute('onkeyup',onkeyup)}
get onmousedown(){return this.getAttribute('onmousedown')};set onmousedown(onmousedown){this.setAttribute('onmousedown',onmousedown)}
get onpaste(){return this.getAttribute('onpaste')};set onpaste(onpaste){this.setAttribute('onpaste',onpaste)}
//configs

static XTYPE() {return 'field'}
static PROPERTIESOBJECT() { return {
"autoFitErrors":["boolean"],
"bodyAlign":["'start'","'center'","'end'","'stretch'"],
"dataType":["Ext.data.field.Field","object","string"],
"disabled":["boolean"],
"error":["string","string[]"],
"errorMessage":["string"],
"errorTarget":["string"],
"errorTip":["object"],
"errorTpl":["string","string[]","Ext.XTemplate"],
"fullscreen":["boolean"],
"inline":["boolean"],
"label":["string"],
"labelAlign":["'top'","'left'","'bottom'","'right'"],
"labelCls":["string"],
"labelMinWidth":["number","string"],
"labelTextAlign":["'top'","'right'","'bottom'","'left'"],
"labelWidth":["number","string"],
"labelWrap":["boolean"],
"name":["string"],
"required":["boolean"],
"requiredMessage":["string"],
"sideError":["string"],
"tipError":["string"],
"titleError":["string"],
"underError":["string"],
"validateDisabled":["boolean"],
"validationMessage":["string"],
"validators":["mixed"],
"value":["mixed"],
}}
static EVENTS() { return [
{name:'change',parameters:'undefined,newValue,oldValue'},
{name:'click',parameters:'e'},
{name:'errorchange',parameters:'undefined,error'},
{name:'keyup',parameters:'e'},
{name:'mousedown',parameters:'e'},
{name:'paste',parameters:'e'},
]}
static METHODS() { return [
{ name:'applyValidators',function: function(validators) { return this.ext.applyValidators(validators) } },
{ name:'clearInvalid',function: function() { return this.ext.clearInvalid() } },
{ name:'completeEdit',function: function() { return this.ext.completeEdit() } },
{ name:'didValueChange',function: function(newVal,oldVal) { return this.ext.didValueChange(newVal,oldVal) } },
{ name:'doValidate',function: function(value,errors,skipLazy) { return this.ext.doValidate(value,errors,skipLazy) } },
{ name:'formatErrors',function: function(errors) { return this.ext.formatErrors(errors) } },
{ name:'getRawValue',function: function() { return this.ext.getRawValue() } },
{ name:'isDirty',function: function() { return this.ext.isDirty() } },
{ name:'isEqual',function: function(value1,value2) { return this.ext.isEqual(value1,value2) } },
{ name:'isValid',function: function() { return this.ext.isValid() } },
{ name:'markInvalid',function: function(messages) { return this.ext.markInvalid(messages) } },
{ name:'processRawValue',function: function(value) { return this.ext.processRawValue(value) } },
{ name:'rawToValue',function: function(rawValue) { return this.ext.rawToValue(rawValue) } },
{ name:'reset',function: function() { return this.ext.reset() } },
{ name:'resetOriginalValue',function: function() { return this.ext.resetOriginalValue() } },
{ name:'serialize',function: function() { return this.ext.serialize() } },
{ name:'toggleInvalidCls',function: function(hasError) { return this.ext.toggleInvalidCls(hasError) } },
{ name:'transformRawValue',function: function(value) { return this.ext.transformRawValue(value) } },
{ name:'validate',function: function(skipLazy) { return this.ext.validate(skipLazy) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_form_Field_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_form_Field_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_form_Field_Component.METHODS(),
            Ext_form_Field_Component.XTYPE(),
            Ext_form_Field_Component.PROPERTIESOBJECT(),
            Ext_form_Field_Component.EVENTS()
        )
        this.XTYPE = Ext_form_Field_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_form_Field_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_form_Field_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_form_Field_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
