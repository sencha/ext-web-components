import Ext_Container_Component from '../../Ext/Container';

export default class Ext_form_FieldSet_Component extends Ext_Container_Component {
//events
//configs

static XTYPE() {return 'fieldset'}
static PROPERTIESOBJECT() { return {
"fieldDefaults":["object"],
"instructions":["string"],
"title":["string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'applyInstructions',function: function(instructions) { return this.ext.applyInstructions(instructions) } },
{ name:'applyTitle',function: function(title) { return this.ext.applyTitle(title) } },
{ name:'getInstructions',function: function() { return this.ext.getInstructions() } },
{ name:'getTitle',function: function() { return this.ext.getTitle() } },
{ name:'updateDisabled',function: function(newDisabled) { return this.ext.updateDisabled(newDisabled) } },
{ name:'updateInstructions',function: function(newInstructions,oldInstructions) { return this.ext.updateInstructions(newInstructions,oldInstructions) } },
{ name:'updateTitle',function: function(newTitle,oldTitle) { return this.ext.updateTitle(newTitle,oldTitle) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_form_FieldSet_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_form_FieldSet_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_form_FieldSet_Component.METHODS(),
            Ext_form_FieldSet_Component.XTYPE(),
            Ext_form_FieldSet_Component.PROPERTIESOBJECT(),
            Ext_form_FieldSet_Component.EVENTS()
        )
        this.XTYPE = Ext_form_FieldSet_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_form_FieldSet_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_form_FieldSet_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_form_FieldSet_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
