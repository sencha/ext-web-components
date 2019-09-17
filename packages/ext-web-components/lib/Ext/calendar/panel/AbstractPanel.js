import Ext_Panel_Component from '../../../Ext/Panel';

export default class Ext_calendar_panel_AbstractPanel_Component extends Ext_Panel_Component {
//events
//configs

static XTYPE() {return ''}
static PROPERTIESOBJECT() { return {
"menuButton":["object"],
"sheet":["object"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'getMenuButton',function: function() { return this.ext.getMenuButton() } },
{ name:'getSheet',function: function() { return this.ext.getSheet() } },
{ name:'setMenuButton',function: function() { return this.ext.setMenuButton() } },
{ name:'setSheet',function: function() { return this.ext.setSheet() } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_calendar_panel_AbstractPanel_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_calendar_panel_AbstractPanel_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_calendar_panel_AbstractPanel_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_calendar_panel_AbstractPanel_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_calendar_panel_AbstractPanel_Component.METHODS()),
            events.concat(Ext_calendar_panel_AbstractPanel_Component.EVENTS())



            //events.concat(Ext_calendar_panel_AbstractPanel_Component.EVENTS()),
            //propertiesobject.concat(Ext_calendar_panel_AbstractPanel_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_calendar_panel_AbstractPanel_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_calendar_panel_AbstractPanel_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_calendar_panel_AbstractPanel_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_calendar_panel_AbstractPanel_Component.METHODS())
        )
        //this.XTYPE = Ext_calendar_panel_AbstractPanel_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_calendar_panel_AbstractPanel_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_calendar_panel_AbstractPanel_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_calendar_panel_AbstractPanel_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
