import Ext_panel_Title_Component from '../../Ext/panel/Title';

export default class Ext_panel_DateTitle_Component extends Ext_panel_Title_Component {
//events
//configs

static XTYPE() {return 'datetitle'}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_panel_DateTitle_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_panel_DateTitle_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_panel_DateTitle_Component.METHODS(),
            Ext_panel_DateTitle_Component.XTYPE(),
            Ext_panel_DateTitle_Component.PROPERTIESOBJECT(),
            Ext_panel_DateTitle_Component.EVENTS()
        )
        this.XTYPE = Ext_panel_DateTitle_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_panel_DateTitle_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_panel_DateTitle_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_panel_DateTitle_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
