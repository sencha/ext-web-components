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
            
        )
        this.XTYPE = Ext_dataview_ListItem_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_dataview_ListItem_Component.PROPERTIESOBJECT());
        this.methods = this.extendArray(this.methods, Ext_dataview_ListItem_Component.METHODS());
        this.events = this.extendArray(this.events, Ext_dataview_ListItem_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}