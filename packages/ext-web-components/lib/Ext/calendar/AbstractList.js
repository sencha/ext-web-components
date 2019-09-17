import Ext_dataview_DataView_Component from '../../Ext/dataview/DataView';

export default class Ext_calendar_AbstractList_Component extends Ext_dataview_DataView_Component {
//events
//configs

static XTYPE() {return ''}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_calendar_AbstractList_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_calendar_AbstractList_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_calendar_AbstractList_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_calendar_AbstractList_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_calendar_AbstractList_Component.METHODS()),
            events.concat(Ext_calendar_AbstractList_Component.EVENTS())



            //events.concat(Ext_calendar_AbstractList_Component.EVENTS()),
            //propertiesobject.concat(Ext_calendar_AbstractList_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_calendar_AbstractList_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_calendar_AbstractList_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_calendar_AbstractList_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_calendar_AbstractList_Component.METHODS())
        )
        //this.XTYPE = Ext_calendar_AbstractList_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_calendar_AbstractList_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_calendar_AbstractList_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_calendar_AbstractList_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
