import Ext_grid_filters_menu_Base_Component from '../../../../Ext/grid/filters/menu/Base';

export default class Ext_grid_filters_menu_String_Component extends Ext_grid_filters_menu_Base_Component {
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
        for (var property in Ext_grid_filters_menu_String_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_grid_filters_menu_String_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_grid_filters_menu_String_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_grid_filters_menu_String_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_grid_filters_menu_String_Component.METHODS()),
            events.concat(Ext_grid_filters_menu_String_Component.EVENTS())



            //events.concat(Ext_grid_filters_menu_String_Component.EVENTS()),
            //propertiesobject.concat(Ext_grid_filters_menu_String_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_grid_filters_menu_String_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_grid_filters_menu_String_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_grid_filters_menu_String_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_grid_filters_menu_String_Component.METHODS())
        )
        //this.XTYPE = Ext_grid_filters_menu_String_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_filters_menu_String_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_grid_filters_menu_String_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_grid_filters_menu_String_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
