import Ext_field_Input_Component from '../../Ext/field/Input';

export default class Ext_field_Text_Component extends Ext_field_Input_Component {
//events
get onaction(){return this.getAttribute('onaction')};set onaction(onaction){this.setAttribute('onaction',onaction)}
get onblur(){return this.getAttribute('onblur')};set onblur(onblur){this.setAttribute('onblur',onblur)}
get onclearicontap(){return this.getAttribute('onclearicontap')};set onclearicontap(onclearicontap){this.setAttribute('onclearicontap',onclearicontap)}
get onfocus(){return this.getAttribute('onfocus')};set onfocus(onfocus){this.setAttribute('onfocus',onfocus)}
get onkeydown(){return this.getAttribute('onkeydown')};set onkeydown(onkeydown){this.setAttribute('onkeydown',onkeydown)}
get onkeyup(){return this.getAttribute('onkeyup')};set onkeyup(onkeyup){this.setAttribute('onkeyup',onkeyup)}
get onmousedown(){return this.getAttribute('onmousedown')};set onmousedown(onmousedown){this.setAttribute('onmousedown',onmousedown)}
get onpaste(){return this.getAttribute('onpaste')};set onpaste(onpaste){this.setAttribute('onpaste',onpaste)}
//configs

static XTYPE() {return 'textfield'}
static PROPERTIESOBJECT() { return {
"animateUnderline":["boolean"],
"autoCapitalize":["boolean"],
"autoComplete":["boolean"],
"autoCorrect":["boolean"],
"autoHideInputMask":["boolean"],
"badFormatMessage":["string"],
"bodyAlign":["any"],
"clearable":["boolean"],
"editable":["boolean"],
"inputMask":["string","Ext.field.InputMask"],
"inputType":["string"],
"labelAlign":["'top'","'left'","'bottom'","'right'"],
"labelInPlaceholder":["any"],
"maxLength":["number"],
"parseValidator":["Ext.data.validator.Validator"],
"pattern":["string"],
"placeholder":["string"],
"publishes":["string","string[]","object"],
"stripCharsRe":["regexp"],
"textAlign":["'left'","'center'","'right'"],
"triggers":["object"],
"twoWayBindable":["string","string[]","object"],
}}
static EVENTS() { return [
{name:'action',parameters:'undefined,e'},
{name:'blur',parameters:'undefined,e'},
{name:'clearicontap',parameters:'undefined,input,e'},
{name:'focus',parameters:'undefined,e'},
{name:'keydown',parameters:'undefined,e'},
{name:'keyup',parameters:'undefined,e'},
{name:'mousedown',parameters:'undefined,e'},
{name:'paste',parameters:'undefined,e'},
]}
static METHODS() { return [
{ name:'addTrigger',function: function(name,trigger) { return this.ext.addTrigger(name,trigger) } },
{ name:'clearValue',function: function() { return this.ext.clearValue() } },
{ name:'createTrigger',function: function(name,trigger) { return this.ext.createTrigger(name,trigger) } },
{ name:'doClearIconTap',function: function() { return this.ext.doClearIconTap() } },
{ name:'doKeyUp',function: function(me,e) { return this.ext.doKeyUp(me,e) } },
{ name:'fireKey',function: function(e) { return this.ext.fireKey(e) } },
{ name:'getTextSelection',function: function() { return this.ext.getTextSelection() } },
{ name:'parseValue',function: function(value,errors) { return this.ext.parseValue(value,errors) } },
{ name:'processRawValue',function: function(value) { return this.ext.processRawValue(value) } },
{ name:'removeTrigger',function: function(trigger,destroy) { return this.ext.removeTrigger(trigger,destroy) } },
{ name:'select',function: function(start,end,direction) { return this.ext.select(start,end,direction) } },
{ name:'syncTriggers',function: function() { return this.ext.syncTriggers() } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_field_Text_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_field_Text_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_field_Text_Component.METHODS(),
            Ext_field_Text_Component.XTYPE(),
            Ext_field_Text_Component.PROPERTIESOBJECT(),
            Ext_field_Text_Component.EVENTS()
        )
        this.XTYPE = Ext_field_Text_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_field_Text_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_field_Text_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_field_Text_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
