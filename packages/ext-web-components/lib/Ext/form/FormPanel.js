import Ext_field_Panel_Component from '../../Ext/field/Panel';

export default class Ext_form_FormPanel_Component extends Ext_field_Panel_Component {
//events
get onbeforesubmit(){return this.getAttribute('onbeforesubmit')};set onbeforesubmit(onbeforesubmit){this.setAttribute('onbeforesubmit',onbeforesubmit)}
get onsubmit(){return this.getAttribute('onsubmit')};set onsubmit(onsubmit){this.setAttribute('onsubmit',onsubmit)}
//configs

static XTYPE() {return 'formpanel'}
static PROPERTIESOBJECT() { return {
"enableSubmissionForm":["boolean"],
"enctype":["string"],
"fieldDefaults":["object"],
"jsonSubmit":["boolean"],
"method":["string"],
"multipartDetection":["boolean"],
"standardSubmit":["boolean"],
"submitOnAction":["object"],
"trackResetOnLoad":["boolean"],
}}
static EVENTS() { return [
{name:'beforesubmit',parameters:'undefined,values,options,e'},
{name:'submit',parameters:'undefined,result,e'},
]}
static METHODS() { return [
{ name:'applyExtraParams',function: function(options) { return this.ext.applyExtraParams(options) } },
{ name:'beforeAjaxSubmit',function: function(form,options,successFn,failureFn) { return this.ext.beforeAjaxSubmit(form,options,successFn,failureFn) } },
{ name:'beforeDirectSubmit',function: function(api,form,options,successFn,failureFn) { return this.ext.beforeDirectSubmit(api,form,options,successFn,failureFn) } },
{ name:'beforeStandardSubmit',function: function(form,options) { return this.ext.beforeStandardSubmit(form,options) } },
{ name:'createSubmissionForm',function: function(form,values) { return this.ext.createSubmissionForm(form,values) } },
{ name:'doBeforeSubmit',function: function(me,formValues,options) { return this.ext.doBeforeSubmit(me,formValues,options) } },
{ name:'initialize',function: function() { return this.ext.initialize() } },
{ name:'onFieldAction',function: function(field) { return this.ext.onFieldAction(field) } },
{ name:'onSubmit',function: function(event) { return this.ext.onSubmit(event) } },
{ name:'submit',function: function(options,e) { return this.ext.submit(options,e) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_form_FormPanel_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_form_FormPanel_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_form_FormPanel_Component.METHODS(),
            Ext_form_FormPanel_Component.XTYPE(),
            Ext_form_FormPanel_Component.PROPERTIESOBJECT(),
            Ext_form_FormPanel_Component.EVENTS()
        )
        this.XTYPE = Ext_form_FormPanel_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_form_FormPanel_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_form_FormPanel_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_form_FormPanel_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
