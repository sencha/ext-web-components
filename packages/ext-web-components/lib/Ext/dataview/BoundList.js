import Ext_dataview_List_Component from '../../Ext/dataview/List';

export default class Ext_dataview_BoundList_Component extends Ext_dataview_List_Component {
//events
//configs

static XTYPE() {return 'boundlist'}
static PROPERTIESOBJECT() { return {
"triggerEvent":["'tap'"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'beforeSelectionRefresh',function: function(toDeselect,toReselect) { return this.ext.beforeSelectionRefresh(toDeselect,toReselect) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_dataview_BoundList_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_dataview_BoundList_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_dataview_BoundList_Component.METHODS(),
            Ext_dataview_BoundList_Component.XTYPE(),
            Ext_dataview_BoundList_Component.PROPERTIESOBJECT(),
            Ext_dataview_BoundList_Component.EVENTS()
        )
        this.XTYPE = Ext_dataview_BoundList_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_dataview_BoundList_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_dataview_BoundList_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_dataview_BoundList_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
