import Ext_Panel_Component from '../../../Ext/Panel';

export default class Ext_grid_rowedit_Bar_Component extends Ext_Panel_Component {
//events
//configs

static XTYPE() {return 'roweditorbar'}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_grid_rowedit_Bar_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_grid_rowedit_Bar_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_grid_rowedit_Bar_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_grid_rowedit_Bar_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_grid_rowedit_Bar_Component.METHODS()),
            events.concat(Ext_grid_rowedit_Bar_Component.EVENTS())



            //events.concat(Ext_grid_rowedit_Bar_Component.EVENTS()),
            //propertiesobject.concat(Ext_grid_rowedit_Bar_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_grid_rowedit_Bar_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_grid_rowedit_Bar_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_grid_rowedit_Bar_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_grid_rowedit_Bar_Component.METHODS())
        )
        //this.XTYPE = Ext_grid_rowedit_Bar_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_rowedit_Bar_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_grid_rowedit_Bar_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_grid_rowedit_Bar_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
