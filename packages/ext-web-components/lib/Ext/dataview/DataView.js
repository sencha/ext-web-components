import Ext_dataview_Abstract_Component from '../../Ext/dataview/Abstract';

export default class Ext_dataview_DataView_Component extends Ext_dataview_Abstract_Component {
//events
get onchilddoubletap(){return this.getAttribute('onchilddoubletap')};set onchilddoubletap(onchilddoubletap){this.setAttribute('onchilddoubletap',onchilddoubletap)}
get onchildlongpress(){return this.getAttribute('onchildlongpress')};set onchildlongpress(onchildlongpress){this.setAttribute('onchildlongpress',onchildlongpress)}
get onchildmouseenter(){return this.getAttribute('onchildmouseenter')};set onchildmouseenter(onchildmouseenter){this.setAttribute('onchildmouseenter',onchildmouseenter)}
get onchildmouseleave(){return this.getAttribute('onchildmouseleave')};set onchildmouseleave(onchildmouseleave){this.setAttribute('onchildmouseleave',onchildmouseleave)}
get onchildsingletap(){return this.getAttribute('onchildsingletap')};set onchildsingletap(onchildsingletap){this.setAttribute('onchildsingletap',onchildsingletap)}
get onchildtap(){return this.getAttribute('onchildtap')};set onchildtap(onchildtap){this.setAttribute('onchildtap',onchildtap)}
get onchildtaphold(){return this.getAttribute('onchildtaphold')};set onchildtaphold(onchildtaphold){this.setAttribute('onchildtaphold',onchildtaphold)}
get onchildtouchcancel(){return this.getAttribute('onchildtouchcancel')};set onchildtouchcancel(onchildtouchcancel){this.setAttribute('onchildtouchcancel',onchildtouchcancel)}
get onchildtouchend(){return this.getAttribute('onchildtouchend')};set onchildtouchend(onchildtouchend){this.setAttribute('onchildtouchend',onchildtouchend)}
get onchildtouchmove(){return this.getAttribute('onchildtouchmove')};set onchildtouchmove(onchildtouchmove){this.setAttribute('onchildtouchmove',onchildtouchmove)}
get onchildtouchstart(){return this.getAttribute('onchildtouchstart')};set onchildtouchstart(onchildtouchstart){this.setAttribute('onchildtouchstart',onchildtouchstart)}
get onrowselection(){return this.getAttribute('onrowselection')};set onrowselection(onrowselection){this.setAttribute('onrowselection',onrowselection)}
get onselectionchange(){return this.getAttribute('onselectionchange')};set onselectionchange(onselectionchange){this.setAttribute('onselectionchange',onselectionchange)}
//configs

static XTYPE() {return 'dataview'}
static PROPERTIESOBJECT() { return {
"lastSelected":["Ext.data.Model"],
"selected":["Ext.util.Collection"],
}}
static EVENTS() { return [
{name:'childdoubletap',parameters:'undefined,location'},
{name:'childlongpress',parameters:'undefined,location'},
{name:'childmouseenter',parameters:'undefined,location'},
{name:'childmouseleave',parameters:'undefined,location'},
{name:'childsingletap',parameters:'undefined,location'},
{name:'childtap',parameters:'undefined,location'},
{name:'childtaphold',parameters:'undefined,location'},
{name:'childtouchcancel',parameters:'undefined,location'},
{name:'childtouchend',parameters:'undefined,location'},
{name:'childtouchmove',parameters:'undefined,location'},
{name:'childtouchstart',parameters:'undefined,location'},
{name:'rowselection',parameters:'view,selection'},
{name:'selectionchange',parameters:'view,records,selected,selection'},
]}
static METHODS() { return [
{ name:'getItemClass',function: function(data) { return this.ext.getItemClass(data) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_dataview_DataView_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_dataview_DataView_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_dataview_DataView_Component.METHODS(),
            Ext_dataview_DataView_Component.XTYPE(),
            Ext_dataview_DataView_Component.PROPERTIESOBJECT(),
            Ext_dataview_DataView_Component.EVENTS()
        )
        this.XTYPE = Ext_dataview_DataView_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_dataview_DataView_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_dataview_DataView_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_dataview_DataView_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
