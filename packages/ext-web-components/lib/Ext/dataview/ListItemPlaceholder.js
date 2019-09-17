import Ext_dataview_SimpleListItem_Component from '../../Ext/dataview/SimpleListItem';

export default class Ext_dataview_ListItemPlaceholder_Component extends Ext_dataview_SimpleListItem_Component {
//events
//configs

static XTYPE() {return 'listitemplaceholder'}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_dataview_ListItemPlaceholder_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_dataview_ListItemPlaceholder_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_dataview_ListItemPlaceholder_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_dataview_ListItemPlaceholder_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_dataview_ListItemPlaceholder_Component.METHODS()),
            events.concat(Ext_dataview_ListItemPlaceholder_Component.EVENTS())



            //events.concat(Ext_dataview_ListItemPlaceholder_Component.EVENTS()),
            //propertiesobject.concat(Ext_dataview_ListItemPlaceholder_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_dataview_ListItemPlaceholder_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_dataview_ListItemPlaceholder_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_dataview_ListItemPlaceholder_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_dataview_ListItemPlaceholder_Component.METHODS())
        )
        //this.XTYPE = Ext_dataview_ListItemPlaceholder_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_dataview_ListItemPlaceholder_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_dataview_ListItemPlaceholder_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_dataview_ListItemPlaceholder_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
