import Ext_grid_column_Column_Component from '../../../Ext/grid/column/Column';

export default class Ext_grid_column_Text_Component extends Ext_grid_column_Column_Component {
//events
//configs

static XTYPE() {return 'textcolumn'}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_grid_column_Text_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_grid_column_Text_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_grid_column_Text_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_grid_column_Text_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_grid_column_Text_Component.METHODS()),
            events.concat(Ext_grid_column_Text_Component.EVENTS())



            //events.concat(Ext_grid_column_Text_Component.EVENTS()),
            //propertiesobject.concat(Ext_grid_column_Text_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_grid_column_Text_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_grid_column_Text_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_grid_column_Text_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_grid_column_Text_Component.METHODS())
        )
        //this.XTYPE = Ext_grid_column_Text_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_column_Text_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_grid_column_Text_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_grid_column_Text_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
