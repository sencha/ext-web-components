import Ext_draw_Container_Component from '../../Ext/draw/Container';

export default class Ext_chart_AbstractChart_Component extends Ext_draw_Container_Component {
//events
get onbeforerefresh(){return this.getAttribute('onbeforerefresh')};set onbeforerefresh(onbeforerefresh){this.setAttribute('onbeforerefresh',onbeforerefresh)}
get onitemclick(){return this.getAttribute('onitemclick')};set onitemclick(onitemclick){this.setAttribute('onitemclick',onitemclick)}
get onitemdblclick(){return this.getAttribute('onitemdblclick')};set onitemdblclick(onitemdblclick){this.setAttribute('onitemdblclick',onitemdblclick)}
get onitemhighlight(){return this.getAttribute('onitemhighlight')};set onitemhighlight(onitemhighlight){this.setAttribute('onitemhighlight',onitemhighlight)}
get onitemhighlightchange(){return this.getAttribute('onitemhighlightchange')};set onitemhighlightchange(onitemhighlightchange){this.setAttribute('onitemhighlightchange',onitemhighlightchange)}
get onitemmousedown(){return this.getAttribute('onitemmousedown')};set onitemmousedown(onitemmousedown){this.setAttribute('onitemmousedown',onitemmousedown)}
get onitemmousemove(){return this.getAttribute('onitemmousemove')};set onitemmousemove(onitemmousemove){this.setAttribute('onitemmousemove',onitemmousemove)}
get onitemmouseout(){return this.getAttribute('onitemmouseout')};set onitemmouseout(onitemmouseout){this.setAttribute('onitemmouseout',onitemmouseout)}
get onitemmouseover(){return this.getAttribute('onitemmouseover')};set onitemmouseover(onitemmouseover){this.setAttribute('onitemmouseover',onitemmouseover)}
get onitemmouseup(){return this.getAttribute('onitemmouseup')};set onitemmouseup(onitemmouseup){this.setAttribute('onitemmouseup',onitemmouseup)}
get onitemtap(){return this.getAttribute('onitemtap')};set onitemtap(onitemtap){this.setAttribute('onitemtap',onitemtap)}
get onlayout(){return this.getAttribute('onlayout')};set onlayout(onlayout){this.setAttribute('onlayout',onlayout)}
get onredraw(){return this.getAttribute('onredraw')};set onredraw(onredraw){this.setAttribute('onredraw',onredraw)}
get onrefresh(){return this.getAttribute('onrefresh')};set onrefresh(onrefresh){this.setAttribute('onrefresh',onrefresh)}
get onstorechange(){return this.getAttribute('onstorechange')};set onstorechange(onstorechange){this.setAttribute('onstorechange',onstorechange)}
//configs

static XTYPE() {return ''}
static PROPERTIESOBJECT() { return {
"animation":["boolean","object"],
"axes":["Ext.chart.axis.Axis","array","object"],
"background":["object"],
"captions":["object"],
"colors":["array"],
"highlightItem":["object"],
"insetPadding":["object","number","string"],
"interactions":["array"],
"legend":["Ext.chart.legend.Legend","Ext.chart.legend.SpriteLegend","boolean"],
"mainRect":["any"],
"resizeHandler":["any"],
"series":["Ext.chart.series.Series","array"],
"store":["Ext.data.Store","string","object"],
"style":["object"],
"theme":["string"],
}}
static EVENTS() { return [
{name:'beforerefresh',parameters:'undefined'},
{name:'itemclick',parameters:'chart,item,event'},
{name:'itemdblclick',parameters:'chart,item,event'},
{name:'itemhighlight',parameters:'undefined,newItem,oldItem'},
{name:'itemhighlightchange',parameters:'undefined,newItem,oldItem'},
{name:'itemmousedown',parameters:'chart,item,event'},
{name:'itemmousemove',parameters:'chart,item,event'},
{name:'itemmouseout',parameters:'chart,item,event'},
{name:'itemmouseover',parameters:'chart,item,event'},
{name:'itemmouseup',parameters:'chart,item,event'},
{name:'itemtap',parameters:'chart,item,event'},
{name:'layout',parameters:'undefined'},
{name:'redraw',parameters:'undefined'},
{name:'refresh',parameters:'undefined'},
{name:'storechange',parameters:'chart,newStore,oldStore'},
]}
static METHODS() { return [
{ name:'addSeries',function: function(newSeries) { return this.ext.addSeries(newSeries) } },
{ name:'bindStore',function: function(store) { return this.ext.bindStore(store) } },
{ name:'cancelChartLayout',function: function() { return this.ext.cancelChartLayout() } },
{ name:'checkLayoutEnd',function: function() { return this.ext.checkLayoutEnd() } },
{ name:'getAxis',function: function(axis) { return this.ext.getAxis(axis) } },
{ name:'getChartRect',function: function(isRecompute) { return this.ext.getChartRect(isRecompute) } },
{ name:'getEventXY',function: function(e) { return this.ext.getEventXY(e) } },
{ name:'getInteraction',function: function(type) { return this.ext.getInteraction(type) } },
{ name:'getItemForPoint',function: function(x,y) { return this.ext.getItemForPoint(x,y) } },
{ name:'getItemsForPoint',function: function(x,y) { return this.ext.getItemsForPoint(x,y) } },
{ name:'getLegendStore',function: function() { return this.ext.getLegendStore() } },
{ name:'getRefItems',function: function(deep) { return this.ext.getRefItems(deep) } },
{ name:'onDataChanged',function: function() { return this.ext.onDataChanged() } },
{ name:'onLayoutEnd',function: function() { return this.ext.onLayoutEnd() } },
{ name:'performLayout',function: function() { return this.ext.performLayout() } },
{ name:'processData',function: function() { return this.ext.processData() } },
{ name:'redraw',function: function() { return this.ext.redraw() } },
{ name:'refreshBackground',function: function(surface,newBackground,oldBackground) { return this.ext.refreshBackground(surface,newBackground,oldBackground) } },
{ name:'removeSeries',function: function(series) { return this.ext.removeSeries(series) } },
{ name:'resumeChartLayout',function: function() { return this.ext.resumeChartLayout() } },
{ name:'resumeThicknessChanged',function: function() { return this.ext.resumeThicknessChanged() } },
{ name:'scheduleLayout',function: function() { return this.ext.scheduleLayout() } },
{ name:'suspendChartLayout',function: function() { return this.ext.suspendChartLayout() } },
{ name:'suspendThicknessChanged',function: function() { return this.ext.suspendThicknessChanged() } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_chart_AbstractChart_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_chart_AbstractChart_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_chart_AbstractChart_Component.METHODS(),
            Ext_chart_AbstractChart_Component.XTYPE(),
            Ext_chart_AbstractChart_Component.PROPERTIESOBJECT(),
            Ext_chart_AbstractChart_Component.EVENTS()
        )
        this.XTYPE = Ext_chart_AbstractChart_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_chart_AbstractChart_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_chart_AbstractChart_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_chart_AbstractChart_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
