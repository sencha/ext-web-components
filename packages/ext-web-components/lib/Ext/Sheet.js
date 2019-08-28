import Ext_Panel_Component from '../Ext/Panel';

export default class Ext_Sheet_Component extends Ext_Panel_Component {
//events
//configs

static XTYPE() {return 'sheet'}
static PROPERTIESOBJECT() { return {
"centered":["boolean"],
"cover":["boolean"],
"enter":["'top'","'bottom'","'left'","'right'"],
"exit":["'top'","'bottom'","'left'","'right'"],
"reveal":["boolean"],
"side":["'left'","'right'","'top'","'bottom'"],
"stretchX":["boolean"],
"stretchY":["boolean"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_Sheet_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_Sheet_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_Sheet_Component.METHODS(),
            Ext_Sheet_Component.XTYPE(),
            Ext_Sheet_Component.PROPERTIESOBJECT(),
            Ext_Sheet_Component.EVENTS()
        )
        this.XTYPE = Ext_Sheet_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Sheet_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_Sheet_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_Sheet_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
