import Ext_chart_navigator_NavigatorBase_Component from '../../../Ext/chart/navigator/NavigatorBase';

export default class Ext_chart_navigator_Navigator_Component extends Ext_chart_navigator_NavigatorBase_Component {
//events
//configs

static XTYPE() {return ''}
static PROPERTIESOBJECT() { return {
"axes":["any"],
"axis":["string"],
"docked":["'bottom'","'top'"],
"flipXY":["any"],
"height":["number"],
"highlightItem":["any"],
"innerPadding":["any"],
"insetPadding":["any"],
"interactions":["any"],
"legend":["any"],
"maximum":["number"],
"minimum":["number"],
"navigatorContainer":["Ext.chart.navigator.Container"],
"series":["any"],
"span":["'series'","'chart'"],
"store":["any"],
"theme":["any"],
"thumbGap":["number"],
"tolerance":["number"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_chart_navigator_Navigator_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_chart_navigator_Navigator_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_chart_navigator_Navigator_Component.METHODS(),
            Ext_chart_navigator_Navigator_Component.XTYPE(),
            Ext_chart_navigator_Navigator_Component.PROPERTIESOBJECT(),
            Ext_chart_navigator_Navigator_Component.EVENTS()
        )
        this.XTYPE = Ext_chart_navigator_Navigator_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_chart_navigator_Navigator_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_chart_navigator_Navigator_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_chart_navigator_Navigator_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
