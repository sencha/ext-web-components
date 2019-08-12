import Ext_Container_Component from '../../Ext/Container';

export default class Ext_dataview_Abstract_Component extends Ext_Container_Component {
//events
get onadd(){return this.getAttribute('onadd')};set onadd(onadd){this.setAttribute('onadd',onadd)}
get onbeforestorechange(){return this.getAttribute('onbeforestorechange')};set onbeforestorechange(onbeforestorechange){this.setAttribute('onbeforestorechange',onbeforestorechange)}
get ondeselect(){return this.getAttribute('ondeselect')};set ondeselect(ondeselect){this.setAttribute('ondeselect',ondeselect)}
get onitemdoubletap(){return this.getAttribute('onitemdoubletap')};set onitemdoubletap(onitemdoubletap){this.setAttribute('onitemdoubletap',onitemdoubletap)}
get onitemlongpress(){return this.getAttribute('onitemlongpress')};set onitemlongpress(onitemlongpress){this.setAttribute('onitemlongpress',onitemlongpress)}
get onitemmouseenter(){return this.getAttribute('onitemmouseenter')};set onitemmouseenter(onitemmouseenter){this.setAttribute('onitemmouseenter',onitemmouseenter)}
get onitemmouseleave(){return this.getAttribute('onitemmouseleave')};set onitemmouseleave(onitemmouseleave){this.setAttribute('onitemmouseleave',onitemmouseleave)}
get onitemsingletap(){return this.getAttribute('onitemsingletap')};set onitemsingletap(onitemsingletap){this.setAttribute('onitemsingletap',onitemsingletap)}
get onitemswipe(){return this.getAttribute('onitemswipe')};set onitemswipe(onitemswipe){this.setAttribute('onitemswipe',onitemswipe)}
get onitemtap(){return this.getAttribute('onitemtap')};set onitemtap(onitemtap){this.setAttribute('onitemtap',onitemtap)}
get onitemtaphold(){return this.getAttribute('onitemtaphold')};set onitemtaphold(onitemtaphold){this.setAttribute('onitemtaphold',onitemtaphold)}
get onitemtouchcancel(){return this.getAttribute('onitemtouchcancel')};set onitemtouchcancel(onitemtouchcancel){this.setAttribute('onitemtouchcancel',onitemtouchcancel)}
get onitemtouchend(){return this.getAttribute('onitemtouchend')};set onitemtouchend(onitemtouchend){this.setAttribute('onitemtouchend',onitemtouchend)}
get onitemtouchmove(){return this.getAttribute('onitemtouchmove')};set onitemtouchmove(onitemtouchmove){this.setAttribute('onitemtouchmove',onitemtouchmove)}
get onitemtouchstart(){return this.getAttribute('onitemtouchstart')};set onitemtouchstart(onitemtouchstart){this.setAttribute('onitemtouchstart',onitemtouchstart)}
get onmove(){return this.getAttribute('onmove')};set onmove(onmove){this.setAttribute('onmove',onmove)}
get onnavigate(){return this.getAttribute('onnavigate')};set onnavigate(onnavigate){this.setAttribute('onnavigate',onnavigate)}
get onrefresh(){return this.getAttribute('onrefresh')};set onrefresh(onrefresh){this.setAttribute('onrefresh',onrefresh)}
get onremove(){return this.getAttribute('onremove')};set onremove(onremove){this.setAttribute('onremove',onremove)}
get onselect(){return this.getAttribute('onselect')};set onselect(onselect){this.setAttribute('onselect',onselect)}
get onstorechange(){return this.getAttribute('onstorechange')};set onstorechange(onstorechange){this.setAttribute('onstorechange',onstorechange)}
//configs

static XTYPE() {return ''}
static PROPERTIESOBJECT() { return {
"associatedData":["boolean","object"],
"autoSize":["boolean"],
"data":["object"],
"deferEmptyText":["boolean"],
"deselectOnContainerClick":["boolean"],
"disableSelection":["boolean"],
"emptyItemText":["string"],
"emptyState":["boolean"],
"emptyText":["string","boolean"],
"emptyTextDefaults":["object","Ext.Component"],
"emptyTextProperty":["string"],
"inline":["boolean","object"],
"itemButtonMode":["boolean"],
"itemCls":["string"],
"itemsFocusable":["boolean"],
"itemTpl":["string","string[]","Ext.XTemplate"],
"loadingHeight":["number"],
"loadingText":["string","boolean"],
"markDirty":["boolean"],
"pressedDelay":["number"],
"publishes":["string","string[]","object"],
"scrollable":["boolean","string","object"],
"scrollDock":["'start'","'emd'"],
"scrollToTopOnRefresh":["boolean"],
"selectable":["object","Ext.dataview.selection.Model"],
"selection":["Ext.data.Model"],
"store":["Ext.data.Store","object"],
"tabIndex":["number"],
"triggerCtEvent":["'tap'","'singletap'"],
"triggerEvent":["'childtap'","'childsingletap'","'childdoubletap'","'childswipe'","'childtaphold'","'childlongpress'"],
"twoWayBindable":["string","string[]","object"],
}}
static EVENTS() { return [
{name:'add',parameters:''},
{name:'beforestorechange',parameters:'sender,value,oldValue,undefined'},
{name:'deselect',parameters:'undefined,records'},
{name:'itemdoubletap',parameters:'undefined,index,target,record,e'},
{name:'itemlongpress',parameters:'undefined,index,target,record,e'},
{name:'itemmouseenter',parameters:'undefined,index,target,record,e'},
{name:'itemmouseleave',parameters:'undefined,index,target,record,e'},
{name:'itemsingletap',parameters:'undefined,index,target,record,e'},
{name:'itemswipe',parameters:'undefined,index,target,record,e'},
{name:'itemtap',parameters:'undefined,index,target,record,e'},
{name:'itemtaphold',parameters:'undefined,index,target,record,e'},
{name:'itemtouchcancel',parameters:'undefined,index,target,record,e'},
{name:'itemtouchend',parameters:'undefined,index,target,record,e'},
{name:'itemtouchmove',parameters:'undefined,index,target,record,e'},
{name:'itemtouchstart',parameters:'undefined,index,target,record,e'},
{name:'move',parameters:''},
{name:'navigate',parameters:'undefined,to,from'},
{name:'refresh',parameters:'undefined'},
{name:'remove',parameters:''},
{name:'select',parameters:'undefined,selected'},
{name:'storechange',parameters:'sender,value,oldValue'},
]}
static METHODS() { return [
{ name:'ensureVisible',function: function(record,options) { return this.ext.ensureVisible(record,options) } },
{ name:'ensureVisiblePlan',function: function(record,plan) { return this.ext.ensureVisiblePlan(record,plan) } },
{ name:'getItemAt',function: function(index) { return this.ext.getItemAt(index) } },
{ name:'getItemFromPagePoint',function: function(x,y) { return this.ext.getItemFromPagePoint(x,y) } },
{ name:'getItemFromPoint',function: function(x,y) { return this.ext.getItemFromPoint(x,y) } },
{ name:'getItemIndex',function: function(item) { return this.ext.getItemIndex(item) } },
{ name:'getScrollDockedItems',function: function(which) { return this.ext.getScrollDockedItems(which) } },
{ name:'getViewItems',function: function() { return this.ext.getViewItems() } },
{ name:'indexModifiedFields',function: function(modified) { return this.ext.indexModifiedFields(modified) } },
{ name:'itemAs',function: function(item,as) { return this.ext.itemAs(item,as) } },
{ name:'mapToItem',function: function(value,as) { return this.ext.mapToItem(value,as) } },
{ name:'mapToRecord',function: function(value) { return this.ext.mapToRecord(value) } },
{ name:'mapToRecordIndex',function: function(value,uncollapsed) { return this.ext.mapToRecordIndex(value,uncollapsed) } },
{ name:'mapToViewIndex',function: function(value,indexOffset) { return this.ext.mapToViewIndex(value,indexOffset) } },
{ name:'nextItem',function: function(item,as) { return this.ext.nextItem(item,as) } },
{ name:'onNavigate',function: function(e) { return this.ext.onNavigate(e) } },
{ name:'onRelease',function: function() { return this.ext.onRelease() } },
{ name:'prepareData',function: function(data,index,record) { return this.ext.prepareData(data,index,record) } },
{ name:'previousItem',function: function(item,as) { return this.ext.previousItem(item,as) } },
{ name:'refresh',function: function() { return this.ext.refresh() } },
{ name:'saveFocusState',function: function() { return this.ext.saveFocusState() } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_dataview_Abstract_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_dataview_Abstract_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_dataview_Abstract_Component.METHODS(),
            Ext_dataview_Abstract_Component.XTYPE(),
            Ext_dataview_Abstract_Component.PROPERTIESOBJECT(),
            Ext_dataview_Abstract_Component.EVENTS()
        )
        this.XTYPE = Ext_dataview_Abstract_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_dataview_Abstract_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_dataview_Abstract_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_dataview_Abstract_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
