import Ext_chart_AbstractChart_Component from '../../Ext/chart/AbstractChart';

export default class Ext_chart_SpaceFillingChart_Component extends Ext_chart_AbstractChart_Component {
//events
//configs

static XTYPE() {return 'spacefilling'}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_chart_SpaceFillingChart_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_chart_SpaceFillingChart_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            
        )
        this.XTYPE = Ext_chart_SpaceFillingChart_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_chart_SpaceFillingChart_Component.PROPERTIESOBJECT());
        this.methods = this.extendArray(this.methods, Ext_chart_SpaceFillingChart_Component.METHODS());
        this.events = this.extendArray(this.events, Ext_chart_SpaceFillingChart_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}