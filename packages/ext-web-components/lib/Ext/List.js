import Ext_dataview_Component_Component from '../Ext/dataview/Component';

export default class Ext_List_Component extends Ext_dataview_Component_Component {
//events
get onbeforegroupcollapse(){return this.getAttribute('onbeforegroupcollapse')};set onbeforegroupcollapse(onbeforegroupcollapse){this.setAttribute('onbeforegroupcollapse',onbeforegroupcollapse)}
get onbeforegroupexpand(){return this.getAttribute('onbeforegroupexpand')};set onbeforegroupexpand(onbeforegroupexpand){this.setAttribute('onbeforegroupexpand',onbeforegroupexpand)}
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
get ondisclose(){return this.getAttribute('ondisclose')};set ondisclose(ondisclose){this.setAttribute('ondisclose',ondisclose)}
get ongroupcollapse(){return this.getAttribute('ongroupcollapse')};set ongroupcollapse(ongroupcollapse){this.setAttribute('ongroupcollapse',ongroupcollapse)}
get ongroupexpand(){return this.getAttribute('ongroupexpand')};set ongroupexpand(ongroupexpand){this.setAttribute('ongroupexpand',ongroupexpand)}
get onitemaction(){return this.getAttribute('onitemaction')};set onitemaction(onitemaction){this.setAttribute('onitemaction',onitemaction)}
//configs

static XTYPE() {return 'list'}
static PROPERTIESOBJECT() { return {
"bufferSize":["number"],
"collapseDefaults":["Ext.dataview.ListCollapser","object"],
"collapsible":["Ext.dataview.ListCollapser","object","boolean"],
"disclosureProperty":["string"],
"grouped":["boolean"],
"groupFooter":["object","Ext.dataview.ItemHeader"],
"groupHeader":["object","Ext.dataview.ItemHeader"],
"grouping":["any"],
"groupPlaceholder":["object","Ext.dataview.ListItemPlaceholder"],
"horizontalOverflow":["any"],
"indexBar":["boolean","object","Ext.dataview.IndexBar"],
"infinite":["boolean"],
"innerCtHeight":["any"],
"innerWidth":["any"],
"itemConfig":["object","Ext.Component"],
"maintainChildNodes":["boolean"],
"minimumBufferDistance":["number"],
"onItemDisclosure":["boolean","function","string","object"],
"pinFooters":["boolean"],
"pinHeaders":["boolean"],
"pinnedFooter":["object"],
"pinnedFooterHeight":["any"],
"pinnedHeader":["object"],
"pinnedHeaderHeight":["any"],
"preventSelectionOnDisclose":["boolean"],
"preventSelectionOnTool":["boolean"],
"rowLines":["boolean"],
"scrollable":["boolean","string","object"],
"topRenderedIndex":["any"],
"variableHeights":["boolean"],
"verticalOverflow":["boolean"],
"visibleHeight":["number"],
"visibleLeft":["any"],
"visibleTop":["number"],
"visibleWidth":["any"],
}}
static EVENTS() { return [
{name:'beforegroupcollapse',parameters:'undefined,group'},
{name:'beforegroupexpand',parameters:'undefined,group'},
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
{name:'disclose',parameters:'list,record,target,index,event'},
{name:'groupcollapse',parameters:'undefined,group'},
{name:'groupexpand',parameters:'undefined,group'},
{name:'itemaction',parameters:'undefined,index,record,action'},
]}
static METHODS() { return [
{ name:'getScrollableClientRegion',function: function() { return this.ext.getScrollableClientRegion() } },
{ name:'groupFrom',function: function(key) { return this.ext.groupFrom(key) } },
{ name:'isRecordRendered',function: function(recordOrIndex) { return this.ext.isRecordRendered(recordOrIndex) } },
{ name:'reorderItem',function: function(item,ref,offset) { return this.ext.reorderItem(item,ref,offset) } },
{ name:'scrollToRecord',function: function(record,animation) { return this.ext.scrollToRecord(record,animation) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_List_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_List_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_List_Component.METHODS(),
            Ext_List_Component.XTYPE(),
            Ext_List_Component.PROPERTIESOBJECT(),
            Ext_List_Component.EVENTS()
        )
        this.XTYPE = Ext_List_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_List_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_List_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_List_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
