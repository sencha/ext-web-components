import Ext_chart_AbstractChart_Component from '../../Ext/chart/AbstractChart';

export default class Ext_chart_Chart_Component extends Ext_chart_AbstractChart_Component {
//events
//configs

static XTYPE() {return 'cartesian'}
static PROPERTIESOBJECT() { return {
"flipXY":["boolean"],
"innerPadding":["object"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'performLayout',function: function() { return this.ext.performLayout() } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_chart_Chart_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_chart_Chart_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_chart_Chart_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_chart_Chart_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_chart_Chart_Component.METHODS()),
            events.concat(Ext_chart_Chart_Component.EVENTS())



            //events.concat(Ext_chart_Chart_Component.EVENTS()),
            //propertiesobject.concat(Ext_chart_Chart_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_chart_Chart_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_chart_Chart_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_chart_Chart_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_chart_Chart_Component.METHODS())
        )
        //this.XTYPE = Ext_chart_Chart_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_chart_Chart_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_chart_Chart_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_chart_Chart_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
