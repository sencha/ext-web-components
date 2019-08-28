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

    constructor() {
        super (
            Ext_grid_PagingToolbar_Component.METHODS(),
            Ext_grid_PagingToolbar_Component.XTYPE(),
            Ext_grid_PagingToolbar_Component.PROPERTIESOBJECT(),
            Ext_grid_PagingToolbar_Component.EVENTS()
        )
        this.XTYPE = Ext_grid_PagingToolbar_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_PagingToolbar_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_grid_PagingToolbar_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_grid_PagingToolbar_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
