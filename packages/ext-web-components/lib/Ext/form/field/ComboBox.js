import Ext_field_Select_Component from '../../../Ext/field/Select';

export default class Ext_form_field_ComboBox_Component extends Ext_field_Select_Component {
//events
get onbeforepickercreate(){return this.getAttribute('onbeforepickercreate')};set onbeforepickercreate(onbeforepickercreate){this.setAttribute('onbeforepickercreate',onbeforepickercreate)}
get onbeforequery(){return this.getAttribute('onbeforequery')};set onbeforequery(onbeforequery){this.setAttribute('onbeforequery',onbeforequery)}
get onchange(){return this.getAttribute('onchange')};set onchange(onchange){this.setAttribute('onchange',onchange)}
get onpickercreate(){return this.getAttribute('onpickercreate')};set onpickercreate(onpickercreate){this.setAttribute('onpickercreate',onpickercreate)}
get onselect(){return this.getAttribute('onselect')};set onselect(onselect){this.setAttribute('onselect',onselect)}
//configs

static XTYPE() {return 'combobox'}
static PROPERTIESOBJECT() { return {
"allQuery":["string"],
"anyMatch":["boolean"],
"autoSelect":["boolean"],
"caseSensitive":["boolean"],
"editable":["boolean"],
"enableRegEx":["boolean"],
"forceSelection":["boolean"],
"minChars":["number"],
"primaryFilter":["function","string","object","Ext.util.Filter"],
"queryCaching":["boolean"],
"queryDelay":["number"],
"queryMode":["string"],
"queryParam":["string"],
"triggerAction":["string"],
"typeAhead":["boolean"],
"typeAheadDelay":["number"],
}}
static EVENTS() { return [
{name:'beforepickercreate',parameters:'undefined,newValue'},
{name:'beforequery',parameters:'queryPlan'},
{name:'change',parameters:'undefined,newValue,oldValue'},
{name:'pickercreate',parameters:'undefined,picker'},
{name:'select',parameters:'undefined,newValue'},
]}
static METHODS() { return [
{ name:'beforeFilter',function: function(queryPlan) { return this.ext.beforeFilter(queryPlan) } },
{ name:'doFilter',function: function(query) { return this.ext.doFilter(query) } },
{ name:'doRawFilter',function: function() { return this.ext.doRawFilter() } },
{ name:'onCollectionAdd',function: function(valueCollection,adds) { return this.ext.onCollectionAdd(valueCollection,adds) } },
{ name:'onExpandTap',function: function() { return this.ext.onExpandTap() } },
{ name:'onStoreFilterChange',function: function() { return this.ext.onStoreFilterChange() } },
{ name:'serializePrimaryFilter',function: function(filter) { return this.ext.serializePrimaryFilter(filter) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_form_field_ComboBox_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_form_field_ComboBox_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_form_field_ComboBox_Component.METHODS(),
            Ext_form_field_ComboBox_Component.XTYPE(),
            Ext_form_field_ComboBox_Component.PROPERTIESOBJECT(),
            Ext_form_field_ComboBox_Component.EVENTS()
        )
        this.XTYPE = Ext_form_field_ComboBox_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_form_field_ComboBox_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_form_field_ComboBox_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_form_field_ComboBox_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
