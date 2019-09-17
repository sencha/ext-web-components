import Ext_Panel_Component from '../../Ext/Panel';

export default class Ext_panel_Date_Component extends Ext_Panel_Component {
//events
//configs

static XTYPE() {return 'datepanel'}
static PROPERTIESOBJECT() { return {
"animation":["boolean"],
"autoConfirm":["boolean"],
"captionFormat":["string"],
"dateCellFormat":["string"],
"disabledDates":["date[]","string[]","regexp"],
"disabledDays":["number[]"],
"focusableDate":["date"],
"format":["string"],
"handler":["function"],
"headerFormat":["string"],
"headerLength":["number"],
"hideCaptions":["boolean"],
"hideOutside":["boolean"],
"maxDate":["date","string"],
"minDate":["date","string"],
"navigationPosition":["'header'","'caption'"],
"nextText":["string"],
"panes":["number"],
"prevText":["string"],
"scope":["object"],
"selectOnNavigate":["boolean"],
"showAfterMaxDate":["boolean"],
"showBeforeMinDate":["boolean"],
"showFooter":["boolean"],
"showTodayButton":["boolean"],
"specialDates":["date[]","string[]","regexp[]"],
"specialDays":["number[]"],
"splitTitle":["boolean"],
"startDay":["number"],
"titleAnimation":["boolean","object"],
"transformCellCls":["function"],
"value":["date"],
"weekendDays":["number[]"],
"yearPicker":["object"],
"yearPickerDefaults":["object"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_panel_Date_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_panel_Date_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            
        )
        this.XTYPE = Ext_panel_Date_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_panel_Date_Component.PROPERTIESOBJECT());
        this.methods = this.extendArray(this.methods, Ext_panel_Date_Component.METHODS());
        this.events = this.extendArray(this.events, Ext_panel_Date_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
