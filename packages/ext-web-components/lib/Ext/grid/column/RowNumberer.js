import Ext_grid_column_Number_Component from '../../../Ext/grid/column/Number';

export default class Ext_grid_column_RowNumberer_Component extends Ext_grid_column_Number_Component {
//events
//configs

static XTYPE() {return 'rownumberer'}
static PROPERTIESOBJECT() { return {
"menu":["boolean"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_grid_column_RowNumberer_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_grid_column_RowNumberer_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_grid_column_RowNumberer_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_grid_column_RowNumberer_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_grid_column_RowNumberer_Component.METHODS()),
            events.concat(Ext_grid_column_RowNumberer_Component.EVENTS())



            //events.concat(Ext_grid_column_RowNumberer_Component.EVENTS()),
            //propertiesobject.concat(Ext_grid_column_RowNumberer_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_grid_column_RowNumberer_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_grid_column_RowNumberer_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_grid_column_RowNumberer_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_grid_column_RowNumberer_Component.METHODS())
        )
        //this.XTYPE = Ext_grid_column_RowNumberer_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_column_RowNumberer_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_grid_column_RowNumberer_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_grid_column_RowNumberer_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
