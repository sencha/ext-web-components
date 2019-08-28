import Ext_picker_Picker_Component from '../../Ext/picker/Picker';

export default class Ext_picker_Date_Component extends Ext_picker_Picker_Component {
//events
get onchange(){return this.getAttribute('onchange')};set onchange(onchange){this.setAttribute('onchange',onchange)}
//configs

static XTYPE() {return 'datepicker'}
static PROPERTIESOBJECT() { return {
"dayText":["string"],
"doneButton":["string","mixed"],
"monthText":["string"],
"slotOrder":["array"],
"slots":["array"],
"value":["object","date"],
"yearFrom":["number"],
"yearText":["string"],
"yearTo":["number"],
}}
static EVENTS() { return [
{name:'change',parameters:'undefined,value'},
]}
static METHODS() { return [
{ name:'constructor',function: function() { return this.ext.constructor() } },
{ name:'createSlot',function: function(name,days,months,years) { return this.ext.createSlot(name,days,months,years) } },
{ name:'createSlots',function: function() { return this.ext.createSlots() } },
{ name:'getDaysInMonth',function: function(month,year) { return this.ext.getDaysInMonth(month,year) } },
{ name:'isLeapYear',function: function(year) { return this.ext.isLeapYear(year) } },
{ name:'updateDayText',function: function(newDayText,oldDayText) { return this.ext.updateDayText(newDayText,oldDayText) } },
{ name:'updateMonthText',function: function(newMonthText,oldMonthText) { return this.ext.updateMonthText(newMonthText,oldMonthText) } },
{ name:'updateYearFrom',function: function() { return this.ext.updateYearFrom() } },
{ name:'updateYearText',function: function(yearText) { return this.ext.updateYearText(yearText) } },
{ name:'updateYearTo',function: function() { return this.ext.updateYearTo() } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_picker_Date_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_picker_Date_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_picker_Date_Component.METHODS(),
            Ext_picker_Date_Component.XTYPE(),
            Ext_picker_Date_Component.PROPERTIESOBJECT(),
            Ext_picker_Date_Component.EVENTS()
        )
        this.XTYPE = Ext_picker_Date_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_picker_Date_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_picker_Date_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_picker_Date_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
