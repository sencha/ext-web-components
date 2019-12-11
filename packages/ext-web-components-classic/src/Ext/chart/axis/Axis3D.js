import Ext_chart_axis_Axis from '../../../Ext/chart/axis/Axis.js';

export default class Ext_chart_axis_Axis3D extends Ext_chart_axis_Axis {
    static PROPERTIES() {return [
    'adjustByMajorUnit',
    'background',
    'center',
    'chart',
    'depth',
    'expandRangeBy',
    'fields',
    'floating',
    'grid',
    'hidden',
    'id',
    'label',
    'layout',
    'length',
    'limits',
    'linkedTo',
    'listeners',
    'majorTickSteps',
    'margin',
    'maximum',
    'maxZoom',
    'minimum',
    'minorTickSteps',
    'minZoom',
    'needHighPrecision',
    'position',
    'radius',
    'reconcileRange',
    'renderer',
    'rotation',
    'segmenter',
    'style',
    'title',
    'titleMargin',
    'totalAngle',
    'visibleRange',
    ]};
    static EVENTS() {return [
    {name:'rangechange', parameters:'axis,range,oldRange'},
    {name:'visiblerangechange', parameters:'axis,visibleRange'},
    {name:'ready', parameters:'cmd,cmdAll'}
    ]};
    static getProperties(properties) {
        properties = properties.concat(Ext_chart_axis_Axis3D.PROPERTIES());
        return Ext_chart_axis_Axis.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_chart_axis_Axis3D.EVENTS());
        return Ext_chart_axis_Axis.getEvents(events);
    }
//events
////configs
//
//static XTYPE() {return ''}
//static PROPERTIESOBJECT() { return {
//}}

//static METHODS() { return [
//]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        //for (var property in Ext_chart_axis_Axis3D.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        Ext_chart_axis_Axis3D.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_chart_axis_Axis3D.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_chart_axis_Axis3D.PROPERTIES()),
            events.concat(Ext_chart_axis_Axis3D.EVENTS())
        )
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
