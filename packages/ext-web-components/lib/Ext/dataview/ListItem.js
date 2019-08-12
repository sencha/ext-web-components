import Ext_dataview_DataItem_Component from '../../Ext/dataview/DataItem';

export default class Ext_dataview_ListItem_Component extends Ext_dataview_DataItem_Component {
//events
//configs

static XTYPE() {return 'listitem'}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_dataview_ListItem_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_dataview_ListItem_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_dataview_ListItem_Component.METHODS(),
            Ext_dataview_ListItem_Component.XTYPE(),
            Ext_dataview_ListItem_Component.PROPERTIESOBJECT(),
            Ext_dataview_ListItem_Component.EVENTS()
        )
        this.XTYPE = Ext_dataview_ListItem_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_dataview_ListItem_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_dataview_ListItem_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_dataview_ListItem_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
