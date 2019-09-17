import Ext_Toolbar_Component from '../../Ext/Toolbar';

export default class Ext_grid_PagingToolbar_Component extends Ext_Toolbar_Component {
//events
//configs

static XTYPE() {return 'pagingtoolbar'}
static PROPERTIESOBJECT() { return {
"nextButton":["object"],
"prevButton":["object"],
"sliderField":["object"],
"summaryComponent":["object"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_grid_PagingToolbar_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_grid_PagingToolbar_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_grid_PagingToolbar_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_grid_PagingToolbar_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_grid_PagingToolbar_Component.METHODS()),
            events.concat(Ext_grid_PagingToolbar_Component.EVENTS())



            //events.concat(Ext_grid_PagingToolbar_Component.EVENTS()),
            //propertiesobject.concat(Ext_grid_PagingToolbar_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_grid_PagingToolbar_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_grid_PagingToolbar_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_grid_PagingToolbar_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_grid_PagingToolbar_Component.METHODS())
        )
        //this.XTYPE = Ext_grid_PagingToolbar_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_PagingToolbar_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_grid_PagingToolbar_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_grid_PagingToolbar_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
