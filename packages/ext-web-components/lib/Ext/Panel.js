import Ext_Container_Component from '../Ext/Container';

export default class Ext_Panel_Component extends Ext_Container_Component {
//events
get onbeforecollapse(){return this.getAttribute('onbeforecollapse')};set onbeforecollapse(onbeforecollapse){this.setAttribute('onbeforecollapse',onbeforecollapse)}
get onbeforeexpand(){return this.getAttribute('onbeforeexpand')};set onbeforeexpand(onbeforeexpand){this.setAttribute('onbeforeexpand',onbeforeexpand)}
get onbeforeresizedragstart(){return this.getAttribute('onbeforeresizedragstart')};set onbeforeresizedragstart(onbeforeresizedragstart){this.setAttribute('onbeforeresizedragstart',onbeforeresizedragstart)}
get oncollapse(){return this.getAttribute('oncollapse')};set oncollapse(oncollapse){this.setAttribute('oncollapse',oncollapse)}
get ondrawerhide(){return this.getAttribute('ondrawerhide')};set ondrawerhide(ondrawerhide){this.setAttribute('ondrawerhide',ondrawerhide)}
get ondrawershow(){return this.getAttribute('ondrawershow')};set ondrawershow(ondrawershow){this.setAttribute('ondrawershow',ondrawershow)}
get onexpand(){return this.getAttribute('onexpand')};set onexpand(onexpand){this.setAttribute('onexpand',onexpand)}
get onresizedrag(){return this.getAttribute('onresizedrag')};set onresizedrag(onresizedrag){this.setAttribute('onresizedrag',onresizedrag)}
get onresizedragcancel(){return this.getAttribute('onresizedragcancel')};set onresizedragcancel(onresizedragcancel){this.setAttribute('onresizedragcancel',onresizedragcancel)}
get onresizedragend(){return this.getAttribute('onresizedragend')};set onresizedragend(onresizedragend){this.setAttribute('onresizedragend',onresizedragend)}
get onresizedragstart(){return this.getAttribute('onresizedragstart')};set onresizedragstart(onresizedragstart){this.setAttribute('onresizedragstart',onresizedragstart)}
//configs

static XTYPE() {return 'panel'}
static PROPERTIESOBJECT() { return {
"anchor":["boolean"],
"anchorPosition":["string"],
"bbar":["object","object[]"],
"bodyBorder":["boolean"],
"bodyPadding":["number","boolean","string"],
"bodyStyle":["string","object"],
"border":["boolean"],
"buttons":["object","Ext.Button[]"],
"buttonToolbar":["object","Ext.Toolbar"],
"closable":["boolean"],
"closeAction":["string"],
"closeToolText":["string"],
"collapsed":["boolean"],
"collapsible":["'top'","'right'","'bottom'","'left'","boolean","object"],
"header":["boolean","object"],
"headerPosition":["'top'","'right'","'bottom'","'left'"],
"icon":["string"],
"iconAlign":["'top'","'right'","'bottom'","'left'"],
"iconCls":["string"],
"lbar":["object","object[]"],
"manageBorders":["boolean"],
"rbar":["object","object[]"],
"resizable":["object"],
"tbar":["object","object[]"],
"title":["string","Ext.panel.Title"],
"titleAlign":["'left'","'center'","'right'"],
"titleCollapse":["boolean"],
}}
static EVENTS() { return [
{name:'beforecollapse',parameters:'undefined'},
{name:'beforeexpand',parameters:'undefined'},
{name:'beforeresizedragstart',parameters:'undefined,context'},
{name:'collapse',parameters:'undefined'},
{name:'drawerhide',parameters:'undefined'},
{name:'drawershow',parameters:'undefined'},
{name:'expand',parameters:'undefined'},
{name:'resizedrag',parameters:'undefined,context'},
{name:'resizedragcancel',parameters:'undefined,context'},
{name:'resizedragend',parameters:'undefined,context'},
{name:'resizedragstart',parameters:'undefined,context'},
]}
static METHODS() { return [
{ name:'addBodyCls',function: function(cls) { return this.ext.addBodyCls(cls) } },
{ name:'addTool',function: function(tool) { return this.ext.addTool(tool) } },
{ name:'close',function: function() { return this.ext.close() } },
{ name:'collapse',function: function(animation) { return this.ext.collapse(animation) } },
{ name:'expand',function: function(animation) { return this.ext.expand(animation) } },
{ name:'removeBodyCls',function: function(cls) { return this.ext.removeBodyCls(cls) } },
{ name:'toggleCollapsed',function: function(collapsed,animation) { return this.ext.toggleCollapsed(collapsed,animation) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_Panel_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_Panel_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_Panel_Component.METHODS(),
            Ext_Panel_Component.XTYPE(),
            Ext_Panel_Component.PROPERTIESOBJECT(),
            Ext_Panel_Component.EVENTS()
        )
        this.XTYPE = Ext_Panel_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Panel_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_Panel_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_Panel_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
