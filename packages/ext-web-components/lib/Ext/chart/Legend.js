import Ext_chart_legend_LegendBase_Component from '../../Ext/chart/legend/LegendBase';

export default class Ext_chart_Legend_Component extends Ext_chart_legend_LegendBase_Component {
//events
//configs

static XTYPE() {return 'legend'}
static PROPERTIESOBJECT() { return {
"rect":["array"],
"store":["Ext.chart.legend.store.Store"],
"toggleable":["boolean"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_chart_Legend_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_chart_Legend_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_chart_Legend_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_chart_Legend_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_chart_Legend_Component.METHODS()),
            events.concat(Ext_chart_Legend_Component.EVENTS())



            //events.concat(Ext_chart_Legend_Component.EVENTS()),
            //propertiesobject.concat(Ext_chart_Legend_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_chart_Legend_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_chart_Legend_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_chart_Legend_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_chart_Legend_Component.METHODS())
        )
        //this.XTYPE = Ext_chart_Legend_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_chart_Legend_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_chart_Legend_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_chart_Legend_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
