import Ext_sparkline_Base_Component from '../../Ext/sparkline/Base';

export default class Ext_sparkline_Line_Component extends Ext_sparkline_Base_Component {
//events
//configs

static XTYPE() {return 'sparklineline'}
static PROPERTIESOBJECT() { return {
"chartRangeMax":["number"],
"chartRangeMaxX":["number"],
"chartRangeMin":["number"],
"chartRangeMinX":["number"],
"drawNormalOnTop":["boolean"],
"fillColor":["string"],
"highlightLineColor":["string"],
"highlightSpotColor":["string"],
"lineWidth":["number"],
"maxSpotColor":["string"],
"minSpotColor":["string"],
"normalRangeColor":["string"],
"normalRangeMax":["number"],
"normalRangeMin":["number"],
"spotColor":["string"],
"spotRadius":["number"],
"valueSpots":["object"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_sparkline_Line_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_sparkline_Line_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_sparkline_Line_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_sparkline_Line_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_sparkline_Line_Component.METHODS()),
            events.concat(Ext_sparkline_Line_Component.EVENTS())



            //events.concat(Ext_sparkline_Line_Component.EVENTS()),
            //propertiesobject.concat(Ext_sparkline_Line_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_sparkline_Line_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_sparkline_Line_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_sparkline_Line_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_sparkline_Line_Component.METHODS())
        )
        //this.XTYPE = Ext_sparkline_Line_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_sparkline_Line_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_sparkline_Line_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_sparkline_Line_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
